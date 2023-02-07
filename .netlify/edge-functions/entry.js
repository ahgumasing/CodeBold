globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};

// .netlify/edge-functions/chunks/astro.45f4a0dc.mjs
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];
      if (ext[0] === "*") {
        continue;
      }
      if (!force && ext in this._types) {
        throw new Error(
          'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
        );
      }
      this._types[ext] = type;
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
    }
  }
};
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, "").toLowerCase();
  let ext = last.replace(/^.*\./, "").toLowerCase();
  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;
  return (hasDot || !hasPath) && this._types[ext] || null;
};
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request;
var _requestValues;
var _outgoing;
var _ensureParsed;
var ensureParsed_fn;
var _ensureOutgoingMap;
var ensureOutgoingMap_fn;
var _parse;
var parse_fn;
var DELETED_EXPIRATION = new Date(0);
var DELETED_VALUE = "deleted";
var AstroCookie = class {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
};
var AstroCookies = class {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize_1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize_1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
};
_request = /* @__PURE__ */ new WeakMap();
_requestValues = /* @__PURE__ */ new WeakMap();
_outgoing = /* @__PURE__ */ new WeakMap();
_ensureParsed = /* @__PURE__ */ new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = /* @__PURE__ */ new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = /* @__PURE__ */ new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse_1(raw));
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}
var defineErrors = (errs) => errs;
var AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3,
    hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler."
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName2) => `Unable to create a slot named \`${slotName2}\`. \`${slotName2}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  InvalidComponentArgs: {
    title: "Invalid component arguments.",
    code: 3020,
    message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  InvalidFrontmatterInjectionError: {
    title: "Invalid frontmatter injection.",
    code: 6003,
    message: 'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
    hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information."
  },
  MdxIntegrationMissingError: {
    title: "MDX integration missing.",
    code: 6004,
    message: (file) => `Unable to render ${file}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
    hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/"
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownContentCollectionError: {
    title: "Unknown Content Collection Error.",
    code: 9e3
  },
  InvalidContentEntryFrontmatterError: {
    title: "Content entry frontmatter does not match schema.",
    code: 9001,
    message: (collection, entryId, error2) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error2.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  InvalidContentEntrySlugError: {
    title: "Invalid content entry slug.",
    code: 9002,
    message: (collection, entryId) => {
      return `${String(collection)} \u2192 ${String(
        entryId
      )} has an invalid slug. \`slug\` must be a string.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  ContentSchemaContainsSlugError: {
    title: "Content Schema should not contain `slug`.",
    code: 9003,
    message: (collection) => {
      return `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${collection} collection schema.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
var AstroError = class extends Error {
  constructor(props, ...params) {
    var _a3;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack: stack2, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a3 = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a3.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack2 ? stack2 : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
};
function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId) {
  var _a3;
  const name = ((_a3 = moduleId == null ? void 0 : moduleId.split("/").pop()) == null ? void 0 : _a3.replace(".astro", "")) ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...AstroErrorData.InvalidComponentArgs,
        message: AstroErrorData.InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}
var ASTRO_VERSION = "2.0.5";
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a3;
  const { request, params } = context;
  const chosenMethod = (_a3 = request.method) == null ? void 0 : _a3.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
var escapeHTML = escape;
var HTMLString = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement$1("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = links.join("\n") + styles.join("\n") + scripts.join("\n");
  if (result.extraHead.length > 0) {
    for (const part of result.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead(result) {
  yield { type: "head", result };
}
function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield { type: "head", result };
}
var headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}
var _a$1;
var renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
var RenderTemplateResult = class {
  constructor(htmlParts, expressions) {
    this[_a$1] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  async *[(_a$1 = renderTemplateResultSym, Symbol.asyncIterator)]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
};
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer: renderer2, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer2.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer2.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}
var _a;
var astroComponentInstanceSym = Symbol.for("astro.componentInstance");
var AstroComponentInstance = class {
  constructor(result, props, slots, factory) {
    this[_a] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      this.slotValues[name] = slots[name]();
    }
  }
  async init() {
    this.returnValue = this.factory(this.result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init();
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
};
_a = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}
async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0)
    ;
  else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}
var slotString = Symbol.for("astro:slot-string");
var SlotString = class extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
};
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result2, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (typeof chunk.type === "string") {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        return renderAllHeadContent(result);
      }
    }
  } else {
    if (isSlotString(chunk)) {
      let out = "";
      const c = chunk;
      if (c.instructions) {
        for (const instr of c.instructions) {
          out += stringifyChunk(result, instr);
        }
      }
      out += chunk.toString();
      return out;
    }
    return chunk.toString();
  }
}
var HTMLParts = class {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
};
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  let stringified = stringifyChunk(result, chunk);
  return encoder.encode(stringified.toString());
}
var ClientOnlyPlaceholder = "astro-client-only";
var Skip = class {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
};
Skip.symbol = Symbol("astro:jsx:skip");
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a3, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer2;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer2 = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer2) {
      let error2;
      for (const r of renderers2) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer2 = r;
            break;
          }
        } catch (e) {
          error2 ?? (error2 = e);
        }
      }
      if (!renderer2 && error2) {
        throw error2;
      }
    }
    if (!renderer2 && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer2 = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer2 && validRenderers.length === 1) {
      renderer2 = validRenderers[0];
    }
    if (!renderer2) {
      const extname = (_a3 = metadata.componentUrl) == null ? void 0 : _a3.split(".").pop();
      renderer2 = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer2) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer2 = matchingRenderers[0];
        ({ html, attrs } = await renderer2.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer2.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer2 && !renderer2.clientEntrypoint && renderer2.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer2.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer2 == null ? void 0 : renderer2.name) === "astro:jsx") {
        yield html;
      } else if (html && html.length > 0) {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      } else {
        yield "";
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer: renderer2, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement$1("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a3;
  StreamingCompatibleResponse = (_a3 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder2 = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of streamAsyncIterator(body)) {
          out += decoder2.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of streamAsyncIterator(body)) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a3);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i === 0) {
        i++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function bufferHeadContent(result) {
  const iterator = result.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init();
    if (isHeadAndContent(returnValue)) {
      result.extraHead.push(returnValue.head);
    }
  }
}
async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    let output;
    try {
      const renderResult = await renderComponent(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        null
      );
      if (isAstroComponentInstance(renderResult)) {
        output = renderResult.render();
      } else {
        output = renderResult;
      }
    } catch (e) {
      if (AstroError.is(e) && !e.loc) {
        e.setLocation({
          file: route == null ? void 0 : route.component
        });
      }
      throw e;
    }
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  const factoryIsHeadAndContent = isHeadAndContent(factoryReturnValue);
  if (isRenderTemplateResult(factoryReturnValue) || factoryIsHeadAndContent) {
    await bufferHeadContent(result);
    const templateResult = factoryIsHeadAndContent ? factoryReturnValue.content : factoryReturnValue;
    let iterable = renderAstroTemplateResult(templateResult);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i++;
              }
              controller.close();
            } catch (e) {
              if (AstroError.is(e) && !e.loc) {
                e.setLocation({
                  file: route == null ? void 0 : route.component
                });
              }
              controller.error(e);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init2, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(
        route == null ? void 0 : route.route,
        typeof factoryReturnValue
      ),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return factoryReturnValue;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidthExports = {};
var eastasianwidth = {
  get exports() {
    return eastasianwidthExports;
  },
  set exports(v) {
    eastasianwidthExports = v;
  }
};
(function(module) {
  var eaw = {};
  {
    module.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x = character.charCodeAt(0);
    var y = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x;
    if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
      x &= 1023;
      y &= 1023;
      codePoint = x << 10 | y;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string) {
    return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string) {
    var characters = stringToArray(string);
    var len = 0;
    for (var i = 0; i < characters.length; i++) {
      len = len + this.characterLength(characters[i]);
    }
    return len;
  };
  eaw.slice = function(text, start, end) {
    textLen = eaw.length(text);
    start = start ? start : 0;
    end = end ? end : 1;
    if (start < 0) {
      start = textLen + start;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars = stringToArray(text);
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var charLen = eaw.length(char);
      if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"))
      ;
    else if (proc.argv.includes("--silent"))
      ;
    else
      ;
  }
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging,
  route
}) {
  if (ssr && mod.getStaticPaths && !mod.prerender) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if ((!ssr || mod.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, routeComponent) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, routeComponent);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a3;
  if (!slot)
    return;
  if (((_a3 = slot.expressions) == null ? void 0 : _a3.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    if (!__privateGet$1(this, _slots) || !this.has(name))
      return;
    if (!Array.isArray(args)) {
      warn(
        __privateGet$1(this, _loggingOpts),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = __privateGet$1(this, _slots)[name];
      const component = typeof slotValue === "function" ? await slotValue() : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = expression(...args);
        return await renderSlot(__privateGet$1(this, _result), slot).then(
          (res) => res != null ? String(res) : res
        );
      }
      if (typeof component === "function") {
        return await renderJSX(__privateGet$1(this, _result), component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]);
    const outHTML = stringifyChunk(__privateGet$1(this, _result), content);
    return outHTML;
  }
};
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers: renderers2, request, resolve } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$1 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$1);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging, route });
  if (ssr && !mod.prerender) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route.component);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route.component);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params, route);
    if (!matchedStaticPath && (ssr ? mod.prerender : true)) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  var _a3, _b;
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a3 = ctx.route) == null ? void 0 : _a3.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    propagation: ctx.propagation,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  const response = await renderPage$1(
    result,
    Component,
    pageProps,
    null,
    env.streaming,
    ctx.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
}
async function call(mod, env, ctx) {
  var _a3, _b;
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a3 = ctx.route) == null ? void 0 : _a3.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}
function createRenderContext(options) {
  const request = options.request;
  const url = new URL(request.url);
  const origin = options.origin ?? url.origin;
  const pathname = options.pathname ?? url.pathname;
  return {
    ...options,
    origin,
    pathname,
    url
  };
}
function createEnvironment(options) {
  return options;
}
function slash(path) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path);
  if (isExtendedLengthPath || hasNonAscii) {
    return path;
  }
  return path.replace(/\\/g, "/");
}
function getRootPath(base) {
  return appendForwardSlash(new URL(base || "/", "http://localhost/").pathname);
}
function joinToRoot(href, base) {
  const rootPath = getRootPath(base);
  const normalizedHref = slash(href);
  return appendForwardSlash(rootPath) + removeLeadingForwardSlash(normalizedHref);
}
function createLinkStylesheetElement(href, base) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, base)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, base) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, base)));
}
function createModuleScriptElement(script, base) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(decodeURI(pathname)));
}
function matchAssets(route, assets) {
  for (const asset of assets) {
    if (!asset.endsWith(".html"))
      continue;
    if (route.pattern.test(asset)) {
      return asset;
    }
    if (route.pattern.test(asset.replace(/index\.html$/, ""))) {
      return asset;
    }
  }
}
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a3 = options.prefixes, prefixes2 = _a3 === void 0 ? "./" : _a3;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a4 = tokens[i], nextType = _a4.type, index = _a4.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes2.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a3 = options.encode, encode2 = _a3 === void 0 ? function(x) {
    return x;
  } : _a3, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode2(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode2(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env;
var _manifest;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _base;
var _baseWithoutTrailingSlash;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _base, void 0);
    __privateAdd(this, _baseWithoutTrailingSlash, void 0);
    __privateSet(this, _manifest, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest).site,
      ssr: true,
      streaming
    }));
    __privateSet(this, _base, __privateGet(this, _manifest).base || "/");
    __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(pathname) {
    if (pathname.startsWith(__privateGet(this, _base))) {
      return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest).assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = "/" + this.removeBase(url.pathname);
    let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
    if (routeData) {
      const asset = matchAssets(routeData, __privateGet(this, _manifest).assets);
      if (asset)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
};
_env = /* @__PURE__ */ new WeakMap();
_manifest = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_base = /* @__PURE__ */ new WeakMap();
_baseWithoutTrailingSlash = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url.origin,
      pathname,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url.origin,
    pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

// .netlify/edge-functions/chunks/pages/all.8606f6e9.mjs
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString2(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString2(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString2(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString2(value) || typeof value === "number") {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString2(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
var propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
var escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var NOOP = () => {
};
var NO = () => false;
var onRE = /^on[^a-z]/;
var isOn = (key) => onRE.test(key);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isFunction = (val) => typeof val === "function";
var isString2 = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise2 = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
var isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
var def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
var toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function warn$1(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
var activeEffectScope;
var EffectScope = class {
  constructor(detached = false) {
    this.detached = detached;
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn$1(`cannot run an inactive effect scope.`);
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this.active = false;
    }
  }
};
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
var createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
var newTracked = (dep) => (dep.n & trackOpBit) > 0;
var initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
var finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
var targetMap = /* @__PURE__ */ new WeakMap();
var effectTrackDepth = 0;
var trackOpBit = 1;
var maxMarkerBits = 30;
var activeEffect;
var ITERATE_KEY = Symbol(true ? "iterate" : "");
var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
var ReactiveEffect = class {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
};
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = true ? { effect: activeEffect, target, type, key } : void 0;
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = toNumber(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = true ? { target, type, key, newValue, oldValue, oldTarget } : void 0;
  if (deps.length === 1) {
    if (deps[0]) {
      if (true) {
        triggerEffects(deps[0], eventInfo);
      } else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    if (true) {
      triggerEffects(createDep(effects), eventInfo);
    } else {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
var get = /* @__PURE__ */ createGetter();
var shallowGet = /* @__PURE__ */ createGetter(false, true);
var readonlyGet = /* @__PURE__ */ createGetter(true);
var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
var set = /* @__PURE__ */ createSetter();
var shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow$1(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      warn$1(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      warn$1(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
var shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow$1(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
var toReactive = (value) => isObject(value) ? reactive(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    if (true) {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    } else {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    if (true) {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    } else {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow$1(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
};
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
var shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a2;
var ComputedRefImpl = class {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a2] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
};
_a2 = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = true ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
var stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn2(msg, ...args) {
  if (false)
    return;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString2(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
var ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise2(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = true ? ErrorTypeStrings[type] : type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  if (true) {
    const info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn2(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {
    console.error(err);
  }
}
var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
var getId = (job) => job.id == null ? Infinity : job.id;
var comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check3 = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check3(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn2(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
var isHmrUpdating = false;
var hmrDirtyComponents = /* @__PURE__ */ new Set();
if (true) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}
var devtools;
var buffer = [];
var devtoolsNotInstalled = false;
function emit(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a3, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a3 = window.navigator) === null || _a3 === void 0 ? void 0 : _a3.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit("app:init", app, version2, {
    Fragment: Fragment2,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit("app:unmount", app);
}
var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
var devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit("component:emit", component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  if (true) {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn2(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn2(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString2(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn2(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance$1(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance$1(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance$1(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
var accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot$1(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance$1(instance);
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode$1(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode$1(render2.length > 1 ? render2(props, true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit: emit2
      } : { attrs, slots, emit: emit2 }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode2(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn2(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
        }
        if (eventAttrs.length) {
          warn2(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn2(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
    }
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn2(`Component inside <Transition> renders non-element root node that cannot be animated.`);
    }
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance$1(prev);
  return result;
}
var getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode$1(childRoot), setRoot];
};
function filterSingleRoot(children) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode$1(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
var filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
var isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn2(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn2(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn2(`inject() can only be used inside setup() or functional components.`);
  }
}
var INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn2(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn2(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn2(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn2(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow$1(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString2(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
    warn2(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn2("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
var NULL_DYNAMIC_COMPONENT = Symbol();
var getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => true ? shallowReadonly(i.props) : i.props,
  $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
  $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
  $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
var isReservedPrefix = (key) => key === "_" || key === "$";
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        markAttrsAccessed();
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString2(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn2(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn2(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn2(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn2(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn2(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn2(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn2(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn2(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
var shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = true ? createDuplicateChecker() : null;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          ctx[key] = methodHandler.bind(publicThis);
        }
        if (true) {
          checkDuplicateProperties("Methods", key);
        }
      } else if (true) {
        warn2(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn2(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise2(data)) {
      warn2(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn2(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn2(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
        warn2(`Write operation failed: computed property "${key}" is readonly.`);
      } : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        if (true) {
          warn2(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString2(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn2(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else if (true) {
        warn2(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn2(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn2(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString2(raw[i])) {
        warn2(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn2(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else if (true) {
    warn2(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn2('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn2(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn2('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
var isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
var isInternalKey = (key) => key[0] === "_" || key === "$stable";
var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode$1) : [normalizeVNode$1(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance) {
      warn2(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn2(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
var normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn2(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
var initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
var updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        extend(slots, children);
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn2(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn2(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
          warn2(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (true) {
          warn2(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn2("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn2(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn2(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn2(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          }
          const vnode = createVNode2(rootComponent, rootProps);
          vnode.appContext = context;
          if (true) {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else if (true) {
          warn2(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (true) {
          warn2(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          warn2(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  if (!owner) {
    warn2(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString2(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString2(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else if (true) {
          warn2("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn2("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
var hasMismatch = false;
var isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
var isComment$1 = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      warn2(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment$1(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn2(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment2:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment$1(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode2(Fragment2);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode2("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if (true) {
          warn2("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    if (true) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], false, void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        let hasWarned = false;
        while (next) {
          hasMismatch = true;
          if (!hasWarned) {
            warn2(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
            hasWarned = true;
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          warn2(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`);
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode$1(children[i]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if (!hasWarned) {
          warn2(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
          hasWarned = true;
        }
        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment$1(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    warn2(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment$1(node) && node.data === "[" ? `(start of fragment)` : ``);
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment$1(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
var supported;
var perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment2:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (true) {
          warn2("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, isSVG) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (true) {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode$1(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      if (parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment2 || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (isHmrUpdating || patchFlag & 2048) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance$1(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent$1(instance);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode2(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (true) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot$1(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            if (true) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot$1(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot$1(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    if (true) {
      effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode$1(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode$1(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode$1(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode$1(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode$1(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn2(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment2) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment2 || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment2 && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment2) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
var isTeleport = (type) => type.__isTeleport;
var Fragment2 = Symbol(true ? "Fragment" : void 0);
var Text = Symbol(true ? "Text" : void 0);
var Comment = Symbol(true ? "Comment" : void 0);
var Static = Symbol(true ? "Static" : void 0);
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode2(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode$1(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    n1.shapeFlag &= ~256;
    n2.shapeFlag &= ~512;
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
var createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...args);
};
var InternalObjectKey = `__vInternal`;
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString2(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment2 ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString2(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn2(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
var createVNode2 = true ? createVNodeWithArgsTransform : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn2(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode$1(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString2(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString2(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn2(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment2 ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode2(Text, null, text, flag);
}
function normalizeVNode$1(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode2(Comment);
  } else if (isArray(child)) {
    return createVNode2(
      Fragment2,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode2(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
var emptyAppContext = createAppContext();
var uid$1 = 0;
function createComponentInstance$1(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
var currentInstance = null;
var setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
var unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn2("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent$1(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a3;
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn2(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup: setup2 } = Component;
  if (setup2) {
    const setupContext = instance.setupContext = setup2.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup2, instance, 0, [true ? shallowReadonly(instance.props) : instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise2(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = (_a3 = Component.name) !== null && _a3 !== void 0 ? _a3 : "Anonymous";
          warn2(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode$1(setupResult)) {
      warn2(`setup() should not return VNodes directly - return a render function instead.`);
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
var compile2;
var isRuntimeOnly = () => !compile2;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile2 && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        if (true) {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile2(template, finalCompilerOptions);
        if (true) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template) {
      warn2(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn2(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, true ? {
    get(target, key) {
      markAttrsAccessed();
      track(instance, "get", "$attrs");
      return target[key];
    },
    set() {
      warn2(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn2(`setupContext.attrs is readonly.`);
      return false;
    }
  } : {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (instance.exposed) {
      warn2(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  if (true) {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode$1(propsOrChildren)) {
        return createVNode2(type, null, [propsOrChildren]);
      }
      return createVNode2(type, propsOrChildren);
    } else {
      return createVNode2(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode$1(children)) {
      children = [children];
    }
    return createVNode2(type, propsOrChildren, children);
  }
}
var ssrContextKey = Symbol(true ? `ssrContext` : ``);
var useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
      warn2(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
    }
    return ctx;
  }
};
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
var version = "3.2.45";
var _ssrUtils = {
  createComponentInstance: createComponentInstance$1,
  setupComponent: setupComponent$1,
  renderComponentRoot: renderComponentRoot$1,
  setCurrentRenderingInstance: setCurrentRenderingInstance$1,
  isVNode: isVNode$1,
  normalizeVNode: normalizeVNode$1
};
var ssrUtils = _ssrUtils;
var svgNS = "http://www.w3.org/2000/svg";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString2(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString2(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
var semicolonRE = /[^\\];\s*$/;
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        warn2(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
var prefixes = ["Webkit", "Moz", "ms"];
var prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (!needRemove) {
      warn2(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
var nativeOnRE = /^on[a-z]/;
var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString2(value)) {
    return false;
  }
  return key in el;
}
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
var enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
var createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
var createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn2(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn2(msg);
        return compilerOptions;
      },
      set() {
        warn2(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString2(container)) {
    const res = document.querySelector(container);
    if (!res) {
      warn2(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    warn2(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
var initDirectivesForSSR = () => {
};
function initDev() {
  {
    initCustomFormatter();
  }
}
if (true) {
  initDev();
}
var shouldIgnoreProp = makeMap(`,key,ref,innerHTML,textContent,ref_key,ref_for`);
function ssrRenderAttrs(props, tag) {
  let ret = "";
  for (const key in props) {
    if (shouldIgnoreProp(key) || isOn(key) || tag === "textarea" && key === "value") {
      continue;
    }
    const value = props[key];
    if (key === "class") {
      ret += ` class="${ssrRenderClass(value)}"`;
    } else if (key === "style") {
      ret += ` style="${ssrRenderStyle(value)}"`;
    } else {
      ret += ssrRenderDynamicAttr(key, value, tag);
    }
  }
  return ret;
}
function ssrRenderDynamicAttr(key, value, tag) {
  if (!isRenderableValue(value)) {
    return ``;
  }
  const attrKey = tag && (tag.indexOf("-") > 0 || isSVGTag(tag)) ? key : propsToAttrMap[key] || key.toLowerCase();
  if (isBooleanAttr(attrKey)) {
    return includeBooleanAttr(value) ? ` ${attrKey}` : ``;
  } else if (isSSRSafeAttrName(attrKey)) {
    return value === "" ? ` ${attrKey}` : ` ${attrKey}="${escapeHtml(value)}"`;
  } else {
    console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`);
    return ``;
  }
}
function isRenderableValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}
function ssrRenderClass(raw) {
  return escapeHtml(normalizeClass(raw));
}
function ssrRenderStyle(raw) {
  if (!raw) {
    return "";
  }
  if (isString2(raw)) {
    return escapeHtml(raw);
  }
  const styles = normalizeStyle(raw);
  return escapeHtml(stringifyStyle(styles));
}
function ssrCompile(template, instance) {
  {
    throw new Error(`On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.`);
  }
}
function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
  parentPush("<!--teleport start-->");
  const context = parentComponent.appContext.provides[ssrContextKey];
  const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
  const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
  const bufferIndex = targetBuffer.length;
  let teleportContent;
  if (disabled) {
    contentRenderFn(parentPush);
    teleportContent = `<!--teleport anchor-->`;
  } else {
    const { getBuffer, push } = createBuffer();
    contentRenderFn(push);
    push(`<!--teleport anchor-->`);
    teleportContent = getBuffer();
  }
  targetBuffer.splice(bufferIndex, 0, teleportContent);
  parentPush("<!--teleport end-->");
}
var { createComponentInstance, setCurrentRenderingInstance, setupComponent, renderComponentRoot, normalizeVNode } = ssrUtils;
function createBuffer() {
  let appendable = false;
  const buffer2 = [];
  return {
    getBuffer() {
      return buffer2;
    },
    push(item) {
      const isStringItem = isString2(item);
      if (appendable && isStringItem) {
        buffer2[buffer2.length - 1] += item;
      } else {
        buffer2.push(item);
      }
      appendable = isStringItem;
      if (isPromise2(item) || isArray(item) && item.hasAsync) {
        buffer2.hasAsync = true;
      }
    }
  };
}
function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
  const instance = createComponentInstance(vnode, parentComponent, null);
  const res = setupComponent(instance, true);
  const hasAsyncSetup = isPromise2(res);
  const prefetches = instance.sp;
  if (hasAsyncSetup || prefetches) {
    let p2 = hasAsyncSetup ? res : Promise.resolve();
    if (prefetches) {
      p2 = p2.then(() => Promise.all(prefetches.map((prefetch) => prefetch.call(instance.proxy)))).catch(() => {
      });
    }
    return p2.then(() => renderComponentSubTree(instance, slotScopeId));
  } else {
    return renderComponentSubTree(instance, slotScopeId);
  }
}
function renderComponentSubTree(instance, slotScopeId) {
  const comp = instance.type;
  const { getBuffer, push } = createBuffer();
  if (isFunction(comp)) {
    let root = renderComponentRoot(instance);
    if (!comp.props) {
      for (const key in instance.attrs) {
        if (key.startsWith(`data-v-`)) {
          (root.props || (root.props = {}))[key] = ``;
        }
      }
    }
    renderVNode(push, instance.subTree = root, instance, slotScopeId);
  } else {
    if ((!instance.render || instance.render === NOOP) && !instance.ssrRender && !comp.ssrRender && isString2(comp.template)) {
      comp.ssrRender = ssrCompile(comp.template);
    }
    for (const e of instance.scope.effects) {
      if (e.computed)
        e.computed._cacheable = true;
    }
    const ssrRender = instance.ssrRender || comp.ssrRender;
    if (ssrRender) {
      let attrs = instance.inheritAttrs !== false ? instance.attrs : void 0;
      let hasCloned = false;
      let cur = instance;
      while (true) {
        const scopeId = cur.vnode.scopeId;
        if (scopeId) {
          if (!hasCloned) {
            attrs = { ...attrs };
            hasCloned = true;
          }
          attrs[scopeId] = "";
        }
        const parent = cur.parent;
        if (parent && parent.subTree && parent.subTree === cur.vnode) {
          cur = parent;
        } else {
          break;
        }
      }
      if (slotScopeId) {
        if (!hasCloned)
          attrs = { ...attrs };
        attrs[slotScopeId.trim()] = "";
      }
      const prev = setCurrentRenderingInstance(instance);
      try {
        ssrRender(
          instance.proxy,
          push,
          instance,
          attrs,
          instance.props,
          instance.setupState,
          instance.data,
          instance.ctx
        );
      } finally {
        setCurrentRenderingInstance(prev);
      }
    } else if (instance.render && instance.render !== NOOP) {
      renderVNode(push, instance.subTree = renderComponentRoot(instance), instance, slotScopeId);
    } else {
      const componentName = comp.name || comp.__file || `<Anonymous>`;
      warn2(`Component ${componentName} is missing template or render function.`);
      push(`<!---->`);
    }
  }
  return getBuffer();
}
function renderVNode(push, vnode, parentComponent, slotScopeId) {
  const { type, shapeFlag, children } = vnode;
  switch (type) {
    case Text:
      push(escapeHtml(children));
      break;
    case Comment:
      push(children ? `<!--${escapeHtmlComment(children)}-->` : `<!---->`);
      break;
    case Static:
      push(children);
      break;
    case Fragment2:
      if (vnode.slotScopeIds) {
        slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
      }
      push(`<!--[-->`);
      renderVNodeChildren(push, children, parentComponent, slotScopeId);
      push(`<!--]-->`);
      break;
    default:
      if (shapeFlag & 1) {
        renderElementVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 6) {
        push(renderComponentVNode(vnode, parentComponent, slotScopeId));
      } else if (shapeFlag & 64) {
        renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 128) {
        renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
      } else {
        warn2("[@vue/server-renderer] Invalid VNode type:", type, `(${typeof type})`);
      }
  }
}
function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
  for (let i = 0; i < children.length; i++) {
    renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
  }
}
function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
  const tag = vnode.type;
  let { props, children, shapeFlag, scopeId, dirs } = vnode;
  let openTag = `<${tag}`;
  if (dirs) {
    props = applySSRDirectives(vnode, props, dirs);
  }
  if (props) {
    openTag += ssrRenderAttrs(props, tag);
  }
  if (scopeId) {
    openTag += ` ${scopeId}`;
  }
  let curParent = parentComponent;
  let curVnode = vnode;
  while (curParent && curVnode === curParent.subTree) {
    curVnode = curParent.vnode;
    if (curVnode.scopeId) {
      openTag += ` ${curVnode.scopeId}`;
    }
    curParent = curParent.parent;
  }
  if (slotScopeId) {
    openTag += ` ${slotScopeId}`;
  }
  push(openTag + `>`);
  if (!isVoidTag(tag)) {
    let hasChildrenOverride = false;
    if (props) {
      if (props.innerHTML) {
        hasChildrenOverride = true;
        push(props.innerHTML);
      } else if (props.textContent) {
        hasChildrenOverride = true;
        push(escapeHtml(props.textContent));
      } else if (tag === "textarea" && props.value) {
        hasChildrenOverride = true;
        push(escapeHtml(props.value));
      }
    }
    if (!hasChildrenOverride) {
      if (shapeFlag & 8) {
        push(escapeHtml(children));
      } else if (shapeFlag & 16) {
        renderVNodeChildren(push, children, parentComponent, slotScopeId);
      }
    }
    push(`</${tag}>`);
  }
}
function applySSRDirectives(vnode, rawProps, dirs) {
  const toMerge = [];
  for (let i = 0; i < dirs.length; i++) {
    const binding = dirs[i];
    const { dir: { getSSRProps } } = binding;
    if (getSSRProps) {
      const props = getSSRProps(binding, vnode);
      if (props)
        toMerge.push(props);
    }
  }
  return mergeProps(rawProps || {}, ...toMerge);
}
function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
  const target = vnode.props && vnode.props.to;
  const disabled = vnode.props && vnode.props.disabled;
  if (!target) {
    if (!disabled) {
      warn2(`[@vue/server-renderer] Teleport is missing target prop.`);
    }
    return [];
  }
  if (!isString2(target)) {
    warn2(`[@vue/server-renderer] Teleport target must be a query selector string.`);
    return [];
  }
  ssrRenderTeleport(push, (push2) => {
    renderVNodeChildren(push2, vnode.children, parentComponent, slotScopeId);
  }, target, disabled || disabled === "", parentComponent);
}
var { isVNode: isVNode2 } = ssrUtils;
async function unrollBuffer(buffer2) {
  if (buffer2.hasAsync) {
    let ret = "";
    for (let i = 0; i < buffer2.length; i++) {
      let item = buffer2[i];
      if (isPromise2(item)) {
        item = await item;
      }
      if (isString2(item)) {
        ret += item;
      } else {
        ret += await unrollBuffer(item);
      }
    }
    return ret;
  } else {
    return unrollBufferSync(buffer2);
  }
}
function unrollBufferSync(buffer2) {
  let ret = "";
  for (let i = 0; i < buffer2.length; i++) {
    let item = buffer2[i];
    if (isString2(item)) {
      ret += item;
    } else {
      ret += unrollBufferSync(item);
    }
  }
  return ret;
}
async function renderToString2(input, context = {}) {
  if (isVNode2(input)) {
    return renderToString2(createApp({ render: () => input }), context);
  }
  const vnode = createVNode2(input._component, input._props);
  vnode.appContext = input._context;
  input.provide(ssrContextKey, context);
  const buffer2 = await renderComponentVNode(vnode);
  const result = await unrollBuffer(buffer2);
  await resolveTeleports(context);
  if (context.__watcherHandles) {
    for (const unwatch of context.__watcherHandles) {
      unwatch();
    }
  }
  return result;
}
async function resolveTeleports(context) {
  if (context.__teleportBuffers) {
    context.teleports = context.teleports || {};
    for (const key in context.__teleportBuffers) {
      context.teleports[key] = await unrollBuffer(await Promise.all([context.__teleportBuffers[key]]));
    }
  }
}
function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
  return renderComponentVNode(createVNode2(comp, props, children), parentComponent, slotScopeId);
}
function ssrRenderSlot(slots, slotName2, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
  push(`<!--[-->`);
  ssrRenderSlotInner(slots, slotName2, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId);
  push(`<!--]-->`);
}
function ssrRenderSlotInner(slots, slotName2, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
  const slotFn = slots[slotName2];
  if (slotFn) {
    const slotBuffer = [];
    const bufferedPush = (item) => {
      slotBuffer.push(item);
    };
    const ret = slotFn(slotProps, bufferedPush, parentComponent, slotScopeId ? " " + slotScopeId : "");
    if (isArray(ret)) {
      renderVNodeChildren(push, ret, parentComponent, slotScopeId);
    } else {
      let isEmptySlot = true;
      if (transition) {
        isEmptySlot = false;
      } else {
        for (let i = 0; i < slotBuffer.length; i++) {
          if (!isComment(slotBuffer[i])) {
            isEmptySlot = false;
            break;
          }
        }
      }
      if (isEmptySlot) {
        if (fallbackRenderFn) {
          fallbackRenderFn();
        }
      } else {
        for (let i = 0; i < slotBuffer.length; i++) {
          push(slotBuffer[i]);
        }
      }
    }
  } else if (fallbackRenderFn) {
    fallbackRenderFn();
  }
}
var commentTestRE = /^<!--.*-->$/s;
var commentRE = /<!--[^]*?-->/gm;
function isComment(item) {
  if (typeof item !== "string" || !commentTestRE.test(item))
    return false;
  if (item.length <= 8)
    return true;
  return !item.replace(commentRE, "").trim();
}
initDirectivesForSSR();
var $$Astro$5 = createAstro();
var $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<!-- <link rel="canonical" href={canonicalURL} /> -->

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>
<!--  -->`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/BaseHead.astro");
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.name === "white-large") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "134",
          height: "54",
          viewBox: "0 0 134 54",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><g clip-path="url(#clip0_1365_254)"><path d="M48.2633 18.7569C48.3841 18.3825 48.2754 17.9718 47.9855 17.7061C47.6957 17.4404 47.2729 17.368 46.9106 17.537L39.4344 20.8464C41.234 16.5467 42.3935 12.0537 43.0819 8.81684C43.9636 4.64998 44.2776 1.69091 44.2897 1.55805C44.3018 1.43727 44.2897 1.32857 44.2656 1.21987C44.3622 0.833382 44.2172 0.422735 43.8791 0.1691C43.4322 -0.157002 42.8041 -0.0483011 42.478 0.398579L31.4993 15.7616L27.7068 16.4742L24.9289 11.6672C24.7478 11.3532 24.4217 11.172 24.0593 11.172C23.697 11.172 23.3709 11.3653 23.1897 11.6672L20.4601 16.4017L16.7522 15.7012L5.83388 0.422735C5.50778 -0.0241454 4.89181 -0.132846 4.43285 0.193256C4.09467 0.434813 3.94974 0.857537 4.04636 1.24403C4.0222 1.35273 4.01013 1.46143 4.0222 1.58221C4.03428 1.70299 4.3483 4.67414 5.22999 8.84099C5.91842 12.0779 7.0779 16.5708 8.87749 20.8705L1.40131 17.5612C1.03898 17.4042 0.616253 17.4646 0.326385 17.7303C0.036517 17.996 -0.0721835 18.4066 0.0485949 18.7811C0.0848284 18.8777 0.833654 21.1483 2.36754 24.0591C3.4787 26.1727 4.67441 28.0448 5.96674 29.639L2.80234 28.3709C2.40377 28.2139 1.93274 28.3226 1.65495 28.6607C1.37716 28.9989 1.353 29.47 1.58248 29.8444C1.77573 30.1463 6.41362 37.2481 12.9598 40.4366L13.9985 46.6326C13.9985 46.6688 14.0106 46.705 14.0227 46.7292C14.0227 46.7413 14.0227 46.7413 14.0347 46.7533C14.0468 46.7775 14.0468 46.8017 14.0589 46.8137C14.0589 46.8258 14.071 46.8379 14.083 46.862C14.0951 46.8741 14.0951 46.8862 14.1072 46.9104C14.1193 46.9224 14.1193 46.9345 14.1314 46.9466C14.1434 46.9587 14.1434 46.9707 14.1555 46.9949C14.1555 47.007 14.1676 47.007 14.1797 47.0191C14.1917 47.0311 14.2038 47.0553 14.2159 47.0674C14.2763 47.1398 14.3488 47.2123 14.4212 47.2727L19.8079 51.2584C19.82 51.2705 19.82 51.2825 19.8321 51.2825C19.8925 51.3429 19.9529 51.3792 20.0253 51.4154L23.2864 53.8189C23.5279 54.0001 23.8178 54.0484 24.0835 53.988C24.156 54.0001 24.2163 54.0121 24.2888 54.0121C24.4941 54.0121 24.6995 53.9517 24.8806 53.8189L28.1416 51.4154C28.2141 51.3792 28.2745 51.3308 28.3349 51.2825C28.347 51.2705 28.347 51.2584 28.359 51.2584L33.7458 47.2848C33.7458 47.2848 33.7458 47.2848 33.7578 47.2848L33.7699 47.2727C33.7941 47.2606 33.8062 47.2485 33.8303 47.2244C33.8424 47.2244 33.8424 47.2123 33.8545 47.2123C33.8665 47.2002 33.8907 47.1761 33.9028 47.164C33.9149 47.1519 33.9149 47.1519 33.9269 47.1398C33.939 47.1278 33.9511 47.1036 33.9632 47.0915C33.9752 47.0794 33.9752 47.0674 33.9873 47.0553C33.9994 47.0432 34.0115 47.0311 34.0236 47.007C34.0356 46.9949 34.0356 46.9828 34.0477 46.9707C34.0598 46.9587 34.0598 46.9466 34.0719 46.9224C34.0839 46.9104 34.0839 46.8983 34.096 46.8741C34.1081 46.862 34.1081 46.85 34.1202 46.8258C34.1202 46.8137 34.1323 46.8017 34.1323 46.7896C34.1323 46.7775 34.1443 46.7533 34.1443 46.7413C34.1443 46.7292 34.1443 46.7171 34.1564 46.705C34.1564 46.6809 34.1685 46.6688 34.1685 46.6446L35.183 40.5453C41.85 37.4051 46.5724 30.1705 46.7657 29.8564C47.0072 29.4941 46.971 29.011 46.6932 28.6728C46.4154 28.3346 45.9565 28.2139 45.5458 28.3829L42.3814 29.6511C43.6617 28.0568 44.8694 26.1848 45.9806 24.0712C47.4662 21.1242 48.2271 18.8535 48.2633 18.7569ZM37.0068 32.5498L33.3834 39.253C33.3351 39.3496 33.2989 39.4583 33.2747 39.567L32.8158 42.3208L30.4123 35.1103C31.3906 34.7238 33.2385 33.7817 33.8907 31.9942C34.2772 30.9072 34.1564 29.7598 33.5163 28.552L36.4754 25.3635L37.0068 32.5498ZM27.7672 49.1689L25.4483 46.6084L28.3832 43.3715C28.6489 43.0817 28.7214 42.659 28.5523 42.2966C28.3953 41.9343 28.0329 41.7048 27.6344 41.7048H20.4722C20.0737 41.7048 19.7234 41.9343 19.5543 42.2966C19.3973 42.659 19.4577 43.0817 19.7234 43.3715L22.6583 46.6084L20.3394 49.1689L16.1484 46.077L20.7742 32.8276C20.7742 32.8155 20.7862 32.8034 20.7862 32.8034L24.168 28.6849L27.5498 32.8034V32.8155C27.5498 32.8155 27.5498 32.8155 27.5498 32.8276L31.9703 46.0649L27.7672 49.1689ZM24.0593 45.1711L22.7308 43.7097H25.3879L24.0593 45.1711ZM14.8439 39.555C14.8439 39.5429 14.8439 39.5308 14.8319 39.5308C14.8319 39.5066 14.8198 39.4946 14.8198 39.4704C14.8198 39.4583 14.8077 39.4463 14.8077 39.4342C14.8077 39.41 14.7956 39.3979 14.7956 39.3738C14.7956 39.3617 14.7836 39.3496 14.7836 39.3376C14.7715 39.3255 14.7715 39.3013 14.7594 39.2892C14.7594 39.2772 14.7473 39.2651 14.7473 39.253C14.7473 39.253 14.7473 39.2409 14.7352 39.2409L11.1119 32.5377L11.6554 25.1461L14.6749 28.4071C13.9864 29.6632 13.8415 30.8589 14.2401 31.9701C14.9164 33.8301 16.8972 34.7842 17.8392 35.1345L15.315 42.3932L14.8439 39.555ZM24.0714 19.1313C24.1922 19.1555 24.325 19.1555 24.4458 19.1313L32.079 17.7061L36.0164 22.8996L28.5885 30.9314L24.941 26.4746C24.7478 26.2452 24.47 26.1123 24.168 26.1123C23.8661 26.1123 23.5883 26.2452 23.3951 26.4746L19.7475 30.9314L12.2472 22.8271L16.5832 17.7061L24.0714 19.1313ZM33.5525 16.3413L41.8017 4.80699C41.1495 8.70814 39.7605 15.2664 37.1517 21.0879L33.5525 16.3413ZM32.0066 31.2937C31.6684 32.2237 30.5451 32.8759 29.7722 33.202L29.6151 32.743L32.0186 30.1463C32.1394 30.569 32.1273 30.9555 32.0066 31.2937ZM18.5035 33.2624C17.7547 32.9604 16.4865 32.2841 16.1363 31.3058C15.9913 30.9193 16.0034 30.4845 16.1604 30.0135L18.6847 32.743L18.5035 33.2624ZM11.136 21.0155C8.55139 15.2181 7.16244 8.68398 6.51024 4.80699L14.9043 16.5587L11.136 21.0155ZM24.0593 14.1794L25.6174 16.8848L24.2647 17.1385L22.5375 16.8124L24.0593 14.1794ZM2.8265 20.3512L9.78333 23.431L9.27606 30.3154C6.09959 27.1752 3.93766 22.9117 2.8265 20.3512ZM5.39908 31.5473L9.14321 33.0571C9.16736 33.1175 9.19152 33.1778 9.21567 33.2382L11.3051 37.1031C8.87749 35.4123 6.81218 33.2503 5.39908 31.5473ZM24.0593 51.9106L21.9699 50.3646L24.0593 48.0578L26.1488 50.3646L24.0593 51.9106ZM42.9128 31.5473C41.4273 33.3228 39.2653 35.5934 36.6928 37.3205L38.903 33.2382C38.9151 33.202 38.9272 33.1778 38.9513 33.1416L42.9128 31.5473ZM38.8547 30.4845L38.3353 23.5156L45.4854 20.3512C44.3622 22.96 42.1399 27.3322 38.8547 30.4845Z" fill="white"></path><path d="M123.953 22.6126V18.4512H131.858V14.7353H123.953V10.894H133.835V6.99711H119.736V26.5234H134.029V22.6126H123.953ZM115.547 11.7987C114.642 10.3095 113.404 9.12649 111.845 8.27752C110.3 7.42855 108.574 6.99711 106.709 6.99711H99.5835V26.5234H106.751C108.602 26.5234 110.314 26.092 111.859 25.243C113.404 24.394 114.642 23.211 115.547 21.7219C116.452 20.2327 116.911 18.5765 116.911 16.7672C116.911 14.9579 116.452 13.2878 115.547 11.7987ZM111.887 19.6899C111.386 20.5528 110.69 21.2487 109.813 21.7358C108.936 22.2368 107.948 22.4873 106.876 22.4873H103.8V11.0193H106.835C107.92 11.0193 108.908 11.2698 109.785 11.7708C110.662 12.2719 111.372 12.9538 111.873 13.8306C112.374 14.7074 112.624 15.6956 112.624 16.7672C112.638 17.8389 112.388 18.827 111.887 19.6899ZM73.4046 21.193C72.7087 21.7358 72.0268 22.1533 71.3588 22.4038C70.7046 22.6543 69.967 22.7796 69.1876 22.7796C68.1577 22.7796 67.1835 22.5152 66.2928 21.9863C65.402 21.4574 64.6783 20.7198 64.1634 19.8012C63.6345 18.8827 63.3701 17.8528 63.3701 16.7533C63.3701 15.6399 63.6345 14.6239 64.1634 13.7054C64.6923 12.7868 65.402 12.0492 66.2928 11.5203C67.1835 10.9914 68.1577 10.727 69.1876 10.727C69.9392 10.727 70.6907 10.8662 71.4144 11.1445C72.1381 11.4229 72.7923 11.7987 73.3629 12.2579L73.5856 12.4389L75.9794 9.22391L75.7845 9.0569C74.8938 8.30536 73.8778 7.7069 72.7644 7.28937C71.6371 6.87185 70.4402 6.66309 69.1876 6.66309C67.3366 6.66309 65.6247 7.10845 64.0938 7.99917C62.5629 8.88989 61.3242 10.1146 60.4474 11.6456C59.5567 13.1765 59.1113 14.8883 59.1113 16.7394C59.1113 18.5765 59.5567 20.2883 60.4474 21.8332C61.3381 23.378 62.5629 24.6028 64.0938 25.4935C65.6247 26.3842 67.3505 26.8435 69.1876 26.8435C70.4402 26.8435 71.6371 26.6347 72.7644 26.2033C73.8778 25.7858 74.8938 25.1734 75.7845 24.4079L75.9794 24.2409L73.6273 20.9981L73.4046 21.193ZM84.135 11.5203C84.65 11.2141 85.1789 10.9914 85.7355 10.8662V6.73267C84.3716 6.89968 83.0912 7.31721 81.9221 7.99917C80.3912 8.88989 79.1526 10.1146 78.2758 11.6456C77.385 13.1765 76.9397 14.8883 76.9397 16.7394C76.9397 18.5765 77.385 20.2883 78.2758 21.8332C79.1665 23.378 80.3912 24.6028 81.9221 25.4935C83.0912 26.1755 84.3716 26.6069 85.7355 26.76V22.6265C85.1789 22.5012 84.6361 22.2786 84.135 21.9724C83.2443 21.4435 82.5206 20.7059 81.9917 19.7873C81.4629 18.8688 81.1984 17.8389 81.1984 16.7394C81.1984 15.6399 81.4629 14.61 81.9917 13.6914C82.5206 12.7868 83.2443 12.0492 84.135 11.5203ZM95.784 11.6456C94.8933 10.1146 93.6685 8.88989 92.1376 7.99917C90.9546 7.30329 89.6464 6.88577 88.2685 6.73267V10.8662C88.8392 10.9914 89.4098 11.2141 89.9247 11.5203C90.8154 12.0492 91.5392 12.7729 92.0541 13.6914C92.583 14.61 92.8474 15.6399 92.8474 16.7533C92.8474 17.8528 92.583 18.8827 92.0541 19.8012C91.5252 20.7198 90.8154 21.4574 89.9247 21.9863C89.3959 22.3064 88.8392 22.5291 88.2546 22.6543V26.7878C89.6325 26.6347 90.9268 26.2033 92.1237 25.5074C93.6546 24.6167 94.8794 23.378 95.7701 21.8471C96.6608 20.3023 97.1062 18.5904 97.1062 16.7533C97.1201 14.8883 96.6747 13.1765 95.784 11.6456Z" fill="white"></path><path d="M74.7726 44.4209C74.4803 43.739 74.0628 43.1544 73.5339 42.6673C73.1721 42.3333 72.7824 42.0689 72.3509 41.874C72.6014 41.707 72.852 41.4983 73.0607 41.2617C73.4365 40.8441 73.7427 40.3709 73.9654 39.8142C74.188 39.2715 74.2994 38.7008 74.2994 38.1302C74.2994 37.0586 74.0489 36.1122 73.5339 35.305C73.019 34.4977 72.2953 33.8715 71.3628 33.4261C70.4442 32.9947 69.3447 32.7859 68.1339 32.7859H60.2148V52.3122H68.9133C70.0685 52.3122 71.1262 52.0895 72.0865 51.6581C73.0468 51.2127 73.8262 50.5586 74.3829 49.6818C74.9396 48.8189 75.2319 47.7751 75.2319 46.5921C75.2179 45.8405 75.0649 45.1029 74.7726 44.4209ZM64.3901 36.4462H67.9252C68.3705 36.4462 68.7463 36.5297 69.0803 36.7106C69.4143 36.8776 69.6509 37.1142 69.8319 37.4204C70.0128 37.7266 70.0963 38.0606 70.0963 38.4364C70.0963 38.8261 69.9989 39.1601 69.804 39.4663C69.6092 39.7725 69.3447 40.023 68.9968 40.2178C68.6489 40.3988 68.2592 40.4962 67.8277 40.4962H64.3623V36.4462H64.3901ZM70.6947 47.5106C70.486 47.8864 70.2215 48.1648 69.8597 48.3596C69.4978 48.5684 69.0803 48.6658 68.6349 48.6658H64.3901V43.8503H68.4123C68.9272 43.8503 69.3865 43.9617 69.7762 44.1843C70.1659 44.407 70.4721 44.6993 70.6808 45.0612C70.8896 45.423 71.0009 45.8266 71.0009 46.2441C71.0009 46.7173 70.9035 47.1349 70.6947 47.5106Z" fill="white"></path><path d="M97.124 42.5284C97.124 44.3656 96.6786 46.0774 95.7879 47.6223C94.8972 49.1532 93.6725 50.3918 92.1415 51.2826C90.9446 51.9784 89.6503 52.4099 88.2725 52.563V48.4295C88.857 48.3042 89.4137 48.0815 89.9426 47.7614C90.8333 47.2326 91.5431 46.4949 92.0719 45.5764C92.6008 44.6578 92.8652 43.6279 92.8652 42.5284C92.8652 41.415 92.6008 40.3851 92.0719 39.4666C91.5431 38.548 90.8333 37.8243 89.9426 37.2954C89.4137 36.9893 88.857 36.7666 88.2864 36.6413V32.5078C89.6642 32.6609 90.9725 33.0923 92.1554 33.7743C93.6864 34.665 94.925 35.8898 95.8018 37.4207C96.6786 38.9656 97.124 40.6774 97.124 42.5284Z" fill="white"></path><path d="M82.0101 39.4949C81.4812 40.4135 81.2168 41.4434 81.2168 42.5428C81.2168 43.6562 81.4812 44.6722 82.0101 45.5908C82.539 46.5093 83.2488 47.247 84.1534 47.7758C84.6545 48.082 85.1973 48.3047 85.754 48.4299V52.5635C84.4039 52.4104 83.1235 51.9789 81.9405 51.297C80.4096 50.4062 79.1709 49.1676 78.2941 47.6367C77.4034 46.0918 76.958 44.3799 76.958 42.5428C76.958 40.6918 77.4034 38.9799 78.2941 37.449C79.1848 35.9181 80.4096 34.6934 81.9405 33.8026C83.1096 33.1207 84.39 32.7031 85.754 32.5361V36.6696C85.1973 36.7949 84.6684 37.0176 84.1534 37.3238C83.2488 37.8387 82.5251 38.5763 82.0101 39.4949Z" fill="white"></path><path d="M105.06 32.7859H100.843V52.3122H113.842V48.2622H105.06V32.7859Z" fill="white"></path><path d="M132.781 37.5874C131.876 36.0983 130.638 34.9153 129.079 34.0663C127.534 33.2173 125.808 32.7859 123.943 32.7859H116.817V52.3122H123.985C125.836 52.3122 127.548 51.8807 129.093 51.0318C130.638 50.1828 131.876 48.9998 132.767 47.5106C133.672 46.0354 134.117 44.3653 134.117 42.556C134.117 40.7467 133.686 39.0766 132.781 37.5874ZM129.121 45.4787C128.62 46.3416 127.924 47.0374 127.047 47.5246C126.17 48.0256 125.182 48.2761 124.11 48.2761H121.034V36.8081H124.068C125.154 36.8081 126.142 37.0586 127.019 37.5596C127.896 38.0606 128.592 38.7426 129.107 39.6194C129.608 40.4962 129.858 41.4843 129.858 42.556C129.872 43.6276 129.622 44.6158 129.121 45.4787Z" fill="white"></path></g><defs><clipPath id="clip0_1365_254"><rect width="133.65" height="54" fill="white"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "white-small") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "80",
          height: "32",
          viewBox: "0 0 80 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><g clip-path="url(#clip0_718_2836)"><path d="M28.6005 11.1152C28.6721 10.8933 28.6076 10.65 28.4359 10.4925C28.2641 10.3351 28.0136 10.2921 27.7989 10.3923L23.3685 12.3534C24.435 9.80543 25.1221 7.14293 25.53 5.22479C26.0525 2.75554 26.2386 1.00202 26.2458 0.92329C26.2529 0.851718 26.2458 0.787303 26.2314 0.722887C26.2887 0.493856 26.2028 0.25051 26.0024 0.100207C25.7376 -0.093038 25.3654 -0.0286229 25.1722 0.236195L18.6662 9.34021L16.4189 9.76248L14.7727 6.9139C14.6653 6.72781 14.4721 6.62045 14.2574 6.62045C14.0427 6.62045 13.8494 6.73497 13.7421 6.9139L12.1245 9.71954L9.92726 9.30442L3.45711 0.25051C3.26387 -0.0143084 2.89885 -0.0787235 2.62687 0.114522C2.42647 0.257667 2.34058 0.50817 2.39784 0.737202C2.38353 0.801617 2.37637 0.866032 2.38353 0.937605C2.39069 1.00918 2.57677 2.76986 3.09925 5.23911C3.50721 7.15725 4.19431 9.81974 5.26074 12.3677L0.830408 10.4066C0.61569 10.3136 0.365187 10.3494 0.193413 10.5068C0.0216397 10.6643 -0.0427754 10.9076 0.028797 11.1295C0.0502687 11.1868 0.494017 12.5323 1.40299 14.2572C2.06145 15.5097 2.77002 16.6191 3.53584 17.5639L1.66065 16.8124C1.42446 16.7193 1.14533 16.7837 0.980709 16.9841C0.816093 17.1845 0.801779 17.4637 0.937766 17.6855C1.05228 17.8645 3.80066 22.0729 7.67988 23.9624L8.29541 27.6341C8.29541 27.6556 8.30256 27.6771 8.30972 27.6914C8.30972 27.6985 8.30972 27.6985 8.31688 27.7057C8.32403 27.72 8.32403 27.7343 8.33119 27.7415C8.33119 27.7486 8.33835 27.7558 8.34551 27.7701C8.35266 27.7773 8.35266 27.7844 8.35982 27.7987C8.36698 27.8059 8.36698 27.813 8.37414 27.8202C8.38129 27.8274 8.38129 27.8345 8.38845 27.8488C8.38845 27.856 8.39561 27.856 8.40276 27.8631C8.40992 27.8703 8.41708 27.8846 8.42424 27.8918C8.46002 27.9347 8.50297 27.9777 8.54591 28.0134L11.738 30.3753C11.7452 30.3825 11.7452 30.3897 11.7524 30.3897C11.7881 30.4254 11.8239 30.4469 11.8669 30.4684L13.7993 31.8927C13.9425 32 14.1142 32.0287 14.2717 31.9929C14.3146 32 14.3504 32.0072 14.3934 32.0072C14.515 32.0072 14.6367 31.9714 14.7441 31.8927L16.6765 30.4684C16.7195 30.4469 16.7553 30.4183 16.791 30.3897C16.7982 30.3825 16.7982 30.3753 16.8054 30.3753L19.9975 28.0206C19.9975 28.0206 19.9975 28.0206 20.0046 28.0206L20.0118 28.0134C20.0261 28.0063 20.0333 27.9991 20.0476 27.9848C20.0547 27.9848 20.0547 27.9777 20.0619 27.9777C20.0691 27.9705 20.0834 27.9562 20.0905 27.949C20.0977 27.9419 20.0977 27.9419 20.1048 27.9347C20.112 27.9276 20.1192 27.9132 20.1263 27.9061C20.1335 27.8989 20.1335 27.8918 20.1406 27.8846C20.1478 27.8775 20.1549 27.8703 20.1621 27.856C20.1693 27.8488 20.1693 27.8417 20.1764 27.8345C20.1836 27.8274 20.1836 27.8202 20.1907 27.8059C20.1979 27.7987 20.1979 27.7916 20.205 27.7773C20.2122 27.7701 20.2122 27.7629 20.2194 27.7486C20.2194 27.7415 20.2265 27.7343 20.2265 27.7272C20.2265 27.72 20.2337 27.7057 20.2337 27.6985C20.2337 27.6914 20.2337 27.6842 20.2408 27.6771C20.2408 27.6627 20.248 27.6556 20.248 27.6413L20.8492 24.0269C24.8 22.166 27.5985 17.8788 27.713 17.6927C27.8561 17.478 27.8347 17.1917 27.67 16.9913C27.5054 16.7909 27.2335 16.7193 26.9901 16.8195L25.1149 17.571C25.8736 16.6263 26.5893 15.5169 27.2478 14.2644C28.1281 12.518 28.579 11.1725 28.6005 11.1152ZM21.9299 19.2888L19.7828 23.261C19.7541 23.3183 19.7327 23.3827 19.7184 23.4471L19.4464 25.079L18.0221 20.8061C18.6018 20.5771 19.6969 20.0188 20.0834 18.9595C20.3124 18.3154 20.2408 17.6354 19.8615 16.9197L21.615 15.0302L21.9299 19.2888ZM16.4547 29.1371L15.0805 27.6198L16.8197 25.7017C16.9771 25.5299 17.0201 25.2794 16.9199 25.0647C16.8268 24.8499 16.6121 24.714 16.3759 24.714H12.1317C11.8955 24.714 11.6879 24.8499 11.5877 25.0647C11.4947 25.2794 11.5305 25.5299 11.6879 25.7017L13.4271 27.6198L12.053 29.1371L9.56939 27.3049L12.3106 19.4534C12.3106 19.4462 12.3178 19.4391 12.3178 19.4391L14.3218 16.9985L16.3258 19.4391V19.4462C16.3258 19.4462 16.3258 19.4462 16.3258 19.4534L18.9454 27.2977L16.4547 29.1371ZM14.2574 26.7681L13.4701 25.9021H15.0447L14.2574 26.7681ZM8.79641 23.44C8.79641 23.4328 8.79641 23.4257 8.78926 23.4257C8.78926 23.4113 8.7821 23.4042 8.7821 23.3899C8.7821 23.3827 8.77494 23.3756 8.77494 23.3684C8.77494 23.3541 8.76778 23.3469 8.76778 23.3326C8.76778 23.3255 8.76063 23.3183 8.76063 23.3111C8.75347 23.304 8.75347 23.2897 8.74631 23.2825C8.74631 23.2754 8.73915 23.2682 8.73915 23.261C8.73915 23.261 8.73915 23.2539 8.732 23.2539L6.58483 19.2816L6.9069 14.9014L8.69621 16.8338C8.28825 17.5782 8.20236 18.2868 8.43855 18.9452C8.83936 20.0474 10.0131 20.6129 10.5714 20.8204L9.07555 25.1219L8.79641 23.44ZM14.2645 11.3371C14.3361 11.3514 14.4148 11.3514 14.4864 11.3371L19.0098 10.4925L21.3431 13.5701L16.9413 18.3297L14.7799 15.6887C14.6653 15.5527 14.5007 15.474 14.3218 15.474C14.1429 15.474 13.9783 15.5527 13.8637 15.6887L11.7023 18.3297L7.25761 13.5272L9.82705 10.4925L14.2645 11.3371ZM19.883 9.68375L24.7714 2.84859C24.3849 5.16038 23.5618 9.04676 22.0158 12.4965L19.883 9.68375ZM18.9668 18.5444C18.7664 19.0955 18.1008 19.482 17.6428 19.6753L17.5497 19.4033L18.974 17.8645C19.0456 18.115 19.0384 18.344 18.9668 18.5444ZM10.9651 19.711C10.5213 19.5321 9.7698 19.1313 9.56224 18.5516C9.47635 18.3225 9.48351 18.0649 9.57655 17.7857L11.0724 19.4033L10.9651 19.711ZM6.59914 12.4536C5.06749 9.01813 4.24441 5.14606 3.85792 2.84859L8.8322 9.81258L6.59914 12.4536ZM14.2574 8.40261L15.1807 10.0058L14.3791 10.1561L13.3556 9.96288L14.2574 8.40261ZM1.67496 12.06L5.79753 13.8851L5.49693 17.9647C3.61457 16.1038 2.33343 13.5773 1.67496 12.06ZM3.19945 18.6947L5.4182 19.5894C5.43251 19.6252 5.44683 19.6609 5.46114 19.6967L6.69934 21.9871C5.26074 20.985 4.03685 19.7039 3.19945 18.6947ZM14.2574 30.7618L13.0192 29.8457L14.2574 28.4787L15.4956 29.8457L14.2574 30.7618ZM25.4298 18.6947C24.5495 19.7468 23.2683 21.0924 21.7439 22.1159L23.0536 19.6967C23.0608 19.6753 23.0679 19.6609 23.0823 19.6395L25.4298 18.6947ZM23.025 18.0649L22.7172 13.9352L26.9543 12.06C26.2887 13.6059 24.9718 16.1968 23.025 18.0649Z" fill="white"></path><path d="M73.454 13.4V10.9341H78.1386V8.73199H73.454V6.4557H79.3097V4.14642H70.9551V15.7176H79.4252V13.4H73.454ZM68.4726 6.99179C67.9365 6.10931 67.2025 5.40828 66.2788 4.90519C65.3633 4.4021 64.3406 4.14642 63.2355 4.14642H59.0128V15.7176H63.2602C64.3571 15.7176 65.3716 15.4619 66.287 14.9588C67.2025 14.4557 67.9365 13.7547 68.4726 12.8722C69.0087 11.9897 69.2808 11.0083 69.2808 9.93612C69.2808 8.86395 69.0087 7.87426 68.4726 6.99179ZM66.3035 11.6681C66.0066 12.1794 65.5942 12.5918 65.0746 12.8804C64.5551 13.1774 63.9695 13.3258 63.3344 13.3258H61.5118V6.52993H63.3097C63.953 6.52993 64.5386 6.67838 65.0582 6.97529C65.5777 7.2722 65.9984 7.67632 66.2953 8.19591C66.5922 8.7155 66.7406 9.30107 66.7406 9.93612C66.7489 10.5712 66.6004 11.1567 66.3035 11.6681ZM43.4994 12.5588C43.087 12.8804 42.6829 13.1279 42.287 13.2763C41.8994 13.4248 41.4623 13.499 41.0004 13.499C40.3901 13.499 39.8128 13.3423 39.285 13.0289C38.7571 12.7155 38.3283 12.2784 38.0231 11.7341C37.7097 11.1897 37.553 10.5794 37.553 9.92787C37.553 9.26808 37.7097 8.66601 38.0231 8.12168C38.3365 7.57735 38.7571 7.14024 39.285 6.82684C39.8128 6.51344 40.3901 6.35673 41.0004 6.35673C41.4458 6.35673 41.8911 6.43921 42.32 6.60416C42.7489 6.76911 43.1365 6.99179 43.4747 7.26395L43.6066 7.37117L45.0252 5.46601L44.9097 5.36704C44.3819 4.92168 43.7798 4.56704 43.12 4.31962C42.452 4.0722 41.7427 3.94849 41.0004 3.94849C39.9035 3.94849 38.8891 4.2124 37.9819 4.74024C37.0747 5.26807 36.3406 5.99385 35.821 6.90106C35.2932 7.80828 35.0293 8.82272 35.0293 9.91962C35.0293 11.0083 35.2932 12.0227 35.821 12.9382C36.3489 13.8536 37.0747 14.5794 37.9819 15.1073C38.8891 15.6351 39.9118 15.9073 41.0004 15.9073C41.7427 15.9073 42.452 15.7835 43.12 15.5279C43.7798 15.2804 44.3819 14.9176 44.9097 14.464L45.0252 14.365L43.6314 12.4433L43.4994 12.5588ZM49.8582 6.82684C50.1633 6.64539 50.4767 6.51344 50.8066 6.43921V3.98972C49.9984 4.08869 49.2396 4.33612 48.5468 4.74024C47.6396 5.26807 46.9056 5.99385 46.386 6.90106C45.8582 7.80828 45.5942 8.82272 45.5942 9.91962C45.5942 11.0083 45.8582 12.0227 46.386 12.9382C46.9138 13.8536 47.6396 14.5794 48.5468 15.1073C49.2396 15.5114 49.9984 15.767 50.8066 15.8578V13.4083C50.4767 13.3341 50.1551 13.2021 49.8582 13.0207C49.3303 12.7073 48.9015 12.2701 48.5881 11.7258C48.2747 11.1815 48.118 10.5712 48.118 9.91962C48.118 9.26808 48.2747 8.65777 48.5881 8.11344C48.9015 7.57735 49.3303 7.14024 49.8582 6.82684ZM56.7613 6.90106C56.2334 5.99385 55.5076 5.26807 54.6004 4.74024C53.8994 4.32787 53.1241 4.08045 52.3076 3.98972V6.43921C52.6458 6.51344 52.9839 6.64539 53.2891 6.82684C53.8169 7.14024 54.2458 7.56911 54.5509 8.11344C54.8643 8.65777 55.021 9.26808 55.021 9.92787C55.021 10.5794 54.8643 11.1897 54.5509 11.7341C54.2375 12.2784 53.8169 12.7155 53.2891 13.0289C52.9757 13.2186 52.6458 13.3506 52.2994 13.4248V15.8743C53.1159 15.7835 53.8829 15.5279 54.5922 15.1155C55.4994 14.5877 56.2252 13.8536 56.753 12.9464C57.2808 12.031 57.5448 11.0165 57.5448 9.92787C57.553 8.82271 57.2891 7.80828 56.7613 6.90106Z" fill="white"></path><path d="M44.3104 26.3236C44.1372 25.9194 43.8898 25.573 43.5764 25.2844C43.3619 25.0864 43.131 24.9297 42.8754 24.8143C43.0238 24.7153 43.1723 24.5916 43.296 24.4514C43.5186 24.204 43.7001 23.9236 43.8321 23.5937C43.964 23.272 44.03 22.9339 44.03 22.5957C44.03 21.9607 43.8815 21.3998 43.5764 20.9215C43.2712 20.4431 42.8424 20.072 42.2898 19.8081C41.7455 19.5524 41.0939 19.4287 40.3764 19.4287H35.6836V30.9999H40.8382C41.5228 30.9999 42.1496 30.8679 42.7186 30.6122C43.2877 30.3483 43.7496 29.9607 44.0795 29.4411C44.4094 28.9297 44.5826 28.3112 44.5826 27.6102C44.5743 27.1648 44.4836 26.7277 44.3104 26.3236ZM38.1578 21.5978H40.2527C40.5166 21.5978 40.7393 21.6473 40.9372 21.7545C41.1351 21.8535 41.2754 21.9937 41.3826 22.1751C41.4898 22.3565 41.5393 22.5545 41.5393 22.7772C41.5393 23.0081 41.4815 23.206 41.3661 23.3875C41.2506 23.5689 41.0939 23.7174 40.8877 23.8328C40.6815 23.9401 40.4506 23.9978 40.1949 23.9978H38.1413V21.5978H38.1578ZM41.8939 28.1545C41.7702 28.3772 41.6135 28.5421 41.3991 28.6576C41.1846 28.7813 40.9372 28.839 40.6733 28.839H38.1578V25.9854H40.5413C40.8465 25.9854 41.1186 26.0514 41.3496 26.1834C41.5805 26.3153 41.7619 26.4885 41.8857 26.7029C42.0094 26.9174 42.0753 27.1566 42.0753 27.404C42.0753 27.6844 42.0176 27.9318 41.8939 28.1545Z" fill="white"></path><path d="M57.5559 25.2021C57.5559 26.2907 57.292 27.3052 56.7642 28.2206C56.2363 29.1278 55.5105 29.8619 54.6033 30.3897C53.894 30.8021 53.127 31.0577 52.3105 31.1485V28.699C52.6569 28.6247 52.9868 28.4928 53.3002 28.3031C53.8281 27.9897 54.2487 27.5526 54.5621 27.0083C54.8755 26.4639 55.0322 25.8536 55.0322 25.2021C55.0322 24.5423 54.8755 23.932 54.5621 23.3876C54.2487 22.8433 53.8281 22.4144 53.3002 22.101C52.9868 21.9196 52.6569 21.7876 52.3188 21.7134V19.2639C53.1353 19.3546 53.9105 19.6103 54.6116 20.0144C55.5188 20.5423 56.2528 21.268 56.7724 22.1753C57.292 23.0907 57.5559 24.1052 57.5559 25.2021Z" fill="white"></path><path d="M48.5993 23.4045C48.2859 23.9488 48.1292 24.5591 48.1292 25.2107C48.1292 25.8705 48.2859 26.4725 48.5993 27.0168C48.9127 27.5612 49.3333 27.9983 49.8694 28.3117C50.1663 28.4931 50.488 28.6251 50.8179 28.6993V31.1488C50.0179 31.0581 49.2591 30.8024 48.5581 30.3983C47.6509 29.8705 46.9168 29.1364 46.3972 28.2292C45.8694 27.3138 45.6055 26.2993 45.6055 25.2107C45.6055 24.1138 45.8694 23.0993 46.3972 22.1921C46.9251 21.2849 47.6509 20.5591 48.5581 20.0313C49.2509 19.6272 50.0096 19.3797 50.8179 19.2808V21.7302C50.488 21.8045 50.1746 21.9364 49.8694 22.1179C49.3333 22.423 48.9045 22.8601 48.5993 23.4045Z" fill="white"></path><path d="M62.2587 19.4287H59.7598V30.9999H67.4629V28.5998H62.2587V19.4287Z" fill="white"></path><path d="M78.6854 22.2741C78.1493 21.3916 77.4153 20.6906 76.4916 20.1875C75.5761 19.6844 74.5535 19.4287 73.4483 19.4287H69.2256V30.9999H73.473C74.5699 30.9999 75.5844 30.7442 76.4999 30.2411C77.4153 29.738 78.1493 29.037 78.6772 28.1545C79.2133 27.2803 79.4772 26.2906 79.4772 25.2184C79.4772 24.1462 79.2215 23.1565 78.6854 22.2741ZM76.5164 26.9504C76.2194 27.4617 75.8071 27.8741 75.2875 28.1627C74.7679 28.4596 74.1823 28.6081 73.5473 28.6081H71.7246V21.8122H73.5225C74.1658 21.8122 74.7514 21.9607 75.271 22.2576C75.7906 22.5545 76.2029 22.9586 76.5081 23.4782C76.805 23.9978 76.9535 24.5834 76.9535 25.2184C76.9617 25.8535 76.8133 26.439 76.5164 26.9504Z" fill="white"></path></g><defs><clipPath id="clip0_718_2836"><rect width="79.2" height="32" fill="white"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "horizontal-gradient") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "117",
          height: "49",
          viewBox: "0 0 117 49",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M42.8779 18.0159C42.9272 17.8644 42.9317 17.7019 42.8909 17.5478C42.8501 17.3938 42.7656 17.2549 42.6477 17.1477C42.5298 17.0405 42.3835 16.9697 42.2263 16.9437C42.0691 16.9177 41.9077 16.9377 41.7616 17.0012L35.583 19.7405C37.0665 16.1908 38.0254 12.4758 38.5969 9.79896C39.3292 6.35412 39.5848 3.90501 39.5949 3.80231C39.6044 3.70999 39.598 3.61673 39.5759 3.52659C39.6188 3.3405 39.596 3.14531 39.5114 2.97413C39.4267 2.80295 39.2854 2.66633 39.1115 2.58745C38.9376 2.50858 38.7418 2.49231 38.5572 2.54141C38.3727 2.59051 38.2108 2.70195 38.0991 2.85682L29.0226 15.5534L25.887 16.1405L23.5897 12.1621C23.517 12.0365 23.4126 11.9322 23.287 11.8597C23.1613 11.7872 23.0187 11.749 22.8736 11.749C22.7285 11.749 22.5859 11.7872 22.4602 11.8597C22.3345 11.9322 22.2301 12.0365 22.1575 12.1621L19.8993 16.0691L16.8373 15.4864L7.80326 2.85347C7.69153 2.6986 7.52966 2.58716 7.34511 2.53806C7.16057 2.48896 6.96472 2.50523 6.7908 2.5841C6.61689 2.66298 6.47562 2.7996 6.39097 2.97078C6.30633 3.14196 6.28352 3.33716 6.32642 3.52324C6.30435 3.61338 6.29794 3.70665 6.30744 3.79896C6.31861 3.90054 6.57312 6.35078 7.3054 9.79561C7.87358 12.4747 8.83247 16.1863 10.3194 19.7372L4.1374 17.0012C3.99127 16.9377 3.82991 16.9177 3.67271 16.9437C3.51551 16.9697 3.36916 17.0405 3.25125 17.1477C3.13335 17.2549 3.04891 17.3938 3.00808 17.5478C2.96726 17.7019 2.97178 17.8644 3.02112 18.0159C3.54871 19.515 4.18713 20.9728 4.93107 22.3772C5.77076 24.0085 6.76588 25.555 7.90261 26.9952L5.28716 25.9426C5.12432 25.8763 4.94456 25.8636 4.77404 25.9065C4.60352 25.9494 4.45113 26.0456 4.33906 26.1811C4.22698 26.3166 4.16106 26.4843 4.15089 26.6598C4.14072 26.8354 4.18683 27.0096 4.28251 27.1571C4.44661 27.4116 8.27321 33.2777 13.6905 35.9143L14.5456 41.0391C14.5456 41.0671 14.5556 41.095 14.5623 41.1218C14.5623 41.1296 14.5679 41.1363 14.5701 41.143C14.5744 41.1612 14.58 41.1791 14.5869 41.1965C14.5869 41.2088 14.5969 41.2211 14.6025 41.2334C14.6119 41.2578 14.6235 41.2813 14.6371 41.3037C14.6428 41.316 14.6491 41.3279 14.6561 41.3394L14.6706 41.3618L14.7007 41.4053C14.7494 41.47 14.8073 41.5271 14.8727 41.575L19.33 44.8691L19.3523 44.8914C19.4009 44.9353 19.4549 44.9728 19.513 45.0031L22.2133 46.9967C22.3069 47.066 22.414 47.1147 22.5277 47.1397C22.6414 47.1647 22.759 47.1654 22.873 47.1418C22.9281 47.153 22.9842 47.1586 23.0405 47.1586C23.2173 47.1589 23.3896 47.1021 23.5316 46.9967L26.2252 45.0053C26.2833 44.975 26.3373 44.9375 26.386 44.8937L26.4083 44.8713L30.8544 41.5772L30.8689 41.566C30.8846 41.5538 30.9002 41.5415 30.9147 41.5281L30.9303 41.5136L30.9716 41.4723L30.9895 41.4522C31.0007 41.4388 31.0118 41.4265 31.0219 41.412C31.0288 41.4031 31.0352 41.3938 31.0408 41.3841C31.05 41.3722 31.0586 41.36 31.0665 41.3472C31.0732 41.3372 31.0788 41.3249 31.0855 41.3138C31.0925 41.3022 31.0988 41.2903 31.1045 41.278C31.1104 41.2664 31.1156 41.2545 31.1201 41.2423C31.1257 41.23 31.1313 41.2189 31.1368 41.2055L31.1469 41.1731C31.1525 41.1586 31.1569 41.1441 31.1614 41.1296C31.1659 41.1151 31.1614 41.1117 31.167 41.1028C31.1719 41.0856 31.1756 41.068 31.1781 41.0503L32.0366 35.9958C37.5454 33.4004 41.4513 27.4127 41.6165 27.1549C41.7122 27.0073 41.7583 26.8331 41.7481 26.6576C41.7379 26.4821 41.672 26.3143 41.5599 26.1789C41.4479 26.0434 41.2955 25.9472 41.125 25.9043C40.9544 25.8614 40.7747 25.874 40.6118 25.9404L37.9975 26.993C39.1329 25.5532 40.1273 24.0074 40.9668 22.3772C41.7114 20.973 42.3502 19.5152 42.8779 18.0159ZM33.5692 29.4153L30.5731 34.9577C30.5295 35.0382 30.4994 35.1253 30.4838 35.2155L30.1054 37.4905L28.1173 31.5307C28.9244 31.2103 30.4615 30.4267 30.9917 28.951C31.3166 28.0579 31.215 27.1002 30.687 26.1011L33.1294 23.4611L33.5692 29.4153ZM25.9316 43.1623L24.0172 41.0414L26.4407 38.3623C26.5477 38.2435 26.618 38.0963 26.6431 37.9384C26.6681 37.7805 26.6469 37.6187 26.582 37.4726C26.517 37.3265 26.4111 37.2023 26.2771 37.1152C26.143 37.028 25.9866 36.9816 25.8267 36.9815H19.9104C19.7504 36.9813 19.5938 37.0276 19.4596 37.1148C19.3255 37.2019 19.2195 37.3262 19.1546 37.4724C19.0897 37.6187 19.0686 37.7806 19.094 37.9386C19.1194 38.0966 19.1901 38.2438 19.2976 38.3623L21.7199 41.0414L19.8055 43.1623L16.345 40.6049L20.1493 29.6531C20.1526 29.6451 20.1552 29.6369 20.1571 29.6285L22.9478 26.2205L25.7385 29.6285V29.6397V29.6464L29.3921 40.596L25.9316 43.1623ZM22.8686 39.8514L21.7724 38.6391H23.9636L22.8686 39.8514ZM15.2522 35.2144C15.2522 35.2077 15.2522 35.1999 15.2522 35.1921C15.2522 35.1843 15.2455 35.1586 15.241 35.1418C15.2366 35.1251 15.2354 35.124 15.2332 35.1151C15.231 35.1061 15.2243 35.0849 15.2187 35.0704C15.2157 35.0608 15.2119 35.0515 15.2075 35.0425C15.202 35.0291 15.1964 35.0146 15.1897 35.0012L15.1763 34.9733L15.1696 34.9588L12.1668 29.4153L12.6133 23.3048L15.1104 26.004C14.5389 27.0388 14.4183 28.0289 14.7532 28.9532C15.3114 30.4914 16.9501 31.2762 17.7259 31.5709L15.6395 37.5753L15.2522 35.2144ZM22.8831 18.3262C22.9845 18.3452 23.0886 18.3452 23.1901 18.3262L29.4993 17.1463L32.7543 21.4351L26.6092 28.078L23.5897 24.3943C23.5121 24.2995 23.4144 24.2231 23.3037 24.1706C23.193 24.1182 23.072 24.0909 22.9495 24.0909C22.827 24.0909 22.706 24.1182 22.5953 24.1706C22.4846 24.2231 22.3869 24.2995 22.3093 24.3943L19.2898 28.078L13.0844 21.3725L16.671 17.1407L22.8831 18.3262ZM30.7171 16.0144L37.5342 6.4758C36.9928 9.70073 35.8453 15.1214 33.692 19.937L30.7171 16.0144ZM29.439 28.3828C29.1633 29.1474 28.2278 29.6866 27.5915 29.9556L27.4665 29.5805L29.4513 27.4362C29.5458 27.7464 29.5416 28.0784 29.439 28.3861V28.3828ZM18.2762 30.0036C17.6578 29.758 16.6085 29.1965 16.3149 28.3861C16.2005 28.0379 16.208 27.6612 16.3361 27.3178L18.4247 29.5761L18.2762 30.0036ZM12.1802 19.8812C10.0459 15.089 8.90168 9.69068 8.3614 6.48026L15.3047 16.1919L12.1802 19.8812ZM22.8686 14.2284L24.1579 16.4609L23.0416 16.6708L21.6183 16.3995L22.8686 14.2284ZM5.30949 19.3298L11.065 21.8827L10.6442 27.5757C8.01423 24.9725 6.22707 21.4473 5.30949 19.3298ZM7.43042 28.5949L10.5303 29.8429C10.5461 29.8952 10.5667 29.946 10.5917 29.9947L12.3231 33.1951C10.3104 31.783 8.61144 29.9969 7.43489 28.5893L7.43042 28.5949ZM22.8686 45.4272L21.1406 44.1502L22.8686 42.2403L24.5954 44.1502L22.8686 45.4272ZM38.4596 28.5893C37.2317 30.055 35.4457 31.9314 33.3158 33.3625L35.1398 29.9891C35.1532 29.9645 35.1633 29.9378 35.1744 29.9121L38.4596 28.5893ZM35.1019 27.7175L34.6755 21.9508L40.585 19.3298C39.6507 21.4842 37.8133 25.1031 35.1019 27.7175Z" fill="url(#paint0_linear_718_4937)"></path><path d="M104.706 20.0487V16.6151H111.235V13.5431H104.706V10.365H112.876V7.13675H101.217V23.277H113.037V20.0487H104.706ZM97.7489 11.1085C97.0052 9.88674 95.9515 8.8835 94.6948 8.20056C93.3945 7.49096 91.9342 7.12589 90.4529 7.1401H84.5668V23.277H90.4831C91.9585 23.2902 93.4128 22.9251 94.7071 22.2166C95.9597 21.5345 97.0095 20.5332 97.75 19.3142C98.4956 18.0785 98.8821 16.6595 98.8663 15.2164C98.8832 13.7698 98.4963 12.3472 97.7489 11.1085ZM94.7249 17.6365C94.3186 18.346 93.7271 18.9317 93.0137 19.331C92.2732 19.7449 91.4373 19.9577 90.5891 19.9483H88.0507V10.4599H90.5556C91.4096 10.4506 92.2514 10.6637 92.998 11.0783C93.7152 11.4787 94.3101 12.0663 94.7193 12.7784C95.1302 13.5211 95.3463 14.3557 95.3472 15.2045C95.3482 16.0532 95.1341 16.8884 94.7249 17.632V17.6365ZM62.911 18.8711C62.3997 19.2861 61.8293 19.6225 61.2187 19.869C60.6451 20.0829 60.037 20.1892 59.4249 20.1827C58.5847 20.1846 57.7601 19.9565 57.0405 19.523C56.3053 19.086 55.6969 18.4645 55.2756 17.7202C54.846 16.9502 54.6204 16.0831 54.6204 15.2013C54.6204 14.3195 54.846 13.4524 55.2756 12.6824C55.6973 11.9383 56.3055 11.317 57.0405 10.8796C57.7629 10.4461 58.5901 10.2183 59.4327 10.221C60.0615 10.2227 60.6847 10.34 61.2712 10.5671C61.852 10.7855 62.3943 11.0953 62.8775 11.4847L63.0684 11.6365L65.0442 8.98196L64.879 8.84131C64.1394 8.21122 63.295 7.71589 62.3841 7.37787C61.4379 7.02933 60.4366 6.85425 59.4282 6.86103C57.963 6.86761 56.5251 7.25826 55.258 7.99401C53.9909 8.72975 52.9388 9.78488 52.2068 11.0541C51.4747 12.3234 51.0883 13.7624 51.0859 15.2276C51.0836 16.6929 51.4656 18.1331 52.1936 19.4047C53.197 21.1071 54.7674 22.4022 56.6297 23.0633C58.492 23.7243 60.5274 23.7091 62.3796 23.0203C63.2923 22.6744 64.1383 22.1732 64.8801 21.539L65.042 21.4017L63.1019 18.7226L62.911 18.8711ZM71.7865 10.8796C72.1989 10.6325 72.647 10.4506 73.1149 10.3405V6.92019C71.8425 7.07158 70.6229 7.51717 69.5526 8.22166C68.4823 8.92615 67.5908 9.87018 66.9486 10.979C66.2226 12.2638 65.8412 13.7144 65.8412 15.1901C65.8412 16.6658 66.2226 18.1165 66.9486 19.4013C67.6689 20.659 68.7086 21.7041 69.9625 22.4309C70.9282 22.9941 72 23.3513 73.1104 23.4802V20.0599C72.644 19.9515 72.1976 19.7703 71.7876 19.523C71.0525 19.0855 70.4439 18.4642 70.0217 17.7202C69.3628 16.5757 69.1786 15.2186 69.5085 13.9398C69.8384 12.6611 70.6562 11.5625 71.7865 10.8796ZM81.4144 10.9801C80.768 9.86409 79.8691 8.91511 78.7897 8.20928C77.7103 7.50345 76.4805 7.06042 75.199 6.91573V10.3293C75.684 10.4354 76.1487 10.619 76.5754 10.8729C77.31 11.3087 77.9183 11.9286 78.3402 12.6713C78.7699 13.4433 78.9954 14.3122 78.9954 15.1957C78.9954 16.0793 78.7699 16.9482 78.3402 17.7202C77.9178 18.4637 77.3097 19.0849 76.5754 19.523C76.1491 19.7809 75.6834 19.9668 75.1968 20.0733V23.4858C76.325 23.3623 77.4146 23.0029 78.3949 22.4309C79.6488 21.7041 80.6885 20.659 81.4088 19.4013C82.1351 18.1166 82.5167 16.6659 82.5167 15.1901C82.5167 13.7144 82.1351 12.2637 81.4088 10.979L81.4144 10.9801Z" fill="url(#paint1_linear_718_4937)"></path><path d="M64.0443 38.0798C63.8088 37.5304 63.4613 37.0362 63.0241 36.6286C62.7362 36.3578 62.4068 36.1347 62.0484 35.9678C62.2664 35.8226 62.4655 35.6508 62.6412 35.4565C62.9589 35.1079 63.2105 34.7043 63.3835 34.2654C63.5623 33.8219 63.6548 33.3483 63.6559 32.8701C63.672 32.0485 63.4527 31.2393 63.0241 30.5382C62.5884 29.857 61.9623 29.3186 61.2235 28.9899C60.46 28.6349 59.5603 28.4541 58.5445 28.4541H52.002V44.591H59.1964C60.0985 44.6016 60.9921 44.4157 61.8151 44.0463C62.5905 43.6961 63.2491 43.1308 63.7128 42.4176C64.1783 41.701 64.4138 40.8426 64.4138 39.8647C64.4158 39.2505 64.29 38.6427 64.0443 38.0798ZM55.4646 31.4826H58.3926C58.7255 31.4765 59.0546 31.5532 59.3504 31.7058C59.6107 31.8373 59.8274 32.0412 59.9744 32.293C60.1231 32.5472 60.2002 32.8368 60.1977 33.1313C60.2016 33.4335 60.1183 33.7304 59.9577 33.9864C59.7934 34.2479 59.5622 34.4607 59.2879 34.6026C58.9907 34.7575 58.6597 34.8361 58.3245 34.8314H55.4646V31.4826ZM60.6799 40.6294C60.5209 40.9265 60.2804 41.172 59.9867 41.3371C59.6767 41.5084 59.3273 41.5958 58.9731 41.5905H55.4646V37.6098H58.7956C59.1875 37.6016 59.5748 37.695 59.9197 37.8811C60.2284 38.0501 60.4863 38.2987 60.6665 38.6011C60.8411 38.8968 60.9321 39.2344 60.9299 39.5778C60.9361 39.9438 60.8501 40.3054 60.6799 40.6294Z" fill="#1A1E7E"></path><path d="M82.5237 36.5084C82.5355 37.9727 82.1597 39.414 81.4343 40.686C80.7089 41.958 79.6597 43.0154 78.3934 43.7508C77.4129 44.3223 76.3234 44.6817 75.1953 44.8057V41.3921C75.6825 41.2857 76.149 41.1002 76.5761 40.8429C77.32 40.3948 77.9341 39.7605 78.3578 39.0025C78.7814 38.2444 78.9999 37.389 78.9918 36.5207C79.0021 35.6331 78.7768 34.7587 78.3387 33.9867C77.9173 33.2456 77.3098 32.6272 76.5761 32.1928C76.15 31.9393 75.6861 31.7554 75.202 31.6481V28.2334C76.4838 28.3774 77.7138 28.8202 78.7933 29.5261C79.8728 30.232 80.7716 31.1813 81.4174 32.2978C82.1557 33.5773 82.5377 35.0312 82.5237 36.5084Z" fill="#1A1E7E"></path><path d="M70.0219 34.0009C69.5923 34.7711 69.3667 35.6384 69.3667 36.5203C69.3667 37.4022 69.5923 38.2695 70.0219 39.0397C70.4442 39.7837 71.0527 40.405 71.7879 40.8425C72.1998 41.09 72.648 41.2712 73.1162 41.3795V44.7997C72.0057 44.6705 70.9339 44.3128 69.9683 43.7493C68.7142 43.0228 67.6744 41.9776 66.9544 40.7197C66.4005 39.7712 66.0392 38.7228 65.8909 37.6345C65.7427 36.5462 65.8104 35.4393 66.0904 34.3772C66.3703 33.3152 66.8569 32.3187 67.5223 31.4448C68.1877 30.571 69.0189 29.8369 69.9683 29.2846C70.9352 28.7249 72.0066 28.3693 73.1162 28.2397V31.6589C72.648 31.7693 72.1998 31.952 71.7879 32.2003C71.0533 32.6375 70.4448 33.2579 70.0219 34.0009Z" fill="#1A1E7E"></path><path d="M89.0788 28.4564H85.5938V44.5956H96.3323V41.2456H89.0788V28.4564Z" fill="#1A1E7E"></path><path d="M111.991 32.4238C111.247 31.2033 110.193 30.2019 108.937 29.5214C107.636 28.8113 106.176 28.4458 104.695 28.4599H98.8086V44.5912H104.73C106.206 44.6049 107.66 44.2397 108.954 43.5308C110.207 42.8488 111.256 41.8474 111.996 40.6284C112.733 39.3873 113.121 37.9708 113.121 36.5278C113.121 35.0847 112.733 33.6682 111.996 32.4271L111.991 32.4238ZM108.968 38.9507C108.562 39.6607 107.97 40.2465 107.255 40.6452C106.515 41.0597 105.679 41.2729 104.831 41.2636H102.294V31.7752H104.797C105.651 31.7651 106.493 31.9779 107.24 32.3925C107.958 32.7944 108.553 33.384 108.962 34.0982C109.371 34.8416 109.586 35.6764 109.586 36.525C109.586 37.3735 109.371 38.2083 108.962 38.9518L108.968 38.9507Z" fill="#1A1E7E"></path><defs><linearGradient id="paint0_linear_718_4937" x1="2.97535" y1="24.833" x2="42.9192" y2="24.833" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.15" stop-color="#7327DA"></stop><stop offset="0.39" stop-color="#591ED4"></stop><stop offset="0.69" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient><linearGradient id="paint1_linear_718_4937" x1="51.0862" y1="15.2019" x2="113.037" y2="15.2019" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.15" stop-color="#7327DA"></stop><stop offset="0.39" stop-color="#591ED4"></stop><stop offset="0.69" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "vertical-gradient") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "69",
          height: "120",
          viewBox: "0 0 69 120",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, _attrs))}><rect width="68.4931" height="120" fill="url(#pattern0)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_718_5026" transform="scale(0.004 0.00228311)"></use></pattern><image id="image0_718_5026" width="250" height="438" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAG2CAYAAABWAZueAAAACXBIWXMAAAVSAAAFUgF3XW3CAAAgAElEQVR4nO29CXxb1Zn3fzovU0ogsbMASZxEcmzLWxIpZCNhsfJv/9MZaIlSKC3821ouUEo7YIWlQAsfy5+2LKU0MpRC18ht307XwabTeaedtxO7kD0hUrzLdmIlMQlbYgEJDaU5/8+5OteRZC1nu1d3Od9P3RDHlq7uPb/zPOd5nvOcD0AIgUQisTb/IJ+vRGJ9pNAlEhsghS6R2IDzjPoRH6gdKYUAeAEAHgBABADY9fhA1YQBLk0iUZjzoZeUMQrRGIUgAgHoOnnmSkOOUUMG4x6oHfEDAEIQgJJz34UJCEDgWwNV4WJem0SCuPiCbX4IoTJGFQVB5X/KGJ04c6XhxqjhhP5g3YgXQrAVJO9dClD9+/pvDVR1FfESJTbn4gu2IU9zK9IOVMdpUuj4C25MnLmqw0h3yYhr9FCBfw/fVzNcqtO1SCRpXHLBNjT2ClnsoNHumhGF7i7w7w6CGy2RaEUYj0GeMaw7Zo26b7ivZthvgOuQ2IhLL9iGxtwGM35iM6fXQvfVDDsNcB0SGzB32jYnwbLSsJhZ6Cgib6iAh8TSdIC0LJC5MHvBjPvemmHDBT4k1mLutG1BI667aTCi0KOUP99yb82wV6NrkdicedO2o7HVQnkXaMew5hhR6CyVReF7ZMpNIpj507aTpNKyYbjqOCMKPcLwOzLlJtECklRaNljGsKZYxaIjNtwjU24SQcyftp0nlSYtOgE8s2HoHplyk3BSduF23lSatOgE8MyGMuUmEQFvKk1a9EI82l/Ju2HFfXd1TKbcJEwsuHA7dyotceYqw226MmoePcH5+y13V8dkyk1CxcILmVJpmfCOXU0wqtBFrHHCm6pjMuUmIWLhhTtYU2mZGG59Dgws9DEBryFTbhIaWFNpmYgYu8KxstARGzZVx2TKTZKXRRftELkrTQqdApHBjFCgOubR/IolpsRx0Q6P4F1phux+ZHWLDnCaRLrwklyEBe9KkxadlMcGKklvFmmE0x2ojpl2L7FEG5wX7QhRpNKIxtrEmSul0CnpJvjxDgqxNze7ZMpNksR50Q40FpoJb0eCsBCLZMwWBSMLnXRmpAm2dTS7ZMrN7pRPV1JpNBWUpGPMkNYcWEDonm8PVqEH1k74mnK9LgGU6/L246ev6MAHiRRCCp0Bkuilur4KAADihG+xodkVC+j2KSSGYvH0nQGKVFocjy1AuJY37HkDpnfd760ZRlYdbSLwUbx28C6XTLnZjcXTd3ooe677jp1eNzF32jbSsSItOi048k4SaFMewpODVaj0sJXwbaQLb09oXPbWV06vU8tZSYSeOGnQiDswQXNIkrrhyYfw5GBVkCLy6b7LNSRTbjahYvpOmlRa9yun16VafhKhG7LGXcVSQsf4aVJud7qGZMrN4lTO2EmbSsuMskuhawy10J8crBqjTbnd6RqSKTeLUjVjJ3UqbfzUukwXXApdY0huXsm9Ge2jvjPkkik3iQpVKu3oqXVpk8K8aUpbKZLfl0Jn5fGBStKbl23GpUq5/WvVkEy5WYyqGcyptFSIIu4nzlwphc4JSXBtysP4zpCLOuX2r1VDMuVmEVwzdlGn0o6cWpet1xvJmDBs6auKGYROMlNmDahtHnLJlJt9oUqlHTm1Ntc4IwnWGtqaAwsJvSHXP2weclGl3L5cJVNuZqe6ZBdVKu3wO2vzWX7TB+KAhYQO7qkZzvdAfDQpty9XyZSbWakp2UWbSsu5vJs/bbvHCoE4YAahcwbkFELJ9TpVyu1LVTLlZjZqSnZRp9Li76zN14OdLBD3V2MH4oCJjk1mCsilEkqm3NoI30+u180Jzbq8beydtYUmBUsE4oCJhM4ckMsgSHGk7YYvyZSbaagt2UWTSosSRuQtEYgDJhI6zZbVnLTFqF344B1VgzLlZnBqS6hTaf6x/C67iqm3pqZiJYuOAnIFZ+C2mJJy20T4vtKFNwc0LvumQ2/nTKVNMn/adtKArLToonicfMsq0cNpi7lCNCm3OyoHZcrNoNSX7qZKpR18+3LSZ0kylhJv/tW4W1NTMYtFB4QuEk1ajCrl9sXKQZlyMxj1pbuFpdKyQPK8TeG2AwsKnXg9/RT9er3ji5WDMuVmEJaU7qZOpR18+3Ka44xJxpIUugYQ7WQrUDiTxlOxaplyMy9UqbTRty8nnhTKLrROoYyKaYT++EAV6exJ62JTpdxurxyUKbcis6R0txaptFSIxtAbf71SWnSNIAmgUQn96Vg1dcrt9kqZcisWS0t3U6fSRt6ictkB4RgyRaGMitmELjogp/B0rFqm3MwDVSpt+K3LWdxrSwXigEWFXnI3w+mp3x2upkq53W6ilNt1Cw6UXld2IPTxsgMTHy87AD9WdmDi2rJo+Nr5USfBrxuGZTP3UKXSht8iTqVNsoB8fS6FrhXf0m6drkKVcvtChfFTbhsWHCjFg7I5ZQCjPxtRMOkak4jdPXOPlqm0VIie6evvXiGFrjHC1+kq3x2mXq933FYxYPSUWzCPFTTFMsQ9cw91Ki321hradbmK5dbnwKRC12SdrvLMsHVSbr4FB5wEVrDhmvlRo3smVKm0ocQamkkhE8utz4GFhc60Tk+BKuV2W8WAUVNupJOQYScrz8w9WqfSJllo0fU5MKPQdVinI6tOnXK7tWLAUCk334Ieb74WWxk4/mV+1HCTlWfWHupU2mCC2WUHVl2fA5NadEC4RmINxih8b9j0KTfa6wn+87yo0eINVKm0wcQa3ko1kjFjuvU5MLHQSWZUUmuWk+9RptxurRgwRMpt44IeZAUdlL+GBGWYlOHyWXSptIHEGhHXTjJmTGfNgYmFThRs2VQd47LqGKqU2y2LB4oa2Nq4sKc0x0EEJDR+dF6k6EuQy2bplkqbZOGFO0hfgyfQVzRMKfQnkkckC9ufno9nh2uoU263LC5qyi1E4e7m+v2isWLWXupU2gDfulyFaP/5a+9eYZqNLKmY1aIDQhdKhEUHz47UmCLl9omFPR5cCMNDw0fnRYTcN0aoUml9E6tFWVhLptVUzCx0kgfs2FQdE1X5RZVy+/zioqTcRFnj0D/Ni+julayYvVe3VFoqiy7a4SSMB5jSbQc2sOhAlFV/boTahQ9+frF+KbfrF/b4RAQgMQ6OdT4TK2fvpU6l9U2sFuGyA4oxIi263jyRPAedxMIKC449N1JjyJTb9ckAHKk1Jw0sBv5pXkTPOniqVFrvxGqRa2WSMRJ99d0rTNEfLhtmtuiAcIYldQWJ+P5IDVXKrWmxLim3AEU6zUso9hJRrnEhVs7eS5VK651YLfqekowR01pzYAGhE62ZAmLSbKlQpdyaFvdrlnK7YWGPk8LNbv39+LIIxc83/r9zI5qmC1fN3qt7Ki0Vx0XWTqupmFroTwwq5bAkghM6OL5Pv17v8Jf3axXcChK6vAnVvf+P8WVhCq9EM6u+eg59Kq1H3LpchWRsJI6fNl/Zaypmt+iAcKAITxd93wAptxsWKfXspOm0wO/Hl6WKhFTADR+ZG6GZ1GigSqUdOLlKC6tKMjZMbc2BRYROtJstwLebLRdUKTd/eb/oSDapWLtfSFrxSf4w7kb3rZ3w90MfmSs23bZmzr6ipNJScV60w7K71TKxi0UHlK42ET8YpU+5NZb3C5lwPrmo10+RTsslkiBFYE7YJLVmzj7qVFr05CrRLjugeHamt+gfgBAa4DL4uLdmuAOmWAf1M6mfDP8ZDw25NEkXof3oEIDNyfdOe0+gXknG96MQgDGI+oJD2IX+/PlYPfFAvnFRb2ny92EJesHU94L4PybfF4D2zqPLcg7oa+ZHkeBaIL52CDLuXdrrw/I/H1/OlGJae/E+D4DAAwFwwqTAHBDfl7R7ha8h5bNsipxcpUnmwnnRDvQMHHDyuZ1735Tn1Xns9LpiVgoKwSpC90MAtqh/zyF09PCW40MWhXNrxQBy7xoIhZ4ykOHkRITF3wWgcjBA5Bfx+qyiunFRbxAq4oSggNATEABP59FlOcV5zXxla2pEGfCFhd755+PLCw76qy552YveF0J02glEwm5Iva6U1ysk9O7IiVWaRP2x274/XdhZhd507PQ603f9Pc8A1yAC0jWUX8OKLySAMY4NJQ78NemO3+ToSwAAkQgjEIsfAoAsfwvha4byiRzxn6+4J65JNp14nuD1Nnx47n7vn48vV+73+kv3OxVBK6KGSDjov2m3x+ZCeCotA1K33fTrc2AViw6SRyZH1KKLPBY93hbTxn0HSavugzApGAaLnmaR0343x5KggEWPAwA9HUeXES0J/mV+tAtCZHnzWnT0RwJNOjB5NlnJOQs49Z5nWkkGi748cmKVJh4YctuB6rbntujRV06vs8RhHVYIxqmQuFeOZpcm0XcVI63lgqQix5B6OiXY6+DZCktKhyfZAVYo5dMVt53E87DMQR1Wcd0BjoxuJvg5Tdz3W5MNInm3iIpki2/BgWDquh8tAX4/fs6VRwc4YMusfiV0EjApDiw20ROobaLtKpZx3UGK+57HdUcId99vqxiYDAZyBONEu+5Z3WbF9VbW+hBFwUsyXW0C132Ku62h667+zqaowMh7+fQdYxAmLXoe190ybjvQyqI/XD+KblApfoCRb/RVaJEDzUaYwKoj993bFnMJCbLcluz+aprjmVJcbzOx2T1zTyR6chX3M1s8fafXaG77B8/rLsWpRzTJTLz/9wbhcQmha3Qk8IfrR9FF7gcAbMVfYw/Vj4Yfqh/VY8ujrsUzX6gYVI87MpK7a1U6lolZrxvGbT//vL84zz+vO4yzNape9v+v/9UV+Yd/6BLqTQhz3R+uHy3NTC9lvjKEoBNZv2/2V2iWsrinZrgLQtgAMtxIkOL+Ive1LebiGjS3Vw6WQgi6IIDubO+Rw3Vfj7/vxYUjHgChW2fXPffvau+642WDMjmigh+UNgxDNVsyeZ05r7v7wEm+vPri6TsnUKFR6v3Mcq3d46fWabZr74J//At67cBZiIq84JRlDV7SoHiJ8+xZrxBvWKTrTrKLClWvbfha3QiqDAs90l+phXsUJnBNS+5yxfxPxVw87x+m2EONaAofqlMnuLSJ7jPOPi8Ohjnxn2ZzrbMRR8s2/KUIe8cbK6bk9PE2VdL6g4alpbuDPROrmereF0/f6Sd8H03c9gv/8S8olhMgHDdqPwAhgWORFr0rc4BmseiT/4L/Ew0GNKOHHu2vFDJz3VMzXAohPAkyrEv6+yvf63wq5mKK5uIjk5tzWcCp7w1btxysoxqcNzv6PMmIuFJZ5k1WmWUEz4xj0bshhGO4oCfy4muXUXlsK5Ni30pg0RXPAQKwvndiNbVXuHj6TuSOb4AgPTiaxaLPHD+1Tsh4nP7BF0uT1hv6U/P2iLMp75nFoiO6z571CvEsii109ecSeE0UfLS/krtdz93VMfxA068jQ+jo/8ufilVTvd/tlYPogU1G2AmE3r7lYK2QmMCnFvVOpsOSFWlK5Nyho9ATIFmlh+rzFWFvfXW5kMDRytl7lbJeQqErbm0vxd70iuk70b07BNKFlE3onUdP8de2z/jgi8g7Q58JvVbJ2ZSlTTGELtJ155kB1fO6Gx+sG+mEEIQeG6jkWceHCbdA+mgi5l+sVM5D30LwoypRUSJH/OrwkjHs5k4Gim5I9ovz4BZRqutPs6TIxRTXm3VDCwl731wZXJG07CTLlhJ8TTQBK1Lxcrntpee/5IUA0mzBzYewbJVIi+7PFAGFRc/2c8o6/vEBtnX83dWxCYjXY3ksevypWDVRNuCLlYNoUHXB1GBjfouOhOL5ycFavVKLaSQPWYSec0E/vLEku0XvxvX0SoDsj8c8RanvXjF7L0ozKbvyClh09e+orzvRGrZi+s4xtQ4/j0VPHDm1jilIO+v8l5T1NwosZr4+UKw3k0VvOnvWKyReoHfUffJfCISeto4HAIYeH6giFs3d1bEQxL3I8ghdWe89HavOO7DvQBH2pAVxp113bqGj6LL3JwdrDXWqx8fLDkzWN2ChT/zhFbehrnHFrL3IIm4lFDpiY6FDHCpn7EQxjq2psYYcQm87cmodcfBrzodeKsXi9qtLKJjl9QGb0IVG3YVWxj1cPxpOLQMVJHT1u0g8yjr+WwNVBV1IdD46TObzCwm9/elYdV73+o7KwUhaCijl9XIIff2PD9ZaYtdTMbhs1h68DZdI6ImzEHoGEmtyjonKGTvDEIJGAqEvP3JqXcGJ7+ILtiXX3xD6oBogzW6ReYTefvasV9iyT/SmFi2ridR1/KH7aoY77qsZzhuk+M6Qsu+cpM1T452uoZzu2h1Vg9RpNClyPl4+sQplKDoJX6QkX3FL1Yyd6NmS7EGIFhL5pRds815ywTb0Xofwa2pZKCVUS0KF/vU+pRAmLvI1c4ACHVvvqxmOoKYTeX6ONNCW9TW+VDUUpNyo0v7jg7WW2fFUZPwUY8ldW7Ir17MmtYo5x8rcadv8c6dti+DKNaHnBOQgfvasV6ix0GKbqp5138jSbrm3ZnjsnprhIMqhZ/x7B2FPtCnrsi9VDfkpGjwgOn80Ki7Cbnf2n1B6xNGkuZprSnZl+3mSNXci0yuYP2176fxp24Pzpm0fw0FmEZkMUoRrSAuhF8OiObAoT95TMxy+Gx+suHnINUF6GOO/Vg1NDpIvVw3RblSJatF80u7gphOkR2AhwjUluyZTblUzdvoIN7B0HDm1Vgl6Lbhwu7Pswu1oDJ/EY0pUxxwahGtIk22qalCOIBjXiqPAaaWJOYJxeYJqmUEy5W8oZYRc74nJoFz2YJz6mt3fHa72frlqyIkrvEomfyJzK2XKdeAiEs8PR2tNey6X0XHP3DNZAJUlGJcW6MJpWe9QYs1E1YydyT5+YErhT2YwbjmEoBQAGIQpPw9SgmMg5TXOjZnsW3AzXh+Nj/BZCCcmm3BOXjc49+rnfr/9/b83CDcaWnWYIZ2RvI/0VwZwoccmwev7BrymInXfG/41ack7KIIs6HW9UuSaQ7VeR96Ya8YuJ2Hxjeq2bxW8xyCOx7Tz7feuClAc9qmJR6xZ44mH60fHMhsF5kivrX+k/1wV3IN1I34IlQfbkH5l1BZ9yr8VsOjZfye/RW/6wWiNDL7pgHvmHiVdSmDR1XRZNHVnYQGLnq8LLK1F74YAhhNnrpocF9M/+KL3LIRbU98PZLfo8b/9vUGT7dxa9owj3cSR5qY82l8ZfmygEs1+6ylOEikGm6TI9SN6UlmvN1G8oZ7BM4DH6vqJM1d6U0WOIXXFNTvnTtNWUg/Vj05kW3tnKZgpz7WZ5f7aEXxaKPRPrpuLb9Hbvz9SI4NvRWBp6W6021FJeRaw6GnFTBpZdFTEpey+PPHXK7OO3+nJzS2HCApmEu/9vUGrgzg17wJLGrnOOZM9PlA59viAZut4FqJS5EUlQHHenVZMrr/f/OuVgVwix5BaaU3T0lpb9FKcplAoUAKb06pncl+ySCZtHa+TRVciuvjYZEmRWFK6O22DkY4WHWVywq+9ewXRkg1tVVW3xhJY9Jnv/b1Bs3GlqUXHTSFJ19nE65MnBqvCTwxW6b2OR9FZvxR58emdWB3R8MSdbCjr71ffvcJLKnIM6Zhu11LkQI92z7gpZHLDf36LDmiseir31gw7cYseJR+vkUVf/9xIjaxhNxD1pbuVeg2NLHpC7X507PQ66jGJG08cyhZHyGLRy997v0HTFK3mJ7V8o69iTAurnsq3B6vGnhysUtfxTRqs45ukyA2JFuv1OB5DzldOrwuwiBxDbs01FjnQ6wAH1aoTblNlsuqZ3F0d82Er38Bp0bufHa7RrCOohI/60t2esxB2TemnR2/Ru1HPgyOn1nG3eS45/0UnhGrbqiR5LHr5GR2ErsvZa9iqdxP+uJBc4neGXB2bh1xIoMs51/ENdyT7xEmMiYdzuygaG8uPnFrrFSFyDOkY7tZD5EDPI5keqh9Vunwk/1aw8UT5YwP8Vj2VQHXMiSvuAudmf6o1OnLfZYGMgagv3a20L2NYo6MTYVE6Kzz2zlqh46z0/JecEMBDmeMph0Vff+b9q3VZEup69trX6tROsQWF3vnYQKUmJ5M2u2KlODXjZkivSbEbhCWluyfPu6MQOgqwBSCAHYfeXqtJlLv0/Jc6IIAbCITe/e7frtZtSaj3scmkLs2GB2pHNLkJbTFl6yrrQw7dnmwSKSkiOI/OUmAycfDty8NaiXzm+S95KRpTaFbumg1dhY6PYtI0Aq8xSpthKfbisRQXyzCuy7XeW04caX/3b/q47Cp6W3RAcTMa7q8d0cR9x2k4VqTYi8SymXt4RK4ps85/yUexzVV3I6a70L/ZT5VX16r+l3dmV8SOT1OV6IA7eZKqkU+uJR2ryJrr3r+gGBYdUMxojvtrR4zowgNV7LdVDEixa4xIkePz0YUy60MvBQmNR6JYS9KiCP2byYKYVsIfD+CtqkbELcWuLZ5zItd7fzkRsz/0kpOi7j50ugjWHBTRogPs6pC0eCoR6cI3u2KiZ3R35jHIEqEYVuSYEKGnkdC5Q3IaRRP6I8ljkklnwg331+Y/sEEwCcoaavetFQMyvy4Yz6w9tIdnkCAsiDrnQ1TptMCpv11dtJ2PxbToSOxhCkGFv1I7pW+7VkRwMz8asTdKsYtjeVLkNIdnRAmfl5AxdPEF20opGjlGT/3t6qKOjaIKHUNq1R2C9iATzejfG66ewGKn2QnXeMtiKXZeLqMXeRw/K1G16iQEKLI3eu6dz0rRhY47wJKes9XyldphXteLeEbHYvcRxhJUkNjlJhhGVsza66cUOXo2voHEGlK3mNuiX3zBNg/FKT6db793VdFjOEaw6ADPeKRi0sNiTj6YZ4drVDeeRuxbPm8wsV9XdsD/8bIDYx8vOwA/VnYAXlsWHbt2ftRQ17hi9t4pZ+wXQOmrP5BYQ3P0s4g1OukYTBjBmgOjCB3vPyeNSLrvqxnmyUVSz+jPjphb7NctOBDCAkp1NdF/b7lmfrRokeBUVjKKvC/ZVkpF89TVJRdsC1IECENvv3eVIQ73MIpFR2IPUgS/Wu6rYXbhmX7vuaTYaYW7pWnxQFGbVmxYcABdc3OeH2m+psiWfeXsvV5KkSP8GSIHWgv9UjqXPfrWe1cZptjLMELH0Ay48H1TT08VRdYB89xITQflIQKIjqbF/UWpi/ctOEC6yyv0L/OjRbnGVbP3ehiCaE29E6tZA29Mxy7NnUYVZQdGO3TTUEJ/tL8SzdBthD/u1rCcMKdl+H5yPzqN2JVSWX+5vmL3LeihKRtVrvGf50V1rfBbPWcvyyYVJPJcgtMyT03jsre99d5VNHEDzTGaRQf4hpKmtJrvrRmm3eHGfZAeFjtpCS9IEbuepby0AirRs8JvzZx9ToZrbO3JLXIwSBeUI2butG2+AsufVOJG3GJtOKE/mqyYo3Lh7xXvwhe0DN8fqQlS9qJDA7qjsbxfc6u5cUEPa0WZ+6PzIppnNdbM2VdKeWotov3AyVVCBFQ+fQfxhDtv2nYnrcueOHOV4Xr/G9Gig8cGlNw6qQtfIrpQ4pnhaiLL8INR5WgmGrErdfFain3jwp4AZR46k8aPzotolhK6PCly2vr19ujJVSLXvDSeFc2E1DZx5kpD7nswpNAxNFH4hntqhgsGnZpdMeGu8w9Ha/0UBT9AFfvnNBD7Jxb2oOj1ZgEvtfmf5kWEZwvWsom8k1Lkwvq8z5+2PURxrVGDdkVSOE/PN/ta3agvmd5S2vZFHumvzGmJHxuonLi/dgQ94P2EL998T81w5MnBqnxullZrZD/lAHbjaLgwK3X9wh6W6HU+OpDY/3TMI3LdSyMcgMVDe49I3OaCk+z8adsLpSUz8Z88c2Xe977wH/+Czhrw4OaQkXf/drVuJbt6HeCQ7LwK1Yc82X01jo+9Cec5NjmYzF1O7dgKpnZtVYoonhysyjo48RbVred+PmsX2Ogzw9XUEfJbKwbQ7+zP3k0WZu0yCwFo/9mhOm6xX7+wZ7KzLT7lJ+3zpX8v5eDAzO9ldE5VDpWEwPvfxz3ca861F+8LAwgaYdo9gBltmNXrVK5COdAycmIV1XvXlOxC96GhQLvn1kNvr81pfcsu3O6BEEweCpHn2GT175tO/PXKrB4lPjbZfxZC9JwdGe2eowBA75n3tT13Dejouueydg5cgHDowbqRjgfrpvaIe3xAKaQhPfxBWa/fXR3LNWOTuMusN51lXdv4WWefiOAXTfAtQVHh5xZRcrwOiZw+blBKK3IMV9HMggu30wYKu7OJfMYHX/TN+OCLHfjcwZYcG2B062WgudAfqlfcdZJBiPb1Pv9g3cjYA7UjgQdqR1JFSbOxxJHn5mmSy76tYsDJEQBr/Iyzj3ltd8PCnhDFnmiAJySaSWnDR+ZGmMtkr7h4X5Dx3jg8s/aweDu81XFdFLvSEnhsKsw8/6XS0vNfCpSc/yK6hucJn4v7g+d1a9UEdRI9LDqtuBw4oHTy/tqR8P21I97HByonUm8oAe67q2OslojFivBGqVs+4+yjHtQ3LOqhXUe2/X58Wfg/xpeFKbIaiOaPzI1QX98VF7/spygZzYZW1WVZx+TCC7fTpiV9b/71yolZH3rJO+v8l9DvnsRjl7b5qObFVEaOugNsCbbeXzsyhm8GTZFK4yY2sbMEn0TMyFv+Pwqxf3JRL+0hBp2/H182OSH9YdwdoMwWhD48dz/xgLzykpdpN6lko8Ezc48WAdQpS7iFF+6gXV6gseiZ/aGXxnDchyelqTl6CF3ERgPVytNaByT2VPEInzlvSwbhRB0MsOVmZ1/BSePGRb20XVFzRa/9FOkopXLuw3P3F4xzXHXJyz4BIlehnUSp17yLLtpBuwce4LHIYr2zYf7TVL/RVxHW4LxyGrYEzoldi0IV0fnm8M2OvkITEo3IlXXkC+PLpixJ/vCKm7axRsEy2asueVAeK3wAACAASURBVNkjuGeAFrv/Jr0ER1LkoiYlFuLvvd+geTWiXq57sXfypIq9ELQWgcRLoNnHrogpl9hvXNRLvY584eiynBbjP19xj9HGP/6fS/dnHZhXJ0Uu+pAFLdavihV2Fl/kQC9t6HU+Ok1Jq1Zs0WjQkKwh0Vp6E8VrKmK/KUPsn1rUS1ve2tR5dFnBies/X3F3Ue7Ia1x/6f60ACSjyEliBLSuMVGMxSAibzvzfoM10msq3+irCIgsT2SkWMf5dIUP1YVYNsHc5FDW40jktOWt7R1HlxG7hP/nFXeY8vo2r790v+JWN1y6n2mTihbWbJC8d1yxRR498/7VurWZ0jvq7qd0Y4uBZoGRcLIKjkZMSk3Apx29tB1Oox1Hl1KL6L+OuWmCc4gOb1LsNLlnRPuuN1b4d7+x0nC7vHQiofdyVu9jkyNGLvwHyZ1rWgh9MgjYTi92N07fkFrLOGcAi6bFdQm+NqqdaEjkINl4QqtdfEY3JsF3/3a1ro0pinGaaogyf2sF0oSHxa7FMkaJsD9/dCmzpfzjMQ9Li2tSojuxyDFa9dMzVHeXDDrf/dvVujfkLFbBjL/IKbdcsAxuEg8gW1Sb9iQYEgLPH1nKPcj/mNyxJnr9GM0ibJL3KHZcRyTxYmWginWaKovVoD0PjQUWkZBETR3+8v60JctPD9VNCBZ7678fWSosH/unYx7adln5UES+440Vk57Gmjn7vIRtvYxqnaMM49d3ukjnrxXzkEVaq6EWayynXONqDWl6pCWzQeTPzomd103u/N2RpcJjH3865gkKWGYpW4d3vJ4mcpqOqix7trVMWbXjMUibSkSHLBZt0jLCIYs0okUbODxPDFYh92cmzk0XdQnww9HaMYpttKiNVLrYx+p5xc7SnIEGnniCIvLtKSJPaSVFEqVPRE6u0vM8tVzE8Vib+dq7V/hxPQbNZqJ22x+y+Eh/Je1A2nJfzbDvicGqiScGq0LfHqxCBSvrBVl51hmX9CGWYLGnrVV/PlbPchIMUN3B3x1hD74VAjedYAnOKSLf9vqKyXu69lznV9IofbEPrERjav3x01c4j5++IvTqu1dMXHLBNto6/ujb711V9B7vRtm9RjvIw6kntXx7sKrrSTFWnind88PRWprjn5WU1Ocy1uwpYqfB99sjSzXfEPF/j3toy2RBUuSXnRP5xft8eCKlaZDBuhzhSdtNWu9XTq/zHzu9bnIZgE9qoZl8EhpmFqjQpZUUCQ/WjUyWUGa2XVL/ltH2SbmJT+RoG3V3dcwLk25nY+4WVFlbSZWz5NJvrVCOXtpK2UoqCiAM/GysfnIw3ezsCwGYdAvT2kFN/f1Nvzm8RNc0zYfnKmWvmzPbP0HcVinl+tpefO0yJf5yxcX7nBCAEERNGDJbMeVvJdW6/wR9e+eakl2lEIAxCFEbqJytpNLuJ/73dgBg+MipdVnX93OnbVPaS0HcXgqkt5ICqZ8Nv74yPo1ykINhhA6SYlfqjwmFjkhAAJzfHqzK6bpuqo6VYsEHIDy3Lswj9PZnhquZXK1bKwZCME2kBYWuvDFMBryCyKrf7OzrADDZmSSP0BO/PrxE11NVVD48d/9EUkTpnyND6J0web/9AMCWbGIA+YUeffnEKqZ9CTUlu4IQgJYCPePU+xnHk1D48Dtrc44hfBzTmPq5CYXe9NZ7VxnmrHxDCR0kxR6EMLnvnEDoSasIgDef2BGB6hiakfen/F4uoSPWPzNczRS5vWXxgOKeUgpd/V43amwIYMbvTr2+9l8fXlKUdd+H5+4PQ5jiJWUXeso1ZxcDOCeITKEnIICel0+sovaqkDVXBIm9wgJC3zT2ztqCHtG8adtLIYBKXCFPc8hMobcmzhjngEVg0JNaaE9AURrs3VPgtJbQkCtCkSrieUg8uXHS46KKGYnW8r0Vd5dF5JgQYcorTiLy+dO2Mx02YTSRAwOf1OKnSFkBUrFT5O0bvlQ1xBRE+fHBWtGFMJnEf314SdGE/ufjyzs0Ko9VRL7vxEqmNW1tyS6aBp0FvSFGkXdPnLnSUKeoqhi5Z5yPUiwFxd4Wc41ReAvM66sUsdNMVqQYIa8s+hqUjTj73mQTOYY0MNl96O21eZdlZRcyiTwqqHegJhhW6I8lO7/SWkZF7Hn6ugPslpNYJMeXqoaYZ+efHKyd+MnBWq8GDTeMEOARKXQ0GXr2coi8tmSXl6LldV63egG7yL2FTmopJobuAovbPNPuYc8rdmzVSWd/7rXWloO1AVzQI6KCD7ntRU/X/M+rQtx39Pub9ry50rv3Te596aTPqfPg25fntOYL2USu7C0/YWCRAxO0e0ZiZ6kaU8S+KbdlD5Fa9TuqBgWIva6LoV11NozgtqvwXAtaPnl2v7GSuw6gvnQ36eYYkC9Gs/DCHawi957465VG3harYHihA36xT8nHtsVcExRWIHBH5SB3zjp8qG4ifKgOvWc5R7muYfKyjEJHbvp61Hhi1xsrRFX0kd6T9oNvX571PRddtMPDKvI3TSByYMQ8ej6+UquUvaLDGidTKDDjTzA1p4uKarw4vZbGXa4hlHN1gOyVZ/hPJUHa+uxIjdCUyefK+51KIQ+EAYhTQqk52XN/TObRo786vETzEz1oWH/p/gm1UqxAHr0dFabsSKl7F0F96W6lwOpsjvdOyaMnIATO0bcvn+JeOy7agU43xWPqXF48vXIOv865XLki8tffvcIUIgdmsegq3xqoYrHsykaSQHUsW7qM2Kp/sXJQ6IkhPz1UN/azpIUnTeMZyZqrkFr1gGiRY0ifXyibyJ0X7fAybDc1nciB2YQO+MS+tdmV3tv9qVg16WaUEg173ZFG9o20PlchvSbhaaclpbuDpFtdswVfcbtnml58wKwiB2YUOgJvZGHZ1rml2RXLfOikRTSNoq06hkQEyG3XfJcaLVvJo+9Chb6kdHcpxXMLjryVbs3Lp+8IMrR7VkT+mglFDswqdMAn9uZmV6zjLlcyIv90TKlpJy1sEeo+fza5L53EKhnRbVchseob1l68T+QmnABpqevwW5dPTuyLp+8sXTx9ZwfDGX6KyF81qciBmYUO+MSOiiu67nINqRaa1C1vuL1yUOT+YjO77Sq6uu9LS3c7KYQ6+Vwrpu9Um17QnCUPVJEfP21ekQOzCx0km06oYqctSEGplMidriEftuqkKS+Ra3WSwd/9y7jx3HaVLv3dd9L7Hx1+63LFE6qcsZO26YVK3AoiB1YQOjgndg/DRhLk/j1/p2soRGnVuQft58r7fYTup5HddhUy930On/u+LHlWOunGFWUNXzVjJ3q2zzMcx4XGkufY6XWmFzmwitARTyb3o7PuGmvGg5V0G6uIzi6kk4WR3XYVvdx30kkPxVzGqmbsjFA2cVRRatdfOb3OMkdGWUboAIv9ycEqD2PlmZti/ea4vXKQdzsiyaDv/Lf4EsMPtm4d3Hf3zD00pa4RRlcd0T5+ap3HSiIHVhO6yneGXH6Bhw/kIviFCrbS2Mbyfj+hK2kGa65C5L5fzu6+08RGmhlPzm09emqdIfeT82JJoYOk2NHA2KjhgXsOjmOLrOS2q2jmvrtn7vFTWHMW0BjZeOTUOkMfAMqDZYWO2Dzk6mCMyJMSuK1igMpCNZb3lxIuEdr/LV5vGvfxL69dpqX7rqUAlcj6kVNrzTSpUmNpoYOk2NWIvBYnuLKUxlrRmqsQue9rKNx3T9Ka05y9TgMaE57D76y1RGQ9H5YXOkg2hpwIDbl8uDG/aJpvqxigKY0lEXriF/F6qwodkE52nll7SgVlOLLROvbOWl88T5tnK2ELoau0xVwhfECeaFeeyKr7yd12U7qRGrjvpKWuNKBnv3zsnbWWXY9nw1ZCB0mxa+HKN95aMUCyV9wKJa+FEOK+L09ac9FntCuu+qG3re+qZ2I7oQPcYeapmOLKi4zKk7iYJEI3q9uuIsp9Dwq05kpU/eDbl/sOZtmXbgdsKXSVp2LVaFA6BVn3Bnz+Wlb85f1OwgIOM5S85uRFAe77ZbOUUleWirZsoGeLustYOqpeCFsLHSS3qU48HasWZd3zrftI16WmFjqGyH1fPWdvLvddhMuuWPHhty73Ze5HtyO2F7rKd4cnrTtPH/Z8RR0kbnv8F8njk80Or/vOWxOPnqFz+C17W/FUpNBT+O5w9cQzw9UBHJlnOmXllsVT3femxcRuuyUGpgD3nTVvjp7Z8qHEmkDsrTW2t+KpSKFn4Znh6sj3hqu92J2nTcVly6mTuqJWcNtViNz3VbPT3fcVs/ayNPZAz2jjYGKNdzCxxnYRdRKk0PPwveHqjmeHa5BwmygEn03oJK5o/H9bw21XYXXfaYqP0DNpGkiscQ4k1kg3PQ9S6AQ8O1ITfm5EETzJ9tc0i9S0WMmvk7iiWlWAFYWX2N13EqGj123qm1jt7JtYbSUvSDOk0OnIewonJnOg2qFIJhdE7vvKdPedxHUP9UqBUyGFTgdJ77ZM603UzvnnY/WG7QvHAYv7TmLRrXivNEUKnYLnRmpILPpk5P3z5G67Ja3TtteZ3HeS+yWFTsl5prpaYxAnGIyqVSKNtls5kNRB0NBRcd9hcg9CQXonVhNNuJJzSKHTM0YhdKJ2zjRu+42LehVvAZ47ADL9cEH8H2kHNKZ9L8/vph9MmPwz7WcmDxuM/M+ry0nz1CRCBxRFMlo1EbE0Uuj0dBG0NfJ+fvGAsHbOn3b0lkKoROVJWx1rzvpL96Macv/WAoLf9vqKjnUX70sQ3Au193ohpNvOgFyj00My0JyCO8l0GUnkGLSvPuK9dD9Jtxii6DvhPZNuOwNS6PSQRt6J2jn/bCx/X7ibHL1+xrbFeuAgzP+TxiBIPqe06AxIoVPyfcLIu8B2zkZvP1ww77399RWk0XcSpNAZkEJnQ1RAyArRdtINKEI+a4+MuDMhhc6GCKvS+bNDdSSRa6PvwiI9AkuE0GXEnREpdDZEWBXSIhmj18ATfY4dYtx36bYzIoXOBu+AS/z0UB2Rhfu3+BKaI531prvr1eU0ExGvVZduOyNS6GzwCp1qwP8yvsRvQLFHGTrB8ApdWnRGZMEMAyjyfnvlIM9LsAz4AG5TTZNqa+88uqxg1P6a+VH0M1soXlc5VrhQsUwmO95Y0XH5HKLimVxIoTMiLTo7rIGhRDuh257Krw4vYTn/vXHDggN5DypgEHmCpCIuD8xW/cDJVdJ1Z0QKnR1W68I80FPETjPJtFy34EBWq37t/KiXQeTe/3l1OU8nHNbPLyPuHEihs8NqXbii6L9Oit1HGcHecl1ZutivLYt6GETn/fNxLpGDnW8wR9+l286BFDo7LAMv3n6ojrsv3K8PL4lgy04l9o+XHVC2gX4s+WcX5Vq5iVfkKbBYdem2cyCFzg6L0IVVwv0mKXba8tiuj5cd8OLroBL5/z3uEdkcg+U+SIvOgRQ6IxQ176kI7STz28NLO3CHWlKQuLdS9k1vEyxysIvNfZdC50AKnQ+aAFE8LMBtz+S3R5aGKcVOQ/t/H/eIPtFUhcqqR2XEnQspdD5orIxmfeF+lxS76IKa9j8d82i5c45G6DLizokUOh80VkbTBpC/O7JUZPVcVIOzydOgdN+l286JFDofNAOQqPEhD/+eFDvTmXEpKFVvfzrm0XTX3Jo5+2iOXpJuOydS6HzQCP15f3l/uLG8n6T1Eg8+yuq5VJSCmD9qL/IgDgqSRv6lRedECp2DH4xSR95R37euxvJ+zaz780eWTjDk2FV8Wop87Zx9pZfP2YfuWQvlr0qhcyKFzg+t9USbUro+V96vZaArxLhxRLN1+dqLFVd9jKCDbiYJGXHnRwqdn7ybRnKARLjls+X94c86+4S68hsX9gQ4OsZu+Oi8iPCg4bqL94UoXfVULHX4ZLH4AITQmFdmIm6rGPBDvDlEvZ2pByMoRx9k+X7yYAUYhwD4fi7gyORPLOxJXgf/AQ7tfxSQWrvi4pedAMAOCIA79RpSD4SAGdcA8DXgn2uLnFilafTfLkiLLoAfjtYiK7icMd+LqtT2f8bZxzWgr1/YQ7vdNB+N/zQvwiX0Ky95WT2QgaVVNYovrJciF4e06AK5tWJg8kQVCoue+r1OCID/FwV6vWdy/cIeZZMKBKBE8JFMTX86Rl/+etUlL4cgAM0QZr+GAha9GwLoe/nEKqM3xTQVUugacMtixZVXAmKUQkdfcQCB7xdxMlf+hoU9Hoh3oml09tr6/z7uIQqGXX3Jy+ha0MTgVl+PUuit+95cyRLzkBRAuu4a8OODiitP2w1GRXHlb3b0FRzwNyzqKWXYbtpKeT0dH5kbKZgOvPqSl/34WphddSly7ZBC14ifHKxV94yzlqW23OTo67rJ0Zs1Kv/JRb0sIt/0+/FlQYYdb125xI7OXmu4dH8YxwdYourosEbn3jdXyhSahkjXXQeaFvf7IFRc2hIC133Sl8VOdAJF5X+ZbPuscOOiXnSWeBcE0E1xbHL7C+PnGkVeWxb1Awi2UBybHIUAog4zk2vn9ZfuV1x1JaoOM36PzHXftPuNlTJ9pgPSouvAloNKM0gPoyuv7CH/1KLeVLc2RNsNNlXkiD+Mu9HE00bxGkqhz4fnJk9PXX/p/gCHq46yE8ulyPVDWnSdaSzvR4O7mcKip1hHFJFWqssacwbUwBSLHu08uiznGvua+dHw5Ovlt+jqv0UhBGMweczx5HtSWHQls7DrjRUyqq4jUuhFoLG834dd3hJKoReOnIM0oUchAN7Oo8vyiuqa+VFU1LKBUOhTUmKEQk8ACII73lghrXgRkK57EcB93T0CtpTmA7nHBUWO8XPseCNB2foqRV48pEUvMp919gUh3s0l0KKjAJ634+hS4rLaf5kfRcU+yQCfWIveDgEIbH9duurFRArdAHzG2ad0Zk2tbAPsQkcusvd5CpGr/PO8aCkEcCwtO8Au9ASEILDt9cs07awjIUO67gbg52P1KHrtFOTK+1hEjvivY26eveypKK66FLlxkEI3CD8fq5/432P1XobKtVTQupzXRR7jbPTQ9uJrl3leeu0y4R1vJexIoRuMX4zVBzl3wnVtXNDDtPPsn+dF1eYQrGWsG1987TK548yAyDW6QbnZ0Vea3CACNzCm19oBgIEOsqg7CsaFIET5fab0WhRC6PvLa5fJlk8GRQrd4Nzk6A1AADYz5tGVphadR5fldKOvmR914kCgmzGP3tb16nJpxQ2OdN0Nzr/Fl4R4m1pct+BAViFeOz/K2xxioxS5OZAW3SR8KrlbDTV0UPrBUZTAqt9TSk9/P5505a8ti4YATJbiTv4uuUVHpbi+ra8ul7lxkyCFbjJuXNTrx4IvoRQ6gEmvABXoBLLufCMTeuufjy+X+8ZNhhS6CblxUS/eHkq1TbXw+j6/0BOoxdOfjy+X+8ZNiFyjm5BfJ89G52lqQYvSHEKK3LxIi25ybljY48N92rTqGbfpv4975GYUkyOFbgGuX9hzLkUGhAkdred9fzrmkRVuFkAK3UJ8YmGP0mZZgNCVCL3WJ6pK9EMK3WJsXNjjAxA3taAXOgq4Bf94TLrqVkMK3YJsXNDjxOWzDRRCRy2i/P91zC1ddQsihW5hfAsOKE0tCISuNIf4P6+4patuUaTQLc6GBQe8inWHwJFF6KinXPA/X3F32P0+WR0pdJtwXdkBlIZDfeomsNA7/jDulrvNbIIUukRiA2RlnERiA6TQJRIbIIUukdgAKXSJxAZIoUskNkAKXSKxAVLoEokNkEKXSGyAFLpEYgOk0CUSGyCFLpHYACl0icQGSKFLJDZACl0isQFS6BKJDZBCl0hsgBS6RGIDpNAlEhsghS6R2AApdInEBkihSyQ2QApdIrEBUugSiQ2QQpdIbIAUukRiA6TQJRIbIIUukdgAKXSJxAZIoUskNkAKXSKxAVLoEokNkEKXSGyAFLpEYgOk0CUSGyCFLpHYACl0icQGSKFLJDZACl0isQFS6BKJDZBCl0hswHnF/ohfqR0uBQB40H9DqHzLq/w3ABEAwAT+77EnB6vGinul7DSW95eij/bTQ3UTuV7kZkef8xfxetN+Romx+QDE6tKDB2pH0ID3YjF7AIANqe+eeilp35/8dxgFyQmgCwLQtXnIZUhh+Bf3+wBUJi8vTE5iJRCA9T89VNeV63dudvShf0P3Iw4AjKDPhz7nL+NLIvpefZKPzos4IQBOoN5/mPwT4qeR+j3178nvwbTvpf8sTPm5tH+P7HpjRc5JsFg4L9rhTft8GZ9NHa9p9yXte/i/4dTPrd7FzNdJfa+pr3PuHqa/Dv5+8i+Rs2e9U+6l5hb9wboRZLF9EAIfAGAD58u58Vcj+sum6lgUAhAGAIRDQ66iDpTPLx7wQQD8AEDez+jAX8rrfGpRbxwA0AEBCP368BI9JzY/AKBFrzdbM2cfGqpRCJWJXJno9r65siiTXApbi/z+LKwHSSORhmZCf7BuBFmDAB4wJRq9DRL9ZvQVqI61QwiCbTH9rPwtiwfQJBZIClwRpxag121GX59c1NsNAAj+5vCSnJ6ByUmbyFfO3huHAHQACML7ThRd9KZGeDDuq3UjpV+tGwkBAA7hAaqVyDNBg+NQsysWbnbFnFq/2a0VA0EAwBi2elqJPJMGZGVuWNTTdcPCHq9O71lM1Elu/2Wz9owtn7XHb4PPrAlChf7VuhE/HvzNRfxMiuDvcsWCd7mGSkW/+K0VA95bKwZUges1iWWiCP76hT0d1y/sEf4ZDQoS/RbPrD0Tnpl7Ajb5zMIQIvSvJa04cie3FHHwZ4KEGLnTNeQR8WJfqBgsva1iIITXbXpZ8EKgdfzYJxb2+AxyPXqAxtdm98w9Y+6Ze+zg1QiBW+hfqxv1YiveYIyPlAYS5P47XUNcLt8XKgY9OMBRTE8lF2jgP/+JhT0hA16blqBnu3XZzD3hpTN328WrYYZL6F+rG/VjC2cUK56LLXe6hsIsv3h75aAXi9yty5Wy07xxYU/XxgW2ceVV0FItsrR0txDPzaowCx2LfIuJ7gt1gO72ykGzTGQqyKvq8tlP7Mi6dy0p3S2DdTlgEvpD9aYTeQLl8ml+AYvcTJ9RxZ0U+wG7iR1Nxluk2LNDLXQTihzhezpWTVxQ88VKZU1uRpGrKGLfYD+xI7bUS7FPgUroD9WPmlEArU/HqokLTL5YOejMVllkQpDY7RagU5Fiz4BY6A/Vj5aaUADdT8eqg5S/02GiNXkhGjcsOGDXnPOWutLdMv2GoSmBDWsggCgWFppAIk8MVk1xr++tGcYbYCY3w5BeA/W6/I7KwZAG0fU4/oyFSnNDeLcezWckYfN1Cw50vXB0mV4lpFF11yEBWqdkO2pLdjkHEmv03AcRx1opFlnHGdHutYfrR/0ww2VP/7Vzu3rOfSfj7+k7dNrRwH58oJJq8N1dHSvF4kX15e7M98nY/bb+qZiL2AO5I5lG25q58yr92mGO76f+Obm7SKlLD+fZsZaNmxx9pQBAtEEGeSKOrLuh8Nal3LvEQNozgQBEXzi6jCr99NF5kSDEm1ood6+t737tMqrPvGbOPrzTD3ohTG7modj5lvd+QAi7BxJrmCy786IdMOO1SHavdb/67hWG8yQKCv3hpMs+BjOsDKPQu9EGkMcHKrk3nmyqjqGbGYIpFjjlmlrbYi4ql/2OykE06bgFCB3tqAuED9IJPBufdvQG0EYdvM2VR+jo/za9ML6MeM2up9BTWTV7b3K3ozrRTb4Ps9DRf24aSKyhjldYSegka/SAIFdy02MDlV4RIkdsHnKh/ejIEmzCbrpKN7XIq5RUmgiXvW3LwTqPCJEjfhlfEsLLlqiAlwt+vMz4Ufg9b66c2PPmyvDeN1eioGhrxrNlJVhTssvW1XN5hY6tOW8wBz2o5Y8NVGoSAQ4NuUJ4XRtlWZdjaAN22WjacrBWeODrV4eXjP3q8BIPXu7wUCLgWerK3jdXBgVNdCWCnrFpKWTRea05Ep730X66tTgtoSFXRA3WtcXoGlB8qWpIxF7ypp8crNU0APPrw0v8AsQe+JgJrHoq+95cOYafLe9nb64u2aX59mWjQiJ0HjQXuQrqMNMWc7G8F+9n1FzkKr9Jir2T4yVKGD2eorLvxMqJl0+sEjLRme2ziyKn0B9OVsDxWPNNeomclS9VKVtYedbmbT/WSeQp+HEKhxUzD/YApxtv2yKafBadZ+bvfrRfmzW5YHgefPzHGqzJC/Gbw0smOK/b/bGyqCld2P0nVk3gcckaoCtxzdhlS7HnEzpPk0Oz3Eyeyaxon/G3h5d2cbqxpm1UETmxaowzsGanJh2TZBX6w/WjPHnA9kf6xaTQtOTLVUNOjiBc949Ga4tdDswz2E1dGho5uSrEsXzh7dJrSnJZdJ6BYJY0Bs9nLPqy5LdHlo5xWHUr1IAzjzPXjF22q4HPVevOeiM6zWDNMawdSeI/Gq3tEH41bHSorZEpKbm2LOr5w7jbtC2UoydXhd0z94QYA8ZeDTdoOS+9YFtQ6wMc3nu/gWqiyyV0VhEYRQAkmP4z/u7IUtQFNsE42J341BszwzrRadl2yqHTwRdUQs/lurOm1cy0jZU18my0z8h6PVboscb62W1XODNF6A8nm0uwkDCR2w44AnFGEzqrVbZC7TfrszB6o0/hZLPorAPAFkfm/Gi01miHAbLed9Nb9OjJVfL0WUJseT76l6uYD3XoFnwpIjDcKaQ6I2Jnn+URKXQzza6y4b91YJroqmbstFUfeJFCt7tlkZgLW032IoVuphlSTkrWgUmww29dbtWjp7NiyzX6M8PVrAEsI54vZ3dsF0FnIZvQWa2dLdY8t1YMGM3lY61iNH2WxD1zj4y1EDJF6F/vq2AdACVfrRsxUyEC66YIo01orNdjheUL6yRnu0h9rhJY1rJKb5F7WtMwxlg04zNY0YxtLTrHZ9dykksY8d7mcAOJZwAAEBhJREFUEnqEcT3qM5HQeT6jIbq0XL+wh+ewBysUm7DuLddyoo6Yqd0z643Y8NW6EbOsm1hnXcetFQNGeZDMzS/MvHMNJNfnXo4yZltUcaaSS+g8N8IsPcl4ZvWid9C5YWGPk3HnFjBohR8tPH0PbJVaA7mE/vW+Cp6tmAEzWPVnhqvHOAJyjQaw6jwD3UzbiafgSVpz1lRnNPaWrmexGYJ8eXTWtsIlJlqn8wz4onXSuWFRj4fDmgMzC90zS0mp8Ywvs4xNoeQTOs9g2PBg3YgZmvDxPPSGWxYP6C72Ty7q5R3o0f8Yd5s5EBfiPHBDCj2Vr/dVhDnPvQo/WDdi6CKa7yUr5Hhyqi23LNbdhec92tkMbbizsnzWngCnJ9NuR7cdEJTA8gwK5MJ3PKjjer3ZFWMRHe/A7/j84gFdJrRPLuoNcw70hFnd9suSIt/M+TK2tOaAQOi8Nwa5WF1aW/ZAdcwZqI4h67y12RWjeq/vDVeHOU8+QRNal9Ziv5Ff5IjQf4wvM5VFWzF7b+mKWXvDAkTePZRYY7tou0peoX+9rwKt5do43wO5mV0P1GqzZg9Ux3w4Hai6s+FmV4zWi+BdayOx729aPCA8tfipRb2ln1rUy9oEMZWE2dz2lbP3evGz5f3swM7HMQHC3WtBAWdUIyE8/0DtSPj+WjGu/KbqmHNTdQzN0M9nVIe5aQf0s8M1vFZdZXPT4v4u/+J+ITX/n3b0+nAFm4hDB0K/N4k1XzV7r3fl7L3o2W4VcNItom0wscbWbacKCv3rfRUTAlNJaGYeu792JMgq+LurY567q2NImIfy5FIb73LFaD0IUTM+uqZD/vL+sL+cTfA3OXq9n3b0ZpvEWIm+ML7M0AdrrJmzz7t6zt7gqtl7I1jgorYEownc1mejIz6gNoovxEP1o12pNz/91yDIfJUpf4fZvg87YTI41PWtgaqcM+49NcPK2ecQQp/qoqc2u892TVDxQqDnqVg18Ux+R+VgCALQnOt1YcbnzNZ4f/JenPs3VIXWAQEI//RQXU6LerOjD63x/VCp34aO1Kb9ILORPz4FIPMepB4QkPpMIADLXzi6jKra8aPzIugQgpbM14Xg3MECmdeQ/B6MQrxpZOp1TT3IADWOgJPPFGa/p7l/99w15bgfEMLlA4k1TJWezot2wIzXynjtjGtIfg9lcQJaH+CQ/jrp9+7sWe+UWESuTS3Z8OP1kggLo7JBdUu/Ujus3qTUQeLheL8SHGGmCZIF8Y4okc0MGvBXpEDpZUijxhattCLnxEiNIJpYRc6BG3skxeQDme9N3GHmG8nAnNYBDXeKMBoETCruO11DxG7bsyM16pHEvDEJo9DZedTYLruGtPdPrLZtOi0TqlZS30jWwDfpcmXiaLnTNUScX39upCZikQht1MaR5va+idW2jrJnQt0z7hvJijmes7mLQfhO1xBx8O+5kRozTmipoACUt/OouXLmgpAizwJTc8hv9FX4TSZ2B23xz/dHlJSbGcWOLLmvw54ib+uVIs8KcxfYb/YrYt+k7eUJhXrgm1DsSOTejqNL7dZYAcVUmnonVpulF4LucLV7/mZ/RQgLwejBq9anY9VMMz0W+3ITfEa0rdj7/NGldrPkyuTWIwNveeHu6/7NfmXN7jVoZ020Vl3/dKyaK/L8g1ElQOc0cGeWTf9+ZKnv+SO2EjmaeFsPnFzl6Tm52natoWgRcoDDN/srI4/0V6J8dauuV58fVKPveTpWLWQjww9GayZ+OFrrxcsVo1h3NPEs//cjS0279ZQRFB/yRE+usn3FGylCT2p5pL8S3fjyIgfq0OBf/1TMFXgqVi3cwv1otDaErXsxPyPyVJp+d2Sp93dHbLUeR/e8PHJylV8emUwHTWUcEY/0VyqFNQ/WjYRxHlfEziMSkMCDbTGX5lsR8RnpftxhJqjjZ1Tqtn97eKmd1qNRnDEJ7z+xSp6Zx4hwoas82l/ZhfeiB7Hg/YJ2IqUSx2WuodCQS/cZ/scHa5VJ7fPJ7anqZ9SiBBRZso7fHF5i6qaOhERTyoW79r25UlpuAWgmdJVHkxZesXwP1CoNKLwpX7QlromUQdCxechlCLf1JwcVC49c+lBTcouqFx8u4GGc3LrVz/mr4olbryYNY/hrYvcbK422DDFSzIkL4t1rWnB/7TDaueTBR996MnafqYxBPBieHMy9w83INJb3eyEAEYLda+AX8XoZQZYIp6hCl0gk+mDL89ElErshhS6R2AApdInEBkihSyQ2QApdIrEBUugSiQ2QQpdIbIAUukRiA6TQJRIbIIUukdgAKXSJxAZIoUskNkAKXSKxAVLoEokNkEKXSGyAFLpEYgM0byVlZ8ocLU7cMRa1lgqPx1tzdsgpc7T4cacd1GEmMh5vlY0QJcIoKPQyR0uI8oxxXtReZeqAN037qDJHSynuFecDU3videHeaLnwp56PXuZoiaq98cbjrXr1b8sJnohYTrsJjMdbDdUei+Oz0KI+N6UVWjGfI4lF92h0QH8u0t6rzNGSwJ1e0YA3ZBfUMkeLDw+cDQJf1o2/msscLZPdbos48TkZxwHxKbY6wvpZaMkcyyClyy16nl16eW5mcN1LcN/0Riz6EB7wRXdtsWUIatDGOhP0+s1Y9Kj1c9BMno4kDXUCV84CKHO0dOJlnaZGzGzBOCR6NC2OYStaFMocLd4yRwsS2hYdRJ4JGiCHyhwtYbxUkJgb5AU+j8YTNhyaYNaoewm+OboOdvReZY4WNPNuLYLAM2nEE548KtgaoPG0RSvBmz29hgZ7lx5iR1YcB1VErsN5QRPeZjT5SOtuGVTBo3EtLAhuhTy6W+tTRcocLUFsxWlPltELNPlERA4MSdFBgbz9ojw2qxTMuHEaUDhoeYDjAkbHgb2bosUuJJogxGOzUmVcM3avhYFFrtdJqSJQYxd65Igl+rGBd4lqtRJYYccJm1DkqWyRlt1yuHmWZ1YTukPEAMfLALOKXCUs1+yWw8Fq2a24qYXLbcVub7O4yykayI2X0XjrUcIidi0r49ZT/rwHf/k4o9vM6S9sATUJ6hUJBy61FBq7kBQdN16mEnuvmgmdoYBf+Xk8U4U5Betl3EAQFpxCi+OJo6vQxo7xeKsXLzt8Aia7VBpQimY83mqlCaxYtBfYmJSJU8O6+g0o7Tsebw2S/LDhat1xDbuPMxjmoc2t43ylm/H9MonjenSq4CCud1bd7QD+EiH4ILqfcusrN2HWHWg4I6RufhI1ibeg1BvJ7kDDrtHH461+LBgWqNYvWFhEMyMBrePxVietyFNBgsQzNZqwOgVcU4nFliSmA00Q4/HWALbwTQCAhKDPQDTOjB6MYxUfbQAqJGCWRZPSclJXigS0Q2083oqswCYBL9eIG2FIigiexMNY8G0CrsRNUj1ndKGzlrYSp5Xw4OdNpaE9xh6tGizg9bUIKyBsEpLwgQWPBLpRxHMtFIU3tNA59lzTCI63igyJ3Kv1+hdbAd5rlVbdYOC4jJdT7CU4npMTQwudY1DSiI5n0wB6OD69glx4UDRxvozc1mowsCfIK/a8RsDorjtr/pfIE8DpLJ61uV/vTi/YsvME6GQdvAHBYueZhPNWhRpd6KwfnHRtz1Mu217EHnZ+jtm/RPTmH4kYtJzEDSt0XG/OkteOUlhZVqEnihnYwksFnveXG16MC88knrPIzJBCxyJnrTcnyhfjcldWtz1vj3Y9wJF41gEhLbpBwZM4c81DLvfdMJVxWHhe7K6z9mOLUxSq8Ax2oxSfhBibYoiqAJRoQ4ijKtKD9zekoZnQyxwtUKvXzgONO8u6hZNmaaA1zN1vOPYDSDQGWXXchJSlviOrAbPSNtVOyrJT1tSdsOYWvOAJh7VMWO5VNzasgd6sz9UqQo8ypI1YdxQZ6nghjupBuU/d2LA+16zuvhWE3q1HZZqKAd1d1olHVsgZGDyemby1bOlTsws9rmdlmsAdRyKRQrcuwmJBZhe6A59WQuW2cxSMGM1tl0iIsILrXoK7nhomSCaRCELYMtFKUfdGKXaJxRC2vLJaF1hSsbO64DJSLdETKfQ8NBZas3ME74xYUabHVl6JybGi0BEhrRosGLBxA+v1yMCi8WGt9ZgSrdey3fMHWH4PR8Q9nDXvJbgcNp9ljzJaaK+RquPkBhVrwnPKTrYSbcNZdNwtM4Q6qXI2RSzUNok1R2kYYeE+YayzvqxzNzas4yya7ZtG7xkXYjjxJZV8Fp3VdfUZ6Jgjnn3l0nU3NqxNV7I+V8Ov0XHJKatlzyd0nlpiozRuYB0McXmYg3HBy1fWZWvWcW2KYBy27Cx1v45c7jtnzXrR2ybjwcCaBZBuu7HhGV/mFTqGNQCWL6jB2p/LQdI0X2N4ml9IoRsU3CGGNe6Ss1eCmYSuxWEOPM0dg8VKtQk4J65YTS0leUg5YJSVnL9r1Tw6KTwDvqQYaTacduFx7drl+tywdHC2H885nm0tdDzg2zleokHP+no84/MOBrkfwIDgccRzvHJ7vhZnZhK6Vm4y78DXZTMNFnkXRzQW4DWcXJ8bCPRcOY8IV8k7Bs0kdE1SWnjgd3O+jKZix+56l4Bae3l0soFIea68Iu8sNIEbpt1zPvANydmcvgAk61G05t3KeZmN+Dp9IrvE4ihsWMCxzt08Z7ZLxIG9swBrB98sFMwAGV7oAiKRBSvA0GxY5mhpFzCzIosbwQdQhHiCXjiiz7tuS0UemVxk8DP1c/Rsz0YriWExtNBTgk88LitpqWcALw94H0AJnqkDWPBUp7rgQhi/gEknlbYirs09ZQ5RhouIiBGyCnjsenAPAy/+Er3NGcVciCZwQwod3yQ/tkI8wouSPnTcNB+95/Mc75eKKviWMkdLFJ+8mnPSKXO0BAXP9CrxIlvzzTq/33oNC4K26jxp5SNBE7fS8qQW1pvt5Iwsp0Ll8qPTUQW58Jm4CbrTeDUQOdC5S65EP6iO7NbSootaW7KSYFnbj8db/TioZoXzyZryeRES09JEe2S3lQtmwhyWzJtrX6+JaJdRdkvSxPJcrSp0rvPL8QTBc051sUEipz2iSmJ8mEQOLCx0P++6FLu8ZrTsUuTWI8EjcmBRobfSrl9yYUKxt0qRW44oPluQaxlmNaG3k+YVSUGewXi81cO5+UVr0Iy/UfRnlxSdNixy7oCqlYS+SUtrhl97owHX7ahO3yPKi5EYAmTF14/HWwOiUqOmqHUvQByvyTWv/MJ5difeHCI6104LmnACMrJuKZTiJi2eqZmFnsCC46opp0WNyOPdasEi1AsU5XNLNKUbP0/NvDIzCj2KB3pHMQc69iC8GtWmZyOOC4CkwK1BN97H0SFyt2MuzCD0bnzYAhJWlx43hQYs+C7cx82Hv1i31GaSSBkMcg1uXrrxdukIHse6b7z5AITQYvfUGGBLrx4v5cTr6ZxxhDJHSweuhx9TB4QsX5WIQgpdIrEBdu8CK5HYAil0icQGSKFLJDZACl0isToAgP8fYyj02TQWIOoAAAAASUVORK5CYII="></image></defs></svg>`);
      } else if (__props.name === "dark-horizontal-gradient-large") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "134",
          height: "54",
          viewBox: "0 0 134 54",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><g clip-path="url(#clip0_705_481)"><path d="M48.2632 18.7514C48.3847 18.3734 48.2767 17.9684 47.9797 17.6984C47.6827 17.4284 47.2642 17.3609 46.8997 17.5229L39.4207 20.8304C41.2162 16.5374 42.3772 12.0419 43.0657 8.80193C43.9567 4.63043 44.2537 1.67393 44.2672 1.55243C44.2807 1.44443 44.2672 1.32293 44.2402 1.21493C44.3347 0.836933 44.1862 0.418433 43.8487 0.161933C43.4032 -0.162067 42.7687 -0.0540669 42.4582 0.391433L31.4827 15.7544L27.6892 16.4699L24.9082 11.6639C24.7327 11.3534 24.3952 11.1644 24.0442 11.1644C23.6932 11.1644 23.3557 11.3534 23.1802 11.6639L20.4532 16.3889L16.7542 15.6869L5.84621 0.418433C5.52221 -0.0270669 4.90121 -0.135067 4.45571 0.188933C4.11821 0.431933 3.96971 0.850433 4.06421 1.24193C4.03721 1.34993 4.02371 1.45793 4.03721 1.57943C4.05071 1.70093 4.36121 4.67093 5.23871 8.82893C5.92721 12.0689 7.08821 16.5509 8.88371 20.8574L1.40471 17.5499C1.04021 17.3879 0.621709 17.4554 0.324709 17.7254C0.027709 17.9954 -0.0802911 18.4004 0.041209 18.7784C0.068209 18.8729 0.837709 21.1544 2.34971 24.0569C3.45671 26.1764 4.65821 28.0394 5.94071 29.6324L2.78171 28.3634C2.37671 28.2014 1.91771 28.3229 1.63421 28.6604C1.35071 28.9979 1.32371 29.4704 1.56671 29.8349C1.76921 30.1454 6.38621 37.2329 12.9472 40.4189L13.9867 46.6154C13.9867 46.6424 14.0002 46.6829 14.0137 46.7099C14.0137 46.7234 14.0137 46.7234 14.0272 46.7369C14.0272 46.7639 14.0407 46.7774 14.0542 46.8044C14.0542 46.8179 14.0677 46.8314 14.0677 46.8449C14.0677 46.8584 14.0812 46.8719 14.0812 46.8854C14.0947 46.8989 14.0947 46.9124 14.1082 46.9259C14.1217 46.9394 14.1217 46.9529 14.1352 46.9664C14.1352 46.9799 14.1487 46.9799 14.1487 46.9934C14.1622 47.0069 14.1757 47.0339 14.1892 47.0474C14.2432 47.1284 14.3107 47.1959 14.3917 47.2499L19.7782 51.2324C19.7917 51.2459 19.7917 51.2459 19.8052 51.2594C19.8592 51.3134 19.9267 51.3539 19.9942 51.3944L23.2477 53.7974C23.4907 53.9729 23.7742 54.0269 24.0442 53.9729C24.1117 53.9864 24.1792 53.9999 24.2467 53.9999C24.4492 53.9999 24.6652 53.9324 24.8407 53.7974L28.0942 51.3944C28.1617 51.3539 28.2292 51.3134 28.2832 51.2594C28.2967 51.2459 28.2967 51.2459 28.3102 51.2324L33.6967 47.2499C33.6967 47.2499 33.6967 47.2499 33.7102 47.2499L33.7237 47.2364C33.7372 47.2229 33.7642 47.2094 33.7777 47.1959L33.7912 47.1824C33.8047 47.1689 33.8317 47.1554 33.8452 47.1284C33.8587 47.1149 33.8587 47.1149 33.8722 47.1014C33.8857 47.0879 33.8992 47.0744 33.9127 47.0474C33.9262 47.0339 33.9262 47.0204 33.9397 47.0204C33.9532 47.0069 33.9667 46.9934 33.9667 46.9799C33.9802 46.9664 33.9802 46.9529 33.9937 46.9394C34.0072 46.9259 34.0072 46.9124 34.0207 46.8989C34.0342 46.8854 34.0342 46.8719 34.0342 46.8584C34.0342 46.8449 34.0477 46.8314 34.0477 46.8179C34.0477 46.8044 34.0612 46.7909 34.0612 46.7774C34.0612 46.7639 34.0747 46.7369 34.0747 46.7234C34.0747 46.7099 34.0747 46.6964 34.0882 46.6964C34.0882 46.6694 34.1017 46.6559 34.1017 46.6289L35.1142 40.5269C41.7832 37.3949 46.4947 30.1454 46.6972 29.8349C46.9267 29.4704 46.8997 28.9979 46.6297 28.6604C46.3462 28.3229 45.8872 28.2014 45.4822 28.3634L42.3232 29.6324C43.6057 28.0394 44.8072 26.1629 45.9142 24.0569C47.4667 21.1274 48.2227 18.8459 48.2632 18.7514ZM37.0042 32.5484L33.3862 39.2444C33.3322 39.3389 33.2917 39.4469 33.2782 39.5549L32.8192 42.3089L30.4027 35.0999C31.3747 34.7084 33.2377 33.7634 33.8857 31.9814C34.2772 30.9014 34.1557 29.7404 33.5212 28.5389L36.4777 25.3529L37.0042 32.5484ZM27.7702 49.1669L25.4617 46.6019L28.3912 43.3619C28.6612 43.0649 28.7287 42.6464 28.5667 42.2819C28.4047 41.9174 28.0537 41.6879 27.6487 41.6879H20.4937C20.1022 41.6879 19.7377 41.9174 19.5757 42.2819C19.4137 42.6464 19.4812 43.0649 19.7512 43.3619L22.6807 46.6019L20.3722 49.1669L16.1872 46.0754L20.7907 32.8319C20.7907 32.8184 20.7907 32.8184 20.8042 32.8049L24.1792 28.6874L27.5542 32.8049V32.8184C27.5542 32.8184 27.5542 32.8184 27.5542 32.8319L31.9687 46.0754L27.7702 49.1669ZM24.0577 45.1574L22.7347 43.6859H25.3807L24.0577 45.1574ZM14.8507 39.5549C14.8507 39.5414 14.8507 39.5414 14.8507 39.5279C14.8507 39.5009 14.8372 39.4874 14.8372 39.4604C14.8372 39.4469 14.8372 39.4334 14.8237 39.4334C14.8237 39.4199 14.8102 39.3929 14.8102 39.3794C14.8102 39.3659 14.7967 39.3524 14.7967 39.3524C14.7832 39.3389 14.7832 39.3119 14.7697 39.2984C14.7697 39.2849 14.7562 39.2714 14.7562 39.2714C14.7562 39.2714 14.7562 39.2579 14.7427 39.2579L11.1247 32.5619L11.6647 25.1774L14.6887 28.4444C14.0002 29.6999 13.8517 30.8879 14.2567 32.0084C14.9317 33.8714 16.9162 34.8164 17.8477 35.1674L15.3232 42.4304L14.8507 39.5549ZM24.0712 19.1294C24.1927 19.1564 24.3142 19.1564 24.4357 19.1294L32.0632 17.6984L36.0052 22.8824L28.5667 30.9149L24.9082 26.4599C24.7192 26.2304 24.4357 26.0954 24.1387 26.0954C23.8417 26.0954 23.5582 26.2304 23.3692 26.4599L19.7107 30.9149L12.2317 22.8149L16.5652 17.6984L24.0712 19.1294ZM33.5482 16.3349L41.7967 4.79243C41.1487 8.69393 39.7582 15.2549 37.1527 21.0734L33.5482 16.3349ZM32.0092 31.2929C31.6717 32.2109 30.5512 32.8724 29.7817 33.1964L29.6332 32.7374L32.0362 30.1454C32.1307 30.5639 32.1307 30.9554 32.0092 31.2929ZM18.5092 33.2504C17.7667 32.9534 16.4977 32.2784 16.1332 31.2929C15.9982 30.9149 15.9982 30.4694 16.1602 29.9969L18.6847 32.7239L18.5092 33.2504ZM11.1382 21.0194C8.55971 15.2144 7.16921 8.69393 6.52121 4.80593L14.9182 16.5509L11.1382 21.0194ZM24.0577 14.1749L25.6237 16.8749L24.2737 17.1314L22.5592 16.8074L24.0577 14.1749ZM2.82221 20.3444L9.78821 23.4359L9.27521 30.3209C6.08921 27.1754 3.92921 22.9094 2.82221 20.3444ZM5.40071 31.5494L9.15371 33.0614C9.16721 33.1289 9.19421 33.1829 9.23471 33.2504L11.3272 37.1249C8.87021 35.4104 6.81821 33.2504 5.40071 31.5494ZM24.0577 51.9074L21.9652 50.3684L24.0577 48.0599L26.1502 50.3684L24.0577 51.9074ZM42.9172 31.5494C41.4322 33.3179 39.2722 35.5859 36.6937 37.3274L38.8942 33.2504C38.9077 33.2234 38.9212 33.1829 38.9347 33.1559L42.9172 31.5494ZM38.8537 30.4829L38.3407 23.5034L45.4822 20.3309C44.3482 22.9499 42.1342 27.3239 38.8537 30.4829Z" fill="url(#paint0_linear_705_481)"></path><path d="M123.026 21.2085V17.0505H130.923V13.3515H123.026V9.50396H132.908V5.60246H118.814V25.1235H133.11V21.222H123.026V21.2085ZM114.615 10.4085C113.711 8.92346 112.469 7.73546 110.916 6.88496C109.377 6.03446 107.649 5.60246 105.786 5.60246H98.6719V25.1235H105.827C107.676 25.1235 109.391 24.6915 110.93 23.841C112.469 22.9905 113.711 21.8025 114.615 20.331C115.52 18.846 115.965 17.1855 115.965 15.3765C115.979 13.554 115.52 11.8935 114.615 10.4085ZM110.957 18.2925C110.457 19.1565 109.755 19.845 108.891 20.3445C108.014 20.844 107.028 21.087 105.962 21.087H102.897V9.61196H105.921C107.001 9.61196 108 9.86846 108.878 10.3545C109.755 10.854 110.457 11.5425 110.957 12.4065C111.456 13.284 111.713 14.2695 111.713 15.3495C111.713 16.443 111.456 17.4285 110.957 18.2925ZM72.4954 19.791C71.7934 20.3445 71.1049 20.7495 70.4434 20.9925C69.7819 21.249 69.0529 21.3705 68.2699 21.3705C67.2439 21.3705 66.2584 21.1005 65.3809 20.574C64.4899 20.0475 63.7744 19.305 63.2479 18.4005C62.7214 17.4825 62.4514 16.4565 62.4514 15.3495C62.4514 14.2425 62.7214 13.2165 63.2479 12.2985C63.7744 11.3805 64.4899 10.6515 65.3809 10.1115C66.2719 9.58496 67.2439 9.31496 68.2699 9.31496C69.0259 9.31496 69.7684 9.46346 70.4974 9.73346C71.2264 10.017 71.8744 10.3815 72.4414 10.8405L72.6709 11.0295L75.0604 7.82996L74.8579 7.65446C73.9804 6.89846 72.9544 6.30446 71.8339 5.88596C70.7134 5.46746 69.5119 5.25146 68.2564 5.25146C66.4069 5.25146 64.6924 5.69696 63.1534 6.58796C61.6144 7.47896 60.3859 8.70746 59.5084 10.233C58.6174 11.7585 58.1719 13.473 58.1719 15.3225C58.1719 17.1585 58.6174 18.873 59.5084 20.412C60.3994 21.951 61.6279 23.1795 63.1534 24.0705C64.6924 24.9615 66.4069 25.4205 68.2564 25.4205C69.5119 25.4205 70.7134 25.2045 71.8204 24.786C72.9274 24.3675 73.9534 23.76 74.8444 22.9905L75.0334 22.8285L72.6844 19.5885L72.4954 19.791ZM83.2144 10.125C83.7274 9.82796 84.2539 9.59846 84.8209 9.47696V5.33246C83.4709 5.49446 82.1884 5.91296 81.0139 6.60146C79.4749 7.49246 78.2464 8.72096 77.3689 10.2465C76.4779 11.772 76.0324 13.4865 76.0324 15.336C76.0324 17.172 76.4779 18.8865 77.3689 20.4255C78.2599 21.9645 79.4884 23.193 81.0139 24.084C82.1884 24.759 83.4709 25.191 84.8209 25.353V21.222C84.2674 21.1005 83.7274 20.871 83.2144 20.574C82.3234 20.0475 81.6079 19.305 81.0814 18.4005C80.5549 17.4825 80.2849 16.4565 80.2849 15.3495C80.2849 14.2425 80.5549 13.2165 81.0814 12.2985C81.6079 11.394 82.3234 10.6515 83.2144 10.125ZM94.8649 10.2465C93.9739 8.72096 92.7454 7.49246 91.2199 6.60146C90.0319 5.91296 88.7359 5.48096 87.3589 5.33246V9.46346C87.9394 9.58496 88.4929 9.81446 89.0194 10.125C89.9104 10.6515 90.6259 11.3805 91.1524 12.2985C91.6789 13.2165 91.9489 14.2425 91.9489 15.363C91.9489 16.47 91.6789 17.496 91.1524 18.414C90.6259 19.332 89.9104 20.061 89.0194 20.5875C88.4929 20.898 87.9394 21.1275 87.3454 21.249V25.38C88.7224 25.2315 90.0184 24.7995 91.2199 24.0975C92.7589 23.2065 93.9874 21.978 94.8649 20.439C95.7559 18.9 96.2013 17.1855 96.2013 15.3495C96.2013 13.4865 95.7559 11.772 94.8649 10.2465Z" fill="url(#paint1_linear_705_481)"></path><path d="M73.8593 43.0245C73.5623 42.3495 73.1438 41.7555 72.6308 41.2695C72.2663 40.932 71.8748 40.662 71.4563 40.473C71.7128 40.311 71.9558 40.095 72.1718 39.852C72.5498 39.447 72.8468 38.961 73.0628 38.4075C73.2788 37.854 73.3868 37.287 73.3868 36.72C73.3868 35.6535 73.1303 34.7085 72.6173 33.8985C72.1043 33.0885 71.3753 32.4675 70.4438 32.022C69.5258 31.59 68.4323 31.374 67.2038 31.374H59.2793V50.895H67.9868C69.1343 50.895 70.2008 50.679 71.1593 50.2335C72.1178 49.788 72.9008 49.1265 73.4543 48.2625C74.0213 47.3985 74.3048 46.359 74.3048 45.171C74.3048 44.4285 74.1563 43.6995 73.8593 43.0245ZM63.4778 35.046H67.0148C67.4468 35.046 67.8383 35.1405 68.1758 35.316C68.4998 35.4915 68.7563 35.721 68.9318 36.0315C69.1073 36.3285 69.2018 36.6795 69.2018 37.044C69.2018 37.422 69.1073 37.7595 68.9183 38.0835C68.7293 38.394 68.4593 38.6505 68.1083 38.826C67.7708 39.015 67.3658 39.1095 66.9473 39.1095H63.4913V35.046H63.4778ZM69.7823 46.1025C69.5798 46.467 69.3098 46.7505 68.9453 46.953C68.5808 47.1555 68.1758 47.2635 67.7168 47.2635H63.4778V42.444H67.5008C68.0138 42.444 68.4728 42.552 68.8643 42.768C69.2558 42.984 69.5528 43.281 69.7688 43.6455C69.9848 44.01 70.0928 44.4015 70.0928 44.82C70.0928 45.306 69.9848 45.738 69.7823 46.1025Z" fill="#1A1E7E"></path><path d="M96.2017 41.121C96.2017 42.957 95.7562 44.6715 94.8652 46.2105C93.9742 47.7495 92.7457 48.978 91.2202 49.869C90.0322 50.5575 88.7362 50.9895 87.3457 51.1515V47.0205C87.9262 46.899 88.4932 46.6695 89.0197 46.359C89.9107 45.8325 90.6262 45.09 91.1527 44.1855C91.6792 43.2675 91.9492 42.2415 91.9492 41.1345C91.9492 40.014 91.6792 38.988 91.1527 38.07C90.6262 37.152 89.9107 36.423 89.0197 35.8965C88.4932 35.586 87.9397 35.37 87.3592 35.235V31.104C88.7362 31.2525 90.0322 31.6845 91.2202 32.373C92.7592 33.264 93.9877 34.4925 94.8652 36.018C95.7562 37.557 96.2017 39.2715 96.2017 41.121Z" fill="#1A1E7E"></path><path d="M81.0822 38.0834C80.5557 39.0014 80.2857 40.0274 80.2857 41.1344C80.2857 42.2414 80.5557 43.2674 81.0822 44.1854C81.6087 45.1034 82.3242 45.8324 83.2152 46.3589C83.7282 46.6559 84.2547 46.8854 84.8217 47.0069V51.1379C83.4717 50.9759 82.1892 50.5574 81.0147 49.8689C79.4757 48.9779 78.2472 47.7494 77.3697 46.2104C76.4787 44.6714 76.0332 42.9569 76.0332 41.1209C76.0332 39.2714 76.4787 37.5569 77.3697 36.0314C78.2607 34.5059 79.4892 33.2774 81.0147 32.3864C82.1892 31.7114 83.4582 31.2794 84.8217 31.1174V35.2484C84.2682 35.3834 83.7282 35.5994 83.2152 35.8964C82.3242 36.4364 81.6087 37.1789 81.0822 38.0834Z" fill="#1A1E7E"></path><path d="M104.126 31.3875H99.9141V50.8949H112.901V46.8449H104.126V31.3875Z" fill="#1A1E7E"></path><path d="M131.842 36.18C130.937 34.695 129.695 33.507 128.143 32.6565C126.604 31.806 124.876 31.374 123.013 31.374H115.885V50.895H123.053C124.903 50.895 126.617 50.463 128.156 49.6125C129.695 48.762 130.937 47.574 131.842 46.1025C132.746 44.6175 133.192 42.957 133.192 41.148C133.192 39.339 132.746 37.665 131.842 36.18ZM128.183 44.0775C127.684 44.9415 126.982 45.63 126.118 46.1295C125.24 46.629 124.255 46.872 123.188 46.872H120.124V35.397H123.148C124.228 35.397 125.227 35.6535 126.104 36.1395C126.982 36.639 127.684 37.3275 128.183 38.1915C128.683 39.069 128.939 40.0545 128.939 41.1345C128.939 42.228 128.683 43.2135 128.183 44.0775Z" fill="#1A1E7E"></path></g><defs><linearGradient id="paint0_linear_705_481" x1="0.000708952" y1="26.9999" x2="48.3087" y2="26.9999" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.1454" stop-color="#7327DA"></stop><stop offset="0.3872" stop-color="#591ED4"></stop><stop offset="0.6937" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient><linearGradient id="paint1_linear_705_481" x1="58.1854" y1="15.3516" x2="133.108" y2="15.3516" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.1454" stop-color="#7327DA"></stop><stop offset="0.3872" stop-color="#591ED4"></stop><stop offset="0.6937" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient><clipPath id="clip0_705_481"><rect width="133.204" height="54" fill="white"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "dark-horizontal-gradient-small") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          width: "79",
          height: "32",
          viewBox: "0 0 79 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><g clip-path="url(#clip0_718_4286)"><path d="M28.6012 11.112C28.6732 10.888 28.6092 10.648 28.4332 10.488C28.2572 10.328 28.0092 10.288 27.7932 10.384L23.3612 12.344C24.4252 9.80001 25.1132 7.13601 25.5212 5.21601C26.0492 2.74401 26.2252 0.992015 26.2332 0.920015C26.2412 0.856015 26.2332 0.784015 26.2172 0.720015C26.2732 0.496015 26.1852 0.248015 25.9852 0.0960146C25.7212 -0.0959854 25.3452 -0.0319854 25.1612 0.232015L18.6572 9.33601L16.4091 9.76001L14.7611 6.91201C14.6571 6.72801 14.4571 6.61601 14.2491 6.61601C14.0411 6.61601 13.8411 6.72801 13.7371 6.91201L12.1211 9.71201L9.92915 9.29601L3.46514 0.248015C3.27314 -0.0159854 2.90514 -0.0799854 2.64114 0.112015C2.44114 0.256015 2.35314 0.504015 2.40914 0.736015C2.39314 0.800015 2.38514 0.864015 2.39314 0.936015C2.40114 1.00801 2.58514 2.76801 3.10514 5.23201C3.51314 7.15201 4.20115 9.80801 5.26515 12.36L0.833144 10.4C0.617144 10.304 0.369144 10.344 0.193144 10.504C0.0171435 10.664 -0.0468565 10.904 0.0251435 11.128C0.0411435 11.184 0.497144 12.536 1.39314 14.256C2.04914 15.512 2.76114 16.616 3.52114 17.56L1.64914 16.808C1.40914 16.712 1.13714 16.784 0.969144 16.984C0.801144 17.184 0.785144 17.464 0.929144 17.68C1.04914 17.864 3.78515 22.064 7.67315 23.952L8.28915 27.624C8.28915 27.64 8.29715 27.664 8.30515 27.68C8.30515 27.688 8.30515 27.688 8.31315 27.696C8.31315 27.712 8.32115 27.72 8.32915 27.736C8.32915 27.744 8.33715 27.752 8.33715 27.76C8.33715 27.768 8.34515 27.776 8.34515 27.784C8.35315 27.792 8.35315 27.8 8.36115 27.808C8.36915 27.816 8.36915 27.824 8.37715 27.832C8.37715 27.84 8.38515 27.84 8.38515 27.848C8.39315 27.856 8.40115 27.872 8.40915 27.88C8.44115 27.928 8.48115 27.968 8.52915 28L11.7211 30.36C11.7291 30.368 11.7291 30.368 11.7371 30.376C11.7691 30.408 11.8091 30.432 11.8491 30.456L13.7771 31.88C13.9211 31.984 14.0891 32.016 14.2491 31.984C14.2891 31.992 14.3291 32 14.3691 32C14.4891 32 14.6171 31.96 14.7211 31.88L16.6492 30.456C16.6891 30.432 16.7291 30.408 16.7612 30.376C16.7691 30.368 16.7691 30.368 16.7771 30.36L19.9692 28C19.9692 28 19.9692 28 19.9771 28L19.9852 27.992C19.9932 27.984 20.0092 27.976 20.0172 27.968L20.0252 27.96C20.0332 27.952 20.0492 27.944 20.0571 27.928C20.0652 27.92 20.0652 27.92 20.0732 27.912C20.0812 27.904 20.0892 27.896 20.0972 27.88C20.1052 27.872 20.1052 27.864 20.1131 27.864C20.1212 27.856 20.1292 27.848 20.1292 27.84C20.1372 27.832 20.1372 27.824 20.1452 27.816C20.1532 27.808 20.1532 27.8 20.1611 27.792C20.1692 27.784 20.1692 27.776 20.1692 27.768C20.1692 27.76 20.1772 27.752 20.1772 27.744C20.1772 27.736 20.1852 27.728 20.1852 27.72C20.1852 27.712 20.1931 27.696 20.1931 27.688C20.1931 27.68 20.1932 27.672 20.2012 27.672C20.2012 27.656 20.2092 27.648 20.2092 27.632L20.8092 24.016C24.7612 22.16 27.5532 17.864 27.6732 17.68C27.8092 17.464 27.7932 17.184 27.6332 16.984C27.4652 16.784 27.1932 16.712 26.9532 16.808L25.0812 17.56C25.8412 16.616 26.5532 15.504 27.2092 14.256C28.1292 12.52 28.5772 11.168 28.6012 11.112ZM21.9292 19.288L19.7852 23.256C19.7532 23.312 19.7292 23.376 19.7212 23.44L19.4492 25.072L18.0171 20.8C18.5931 20.568 19.6972 20.008 20.0812 18.952C20.3132 18.312 20.2412 17.624 19.8652 16.912L21.6172 15.024L21.9292 19.288ZM16.4571 29.136L15.0891 27.616L16.8251 25.696C16.9851 25.52 17.0252 25.272 16.9291 25.056C16.8332 24.84 16.6252 24.704 16.3851 24.704H12.1451C11.9131 24.704 11.6971 24.84 11.6011 25.056C11.5051 25.272 11.5451 25.52 11.7051 25.696L13.4411 27.616L12.0731 29.136L9.59315 27.304L12.3211 19.456C12.3211 19.448 12.3211 19.448 12.3291 19.44L14.3291 17L16.3291 19.44V19.448C16.3291 19.448 16.3291 19.448 16.3291 19.456L18.9452 27.304L16.4571 29.136ZM14.2571 26.76L13.4731 25.888H15.0411L14.2571 26.76ZM8.80115 23.44C8.80115 23.432 8.80115 23.432 8.80115 23.424C8.80115 23.408 8.79315 23.4 8.79315 23.384C8.79315 23.376 8.79315 23.368 8.78515 23.368C8.78515 23.36 8.77715 23.344 8.77715 23.336C8.77715 23.328 8.76915 23.32 8.76915 23.32C8.76115 23.312 8.76115 23.296 8.75315 23.288C8.75315 23.28 8.74515 23.272 8.74515 23.272C8.74515 23.272 8.74515 23.264 8.73715 23.264L6.59315 19.296L6.91315 14.92L8.70515 16.856C8.29715 17.6 8.20915 18.304 8.44915 18.968C8.84915 20.072 10.0251 20.632 10.5771 20.84L9.08115 25.144L8.80115 23.44ZM14.2651 11.336C14.3371 11.352 14.4091 11.352 14.4811 11.336L19.0012 10.488L21.3372 13.56L16.9291 18.32L14.7611 15.68C14.6491 15.544 14.4811 15.464 14.3051 15.464C14.1291 15.464 13.9611 15.544 13.8491 15.68L11.6811 18.32L7.24915 13.52L9.81715 10.488L14.2651 11.336ZM19.8812 9.68001L24.7692 2.84001C24.3852 5.15201 23.5612 9.04002 22.0172 12.488L19.8812 9.68001ZM18.9692 18.544C18.7692 19.088 18.1052 19.48 17.6492 19.672L17.5611 19.4L18.9852 17.864C19.0412 18.112 19.0412 18.344 18.9692 18.544ZM10.9691 19.704C10.5291 19.528 9.77715 19.128 9.56115 18.544C9.48115 18.32 9.48115 18.056 9.57715 17.776L11.0731 19.392L10.9691 19.704ZM6.60115 12.456C5.07315 9.01601 4.24915 5.15201 3.86514 2.84801L8.84115 9.80801L6.60115 12.456ZM14.2571 8.40001L15.1851 10L14.3851 10.152L13.3691 9.96001L14.2571 8.40001ZM1.67314 12.056L5.80115 13.888L5.49715 17.968C3.60914 16.104 2.32914 13.576 1.67314 12.056ZM3.20114 18.696L5.42515 19.592C5.43315 19.632 5.44915 19.664 5.47315 19.704L6.71315 22C5.25715 20.984 4.04114 19.704 3.20114 18.696ZM14.2571 30.76L13.0171 29.848L14.2571 28.48L15.4971 29.848L14.2571 30.76ZM25.4332 18.696C24.5532 19.744 23.2731 21.088 21.7451 22.12L23.0492 19.704C23.0572 19.688 23.0651 19.664 23.0732 19.648L25.4332 18.696ZM23.0252 18.064L22.7212 13.928L26.9532 12.048C26.2812 13.6 24.9692 16.192 23.0252 18.064Z" fill="url(#paint0_linear_718_4286)"></path><path d="M72.9046 12.5681V10.1041H77.5846V7.91206H72.9046V5.63206H78.7606V3.32006H70.4086V14.8881H78.8806V12.5761H72.9046V12.5681ZM67.9206 6.16806C67.3846 5.28806 66.6486 4.58406 65.7286 4.08006C64.8166 3.57606 63.7926 3.32006 62.6886 3.32006H58.4726V14.8881H62.7126C63.8086 14.8881 64.8246 14.6321 65.7366 14.1281C66.6486 13.6241 67.3846 12.9201 67.9206 12.0481C68.4566 11.1681 68.7206 10.1841 68.7206 9.11206C68.7286 8.03206 68.4566 7.04806 67.9206 6.16806ZM65.7526 10.8401C65.4566 11.3521 65.0406 11.7601 64.5286 12.0561C64.0086 12.3521 63.4246 12.4961 62.7926 12.4961H60.9766V5.69606H62.7686C63.4086 5.69606 64.0006 5.84806 64.5206 6.13606C65.0406 6.43206 65.4566 6.84006 65.7526 7.35206C66.0486 7.87206 66.2006 8.45606 66.2006 9.09606C66.2006 9.74406 66.0486 10.3281 65.7526 10.8401ZM42.9607 11.7281C42.5447 12.0561 42.1367 12.2961 41.7447 12.4401C41.3527 12.5921 40.9207 12.6641 40.4567 12.6641C39.8487 12.6641 39.2647 12.5041 38.7447 12.1921C38.2167 11.8801 37.7927 11.4401 37.4807 10.9041C37.1687 10.3601 37.0087 9.75206 37.0087 9.09606C37.0087 8.44006 37.1687 7.83206 37.4807 7.28806C37.7927 6.74406 38.2167 6.31206 38.7447 5.99206C39.2727 5.68006 39.8487 5.52006 40.4567 5.52006C40.9047 5.52006 41.3447 5.60806 41.7767 5.76806C42.2087 5.93606 42.5926 6.15206 42.9286 6.42406L43.0646 6.53606L44.4806 4.64006L44.3607 4.53606C43.8407 4.08806 43.2326 3.73606 42.5686 3.48806C41.9046 3.24006 41.1927 3.11206 40.4487 3.11206C39.3527 3.11206 38.3367 3.37606 37.4247 3.90406C36.5127 4.43206 35.7847 5.16006 35.2647 6.06406C34.7367 6.96806 34.4727 7.98406 34.4727 9.08006C34.4727 10.1681 34.7367 11.1841 35.2647 12.0961C35.7927 13.0081 36.5207 13.7361 37.4247 14.2641C38.3367 14.7921 39.3527 15.0641 40.4487 15.0641C41.1927 15.0641 41.9047 14.9361 42.5607 14.6881C43.2167 14.4401 43.8247 14.0801 44.3527 13.6241L44.4646 13.5281L43.0727 11.6081L42.9607 11.7281ZM49.3126 6.00006C49.6166 5.82406 49.9286 5.68806 50.2646 5.61606V3.16006C49.4646 3.25606 48.7046 3.50406 48.0086 3.91206C47.0966 4.44006 46.3686 5.16806 45.8486 6.07206C45.3206 6.97606 45.0567 7.99206 45.0567 9.08806C45.0567 10.1761 45.3206 11.1921 45.8486 12.1041C46.3766 13.0161 47.1046 13.7441 48.0086 14.2721C48.7046 14.6721 49.4646 14.9281 50.2646 15.0241V12.5761C49.9366 12.5041 49.6166 12.3681 49.3126 12.1921C48.7846 11.8801 48.3606 11.4401 48.0486 10.9041C47.7366 10.3601 47.5766 9.75206 47.5766 9.09606C47.5766 8.44006 47.7366 7.83206 48.0486 7.28806C48.3606 6.75206 48.7846 6.31206 49.3126 6.00006ZM56.2166 6.07206C55.6886 5.16806 54.9606 4.44006 54.0566 3.91206C53.3526 3.50406 52.5846 3.24806 51.7686 3.16006V5.60806C52.1126 5.68006 52.4406 5.81606 52.7526 6.00006C53.2806 6.31206 53.7046 6.74406 54.0166 7.28806C54.3286 7.83206 54.4886 8.44006 54.4886 9.10406C54.4886 9.76006 54.3286 10.3681 54.0166 10.9121C53.7046 11.4561 53.2806 11.8881 52.7526 12.2001C52.4406 12.3841 52.1126 12.5201 51.7606 12.5921V15.0401C52.5766 14.9521 53.3446 14.6961 54.0566 14.2801C54.9686 13.7521 55.6966 13.0241 56.2166 12.1121C56.7446 11.2001 57.0086 10.1841 57.0086 9.09606C57.0086 7.99206 56.7446 6.97606 56.2166 6.07206Z" fill="url(#paint1_linear_718_4286)"></path><path d="M43.7689 25.496C43.5929 25.096 43.3449 24.744 43.0409 24.456C42.8249 24.256 42.5929 24.096 42.3449 23.984C42.4969 23.888 42.6409 23.76 42.7689 23.616C42.9929 23.376 43.1689 23.088 43.2969 22.76C43.4249 22.432 43.4889 22.096 43.4889 21.76C43.4889 21.128 43.3369 20.568 43.0329 20.088C42.7289 19.608 42.2969 19.24 41.7449 18.976C41.2009 18.72 40.5529 18.592 39.8249 18.592H35.1289V30.16H40.2889C40.9689 30.16 41.6009 30.032 42.1689 29.768C42.7369 29.504 43.2009 29.112 43.5289 28.6C43.8649 28.088 44.0329 27.472 44.0329 26.768C44.0329 26.328 43.9449 25.896 43.7689 25.496ZM37.6169 20.768H39.7129C39.9689 20.768 40.2009 20.824 40.4009 20.928C40.5929 21.032 40.7449 21.168 40.8489 21.352C40.9529 21.528 41.0089 21.736 41.0089 21.952C41.0089 22.176 40.9529 22.376 40.8409 22.568C40.7289 22.752 40.5689 22.904 40.3609 23.008C40.1609 23.12 39.9209 23.176 39.6729 23.176H37.6249V20.768H37.6169ZM41.3529 27.32C41.2329 27.536 41.0729 27.704 40.8569 27.824C40.6409 27.944 40.4009 28.008 40.1289 28.008H37.6169V25.152H40.0009C40.3049 25.152 40.5769 25.216 40.8089 25.344C41.0409 25.472 41.2169 25.648 41.3449 25.864C41.4729 26.08 41.5369 26.312 41.5369 26.56C41.5369 26.848 41.4729 27.104 41.3529 27.32Z" fill="#1A1E7E"></path><path d="M57.0097 24.3681C57.0097 25.4561 56.7457 26.4721 56.2177 27.3841C55.6897 28.2961 54.9617 29.0241 54.0577 29.5521C53.3537 29.9601 52.5857 30.2161 51.7617 30.3121V27.8641C52.1057 27.7921 52.4417 27.6561 52.7537 27.4721C53.2817 27.1601 53.7057 26.7201 54.0177 26.1841C54.3297 25.6401 54.4897 25.0321 54.4897 24.3761C54.4897 23.7121 54.3297 23.1041 54.0177 22.5601C53.7057 22.0161 53.2817 21.5841 52.7537 21.2721C52.4417 21.0881 52.1137 20.9601 51.7697 20.8801V18.4321C52.5857 18.5201 53.3537 18.7761 54.0577 19.1841C54.9697 19.7121 55.6977 20.4401 56.2177 21.3441C56.7457 22.2561 57.0097 23.2721 57.0097 24.3681Z" fill="#1A1E7E"></path><path d="M48.0486 22.5682C47.7366 23.1122 47.5766 23.7202 47.5766 24.3762C47.5766 25.0322 47.7366 25.6402 48.0486 26.1842C48.3606 26.7282 48.7846 27.1602 49.3126 27.4722C49.6166 27.6482 49.9286 27.7842 50.2646 27.8562V30.3042C49.4646 30.2082 48.7046 29.9602 48.0086 29.5522C47.0966 29.0242 46.3686 28.2962 45.8486 27.3842C45.3206 26.4722 45.0566 25.4562 45.0566 24.3682C45.0566 23.2722 45.3206 22.2562 45.8486 21.3522C46.3766 20.4482 47.1046 19.7202 48.0086 19.1922C48.7046 18.7922 49.4566 18.5362 50.2646 18.4402V20.8882C49.9366 20.9682 49.6166 21.0962 49.3126 21.2722C48.7846 21.5922 48.3606 22.0322 48.0486 22.5682Z" fill="#1A1E7E"></path><path d="M61.705 18.6001H59.209V30.1601H66.9049V27.7601H61.705V18.6001Z" fill="#1A1E7E"></path><path d="M78.1298 21.44C77.5938 20.56 76.8578 19.856 75.9378 19.352C75.0258 18.848 74.0018 18.592 72.8978 18.592H68.6738V30.16H72.9218C74.0178 30.16 75.0338 29.904 75.9458 29.4C76.8578 28.896 77.5938 28.192 78.1298 27.32C78.6658 26.44 78.9298 25.456 78.9298 24.384C78.9298 23.312 78.6658 22.32 78.1298 21.44ZM75.9618 26.12C75.6658 26.632 75.2498 27.04 74.7378 27.336C74.2178 27.632 73.6338 27.776 73.0018 27.776H71.1858V20.976H72.9778C73.6178 20.976 74.2098 21.128 74.7298 21.416C75.2498 21.712 75.6658 22.12 75.9618 22.632C76.2578 23.152 76.4098 23.736 76.4098 24.376C76.4098 25.024 76.2578 25.608 75.9618 26.12Z" fill="#1A1E7E"></path></g><defs><linearGradient id="paint0_linear_718_4286" x1="0.0011435" y1="16" x2="28.6281" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.1454" stop-color="#7327DA"></stop><stop offset="0.3872" stop-color="#591ED4"></stop><stop offset="0.6937" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient><linearGradient id="paint1_linear_718_4286" x1="34.4807" y1="9.09731" x2="78.8794" y2="9.09731" gradientUnits="userSpaceOnUse"><stop stop-color="#7C2ADC"></stop><stop offset="0.1454" stop-color="#7327DA"></stop><stop offset="0.3872" stop-color="#591ED4"></stop><stop offset="0.6937" stop-color="#3011CA"></stop><stop offset="1" stop-color="#0001BF"></stop></linearGradient><clipPath id="clip0_718_4286"><rect width="78.936" height="32" fill="white"></rect></clipPath></defs></svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/svg/Logo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    let currentPath = ref();
    let activeCss = computed(() => {
      if (currentPath.value === props.href) {
        return true;
      } else {
        return false;
      }
    });
    onMounted(() => {
      currentPath.value = window.location.pathname;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: {
          "text-brand-primary-blue": __props.variant === "primary",
          "text-white": __props.variant === "white",
          "underline-offset-8 underline decoration-2 decoration-brand-secondary-pink": unref(activeCss)
        },
        href: __props.href,
        variant: __props.variant
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Link.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-brand-secondary-gray md:text-sm lg:text-base" }, _attrs))}><div class="max-w-5xl mx-auto py-8"><div class="md:flex items-center border-t-2 pt-8 px-2">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "w-28 h-full md:block hidden",
        name: "vertical-gradient"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "w-32 h-full md:hidden",
        name: "horizontal-gradient"
      }, null, _parent));
      _push(`<div class="md:flex w-full justify-end md:space-x-10 pr-12 pt-8 md:pt-0"><div><h3 class="uppercase text-gray-500 font-semibold"> Site Map </h3><ul class="py-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Work`);
          } else {
            return [
              createTextVNode("Our Work")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div><div><h3 class="uppercase text-gray-500 font-semibold"> Services </h3><ul class="py-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comic art &amp; Illustration`);
          } else {
            return [
              createTextVNode("Comic art & Illustration")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Board Game art`);
          } else {
            return [
              createTextVNode("Board Game art")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Book cover &amp; Illustration`);
          } else {
            return [
              createTextVNode("Book cover & Illustration")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Concept art`);
          } else {
            return [
              createTextVNode("Concept art")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div></div><div class="border-l-2 py-5 px-8 md:block hidden"><h3 class="uppercase text-gray-500 font-semibold"> Careers </h3><p class="w-56 pt-2 text-gray-400"> Do your best working among a caring community of diverse talents. </p>`);
      _push(ssrRenderComponent(_sfc_main$5, { class: "underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold uppercase w-24 pb-1 flex items-center text-brand-primary-light-blue mt-7" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Join Us <span class="mr-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 ml-1"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg></span>`);
          } else {
            return [
              createTextVNode(" Join Us "),
              createVNode2("span", { class: "mr-3" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2",
                  stroke: "currentColor",
                  class: "w-3.5 h-3.5 ml-1"
                }, [
                  createVNode2("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="md:text-center text-gray-400 pt-12 text-sm px-2 w-52 md:w-full text-left"> Copyright \xA9 2022 CodeBold. All Rights Reserved. </p></div></footer>`);
    };
  }
});
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var SITE_TITLE = "CodeBold";
var SITE_DESCRIPTION = "We are a small company with big dreams and ambitions and an even bigger passion for creativity.";
var $$Astro$4 = createAstro();
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en">
    <head>
        ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${SITE_TITLE} | ${pageTitle}`, "description": SITE_DESCRIPTION })}
    ${renderHead($$result)}</head>
    <body>
        <main>
            ${renderSlot($$result, $$slots["default"])}
        </main>

        ${renderComponent($$result, "Footer", _sfc_main$4, {})}
    </body></html>`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/layouts/Layout.astro");
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "blue"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["w-full px-3 lg:px-0", {
          "bg-gradient-to-r from-brand-primary-blue via-brand-primary-blue to-brand-primary-blue-lighter": __props.variant === "blue",
          "bg-white": __props.variant === "white"
        }]
      }, _attrs))}><div class="max-w-5xl mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ButtonLink",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    },
    variant: {
      type: String,
      default: "primary-gradient"
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        href: __props.href,
        type: __props.type,
        class: ["inline-flex items-center justify-center rounded py-2 text-sm text-white", {
          "bg-gradient-to-r from-brand-secondary-pink to-brand-secondary-yellow uppercase py-2 px-6 text-sm rounded-sm": __props.variant === "primary-gradient",
          " bg-transparent ": __props.variant === "transparent"
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ButtonLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    let showingNavigationDropdown = ref(false);
    let sideNavDropdown = ref(false);
    let currentPath = ref();
    let hide = computed$1(() => {
      if (currentPath.value === "/work") {
        return true;
      }
    });
    onMounted(() => {
      currentPath.value = window.location.pathname;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "py-3 lg:px-3 xl:px-0 flex justify-between items-center border-b border-gray-200 border-opacity-30" }, _attrs))}>`);
      if (unref(hide)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$6, {
          name: "dark-horizontal-gradient-large",
          class: "md:block hidden"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$6, {
          name: "dark-horizontal-gradient-small",
          class: "md:hidden block"
        }, null, _parent));
        _push(`<div class="space-x-8 hidden md:block">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "primary",
          href: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "primary",
          href: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About Us`);
            } else {
              return [
                createTextVNode("About Us")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "primary",
          href: "/work"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Our Work`);
            } else {
              return [
                createTextVNode("Our Work")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "primary",
          href: "/careers"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Careers`);
            } else {
              return [
                createTextVNode("Careers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { class: "w-48 font-medium text-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex items-center"${_scopeId}> Get in Touch <span${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-3.5 h-3.5 ml-1"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg></span></span>`);
            } else {
              return [
                createVNode2("span", { class: "flex items-center" }, [
                  createTextVNode(" Get in Touch "),
                  createVNode2("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2.0",
                      stroke: "currentColor",
                      class: "w-3.5 h-3.5 ml-1"
                    }, [
                      createVNode2("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(hide)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$6, {
          name: "white-large",
          class: "md:block hidden"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$6, {
          name: "white-small",
          class: "md:hidden block"
        }, null, _parent));
        _push(`<div class="space-x-8 hidden md:block">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "white",
          href: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "white",
          href: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About Us`);
            } else {
              return [
                createTextVNode("About Us")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "white",
          href: "/work"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Our Work`);
            } else {
              return [
                createTextVNode("Our Work")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          variant: "white",
          href: "/careers"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Careers`);
            } else {
              return [
                createTextVNode("Careers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { class: "w-48 font-medium text-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex items-center"${_scopeId}> Get in Touch <span${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-3.5 h-3.5 ml-1"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg></span></span>`);
            } else {
              return [
                createVNode2("span", { class: "flex items-center" }, [
                  createTextVNode(" Get in Touch "),
                  createVNode2("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2.0",
                      stroke: "currentColor",
                      class: "w-3.5 h-3.5 ml-1"
                    }, [
                      createVNode2("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="md:hidden block mt-2"><button><svg class="${ssrRenderClass([{
        hidden: unref(showingNavigationDropdown) == true,
        "text-brand-primary-blue": unref(hide)
      }, "w-10 h-15 fill-current text-white"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg><svg class="${ssrRenderClass([{ hidden: unref(showingNavigationDropdown) == false }, "w-10 h-10 fill-current text-white"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>`);
      if (unref(showingNavigationDropdown)) {
        _push(`<div class="bg-brand-primary-blue fixed h-screen w-full right-0 top-0"><div class="py-5 px-3 flex justify-between items-center border-b border-gray-200 border-opacity-30">`);
        _push(ssrRenderComponent(_sfc_main$6, {
          name: "white-small",
          class: "md:hidden block"
        }, null, _parent));
        _push(`<button><svg class="${ssrRenderClass([{ hidden: !unref(showingNavigationDropdown) }, "w-10 h-10 fill-current text-white"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="text-white"><div class="border-b-2 pt-12 border-gray-200 border-opacity-10 pb-5 px-3"><button class="w-full text-left text-2xl"> About Us </button></div><button class="${ssrRenderClass([{
          "bg-brand-primary-light-blue": unref(sideNavDropdown)
        }, "border-b-2 py-5 border-gray-200 border-opacity-10 pb-5 w-full"])}"><div class="flex justify-between items-center"><span class="text-2xl text-white px-3"> Our Work </span><span class="${ssrRenderClass([{
          "transform rotate-180": unref(sideNavDropdown)
        }, "px-5"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></div>`);
        if (unref(sideNavDropdown)) {
          _push(`<div class="bg-brand-primary-light-blue"><ul class="text-left px-3 pt-5 flex flex-col space-y-3">`);
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Comic Art`);
              } else {
                return [
                  createTextVNode("Comic Art")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Board Game Art`);
              } else {
                return [
                  createTextVNode("Board Game Art")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Book Illustration`);
              } else {
                return [
                  createTextVNode("Book Illustration")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Concept Art`);
              } else {
                return [
                  createTextVNode("Concept Art")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Character Design`);
              } else {
                return [
                  createTextVNode("Character Design")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Enviroment Art`);
              } else {
                return [
                  createTextVNode("Enviroment Art")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$5, { variant: "white" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Game Assets`);
              } else {
                return [
                  createTextVNode("Game Assets")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><div class="py-5 pb-5 px-3"><button class="w-full text-left text-2xl"> Careers </button></div><div class="justify-center flex px-3">`);
        _push(ssrRenderComponent(_sfc_main$2, { class: "w-full py-3 font-medium text-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex items-center"${_scopeId}> Get in Touch <span${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-3.5 h-3.5 ml-1"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg></span></span>`);
            } else {
              return [
                createVNode2("span", { class: "flex items-center" }, [
                  createTextVNode(" Get in Touch "),
                  createVNode2("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2.0",
                      stroke: "currentColor",
                      class: "w-3.5 h-3.5 ml-1"
                    }, [
                      createVNode2("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
});
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vectors",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.name === "angel-slime") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "211",
          height: "711",
          viewBox: "0 0 211 711",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.20053 95.8V663.9C2.10053 669.3 4.30049 674.8 8.60049 679.3C17.1005 688.3 27.9005 694.2 39.8005 698.2C66.8005 707.1 94.5005 710 123.001 707.6C139.501 706.2 155.401 703.4 170.901 697.9C182.501 693.9 193.301 688.2 201.401 679C205.501 674.4 208.001 669.4 207.801 663.9V95.8" fill="url(#paint0_linear_1357_559)"></path><path d="M2.20053 95.8V663.9C2.10053 669.3 4.30049 674.8 8.60049 679.3C17.1005 688.3 27.9005 694.2 39.8005 698.2C66.8005 707.1 94.5005 710 123.001 707.6C139.501 706.2 155.401 703.4 170.901 697.9C182.501 693.9 193.301 688.2 201.401 679C205.501 674.4 208.001 669.4 207.801 663.9V95.8" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M102.501 55C132.401 55.7 159.001 59.1 183.301 71.3C193.101 76.2 202.001 82.3 206.401 92.7C210.001 101 207.301 108.3 201.501 114.7C193.301 123.9 182.601 129.6 171.001 133.6C155.501 139.1 139.501 141.8 123.101 143.3C94.6009 145.7 66.9009 142.9 39.9009 133.9C27.9009 129.9 17.2009 124 8.7009 115C0.300902 106.1 0.20089 93.7 8.50089 84.8C16.8009 75.9 27.2009 70.1 38.7009 66C54.0009 60.7 69.7009 57 86.0009 56.3C92.2009 55.9 98.7009 55.2 102.501 55Z" fill="#33D7FB" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M34.4186 79.1704C34.4186 79.1704 16.8086 100.47 58.1386 94.1104L66.3186 47.3804L16.9186 30.7604C16.9186 30.7604 3.33862 27.3004 2.06862 39.5304C0.798617 51.7604 17.5786 60.3104 17.5786 60.3104C17.5786 60.3104 9.54862 63.4804 9.78862 68.4404C10.0186 72.8104 15.5686 80.2904 34.4186 79.1704Z" fill="#ADE3FE"></path><path d="M168.388 52.2101C168.388 52.2101 176.098 58.4701 160.948 71.4601L126.488 34.1201C126.488 34.1201 130.278 20.3601 141.818 7.35009C153.358 -5.65991 167.578 -1.42986 158.178 30.2101C158.178 30.2101 161.858 27.2901 165.928 29.7701C169.998 32.2501 171.578 41.8401 162.438 51.2401C162.438 51.2301 165.368 50.5901 168.388 52.2101Z" fill="#ADE3FE"></path><path d="M63.3479 51.4301L15.5879 35.7701C15.5879 35.7701 11.0679 34.1001 8.32786 37.7001C5.58786 41.3101 6.86786 59.6601 46.8879 59.7001C46.8879 59.7001 28.2478 60.1801 20.0278 62.6901C11.8078 65.1901 9.89787 72.8901 25.7379 75.6001C25.7379 75.6001 38.5179 77.4501 49.2679 75.6001C49.2679 75.6001 33.2979 79.7201 33.7679 88.5101C33.7679 88.5101 36.5979 95.8201 58.5479 90.5401L63.3479 51.4301Z" fill="#FEFEFE"></path><path d="M129.088 35.1203C129.088 35.1203 133.648 19.3903 145.988 7.72026C161.168 -6.63974 160.528 20.7903 151.558 39.5103C151.558 39.5103 162.258 25.9703 166.258 33.5103C170.198 40.9403 155.338 55.2003 155.338 55.2003C155.338 55.2003 165.948 50.0203 167.778 56.5703C169.608 63.1303 156.728 71.1203 156.728 71.1203L129.088 35.1203Z" fill="#FEFEFE"></path><path d="M161.548 78.1402C161.548 107.09 137.808 119.12 108.518 119.12C79.2282 119.12 55.4883 105.43 55.4883 81.1402C55.4883 45.7402 79.2282 31.1602 108.518 31.1602C137.808 31.1602 161.548 53.8502 161.548 78.1402Z" fill="#EB0C85"></path><path d="M156.728 77.8999C156.728 104.26 135.108 115.22 108.438 115.22C81.7684 115.22 60.1484 102.75 60.1484 80.6399C60.1484 48.3999 81.7684 35.1299 108.438 35.1299C135.108 35.1199 156.728 55.7799 156.728 77.8999Z" fill="#ED58BD"></path><path d="M128.618 71.4503C131.302 71.4503 133.478 67.4342 133.478 62.4802C133.478 57.5262 131.302 53.5103 128.618 53.5103C125.934 53.5103 123.758 57.5262 123.758 62.4802C123.758 67.4342 125.934 71.4503 128.618 71.4503Z" fill="#210A5C"></path><path d="M96.9791 73.1299C99.6632 73.1299 101.839 69.1139 101.839 64.1599C101.839 59.2059 99.6632 55.1899 96.9791 55.1899C94.295 55.1899 92.1191 59.2059 92.1191 64.1599C92.1191 69.1139 94.295 73.1299 96.9791 73.1299Z" fill="#210A5C"></path><path d="M66.3278 74.1803C66.3278 74.1803 66.1278 77.8803 68.7378 77.9403C71.3578 78.0003 71.4777 73.6002 71.4777 73.6002C71.4777 73.6002 72.1478 57.2402 86.6978 51.2902C86.6978 51.2902 90.2678 50.9003 89.2578 47.7803C88.2478 44.6603 82.5778 47.8603 82.5778 47.8603C82.5778 47.8603 69.0778 51.3603 66.3278 74.1803Z" fill="#FEFBFD"></path><path d="M152.489 80.3203C152.489 80.3203 152.659 77.2702 150.499 77.2202C148.349 77.1702 148.239 80.7902 148.239 80.7902C148.239 80.7902 147.689 94.2503 135.719 99.1503C135.719 99.1503 132.789 99.4702 133.619 102.04C134.449 104.61 139.109 101.98 139.109 101.98C139.109 101.98 150.229 99.1003 152.489 80.3203Z" fill="#FEFBFD"></path><path d="M73.0173 91.5512C74.0552 90.952 73.8758 88.6982 72.6166 86.5172C71.3574 84.3363 69.4952 83.0541 68.4573 83.6533C67.4195 84.2525 67.5989 86.5063 68.8581 88.6872C70.1173 90.8682 71.9795 92.1504 73.0173 91.5512Z" fill="#FEFBFD"></path><defs><linearGradient id="paint0_linear_1357_559" x1="105.133" y1="95.7636" x2="105.133" y2="708.454" gradientUnits="userSpaceOnUse"><stop stop-color="#33D7FB"></stop><stop offset="0.463542" stop-color="#2A26DF"></stop><stop offset="1" stop-color="#171CBE"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "angel-slime-md") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "158",
          height: "532",
          viewBox: "0 0 158 532",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.13037 71.9739V496.572C2.05563 500.608 3.69988 504.718 6.9137 508.082C13.2666 514.808 21.3385 519.218 30.2326 522.207C50.4124 528.859 71.1153 531.027 92.4162 529.233C104.748 528.187 116.632 526.094 128.217 521.983C136.887 518.994 144.958 514.733 151.012 507.857C154.077 504.419 155.945 500.682 155.796 496.572V71.9739" fill="url(#paint0_linear_1357_958)"></path><path d="M2.13037 71.9739V496.572C2.05563 500.608 3.69988 504.718 6.9137 508.082C13.2666 514.808 21.3385 519.218 30.2326 522.208C50.4124 528.859 71.1154 531.027 92.4162 529.233C104.748 528.187 116.632 526.094 128.217 521.983C136.887 518.994 144.958 514.733 151.012 507.857C154.077 504.419 155.945 500.682 155.796 496.572V71.9739" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M77.0952 41.48C99.4425 42.0032 119.323 44.5443 137.485 53.6626C144.81 57.3249 151.461 61.884 154.75 69.6569C157.441 75.8604 155.423 81.3164 151.088 86.0997C144.959 92.9758 136.962 97.236 128.292 100.226C116.707 104.336 104.749 106.354 92.4916 107.475C71.1907 109.269 50.4878 107.176 30.308 100.45C21.3392 97.4602 13.342 93.0506 6.98911 86.324C0.710954 79.6721 0.636204 70.4043 6.83962 63.7525C13.043 57.1006 20.816 52.7657 29.4111 49.7014C40.8463 45.7402 52.5805 42.9748 64.7631 42.4516C69.397 42.1526 74.2551 41.6295 77.0952 41.48Z" fill="#33D7FB" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M26.2111 59.5449C26.2111 59.5449 13.0494 75.4645 43.9394 70.7111L50.0532 35.7851L13.1316 23.3633C13.1316 23.3633 2.98193 20.7773 2.03273 29.918C1.08353 39.0587 13.6249 45.449 13.6249 45.449C13.6249 45.449 7.62328 47.8182 7.80266 51.5253C7.97456 54.7915 12.1226 60.382 26.2111 59.5449Z" fill="#ADE3FE"></path><path d="M126.339 39.3949C126.339 39.3949 132.102 44.0736 120.779 53.7823L95.0234 25.8744C95.0234 25.8744 97.8561 15.5901 106.481 5.86647C115.106 -3.8572 125.734 -0.695663 118.709 22.9521C118.709 22.9521 121.459 20.7697 124.501 22.6232C127.543 24.4768 128.724 31.6443 121.892 38.6699C121.892 38.6624 124.082 38.1841 126.339 39.3949Z" fill="#ADE3FE"></path><path d="M47.8328 38.812L12.137 27.1077C12.137 27.1077 8.75875 25.8595 6.71087 28.5502C4.663 31.2483 5.61967 44.9631 35.5306 44.993C35.5306 44.993 21.5991 45.3517 15.4554 47.2277C9.31181 49.0962 7.88429 54.8511 19.7231 56.8766C19.7231 56.8766 29.2749 58.2593 37.3094 56.8766C37.3094 56.8766 25.3734 59.9559 25.7247 66.5256C25.7247 66.5256 27.8399 71.989 44.2453 68.0428L47.8328 38.812Z" fill="#FEFEFE"></path><path d="M96.9668 26.6217C96.9668 26.6217 100.375 14.8651 109.598 6.14293C120.943 -4.58973 120.465 15.9115 113.761 29.9028C113.761 29.9028 121.758 19.783 124.748 25.4184C127.692 30.9716 116.586 41.6295 116.586 41.6295C116.586 41.6295 124.516 37.758 125.884 42.6534C127.251 47.5564 117.625 53.5281 117.625 53.5281L96.9668 26.6217Z" fill="#FEFEFE"></path><path d="M121.227 58.775C121.227 80.4122 103.484 89.4034 81.5926 89.4034C59.7013 89.4034 41.958 79.1715 41.958 61.0172C41.958 34.5592 59.7013 23.6621 81.5926 23.6621C103.484 23.6621 121.227 40.6206 121.227 58.775Z" fill="#EB0C85"></path><path d="M117.625 58.5952C117.625 78.2967 101.466 86.4881 81.5333 86.4881C61.6002 86.4881 45.4414 77.1681 45.4414 60.6431C45.4414 36.5469 61.6002 26.6289 81.5333 26.6289C101.466 26.6214 117.625 42.0627 117.625 58.5952Z" fill="#ED58BD"></path><path d="M96.6158 53.7748C98.6218 53.7748 100.248 50.7732 100.248 47.0706C100.248 43.368 98.6218 40.3665 96.6158 40.3665C94.6097 40.3665 92.9834 43.368 92.9834 47.0706C92.9834 50.7732 94.6097 53.7748 96.6158 53.7748Z" fill="#210A5C"></path><path d="M72.9683 55.0304C74.9744 55.0304 76.6006 52.0288 76.6006 48.3262C76.6006 44.6236 74.9744 41.6221 72.9683 41.6221C70.9622 41.6221 69.3359 44.6236 69.3359 48.3262C69.3359 52.0288 70.9622 55.0304 72.9683 55.0304Z" fill="#210A5C"></path><path d="M50.0603 55.8154C50.0603 55.8154 49.9108 58.5808 51.8615 58.6257C53.8197 58.6705 53.9094 55.3819 53.9094 55.3819C53.9094 55.3819 54.4101 43.1545 65.2848 38.7074C65.2848 38.7074 67.953 38.416 67.1981 36.0841C66.4433 33.7522 62.2055 36.1439 62.2055 36.1439C62.2055 36.1439 52.1156 38.7598 50.0603 55.8154Z" fill="#FEFBFD"></path><path d="M114.457 60.4043C114.457 60.4043 114.584 58.1247 112.97 58.0873C111.363 58.0499 111.281 60.7555 111.281 60.7555C111.281 60.7555 110.87 70.8156 101.923 74.4778C101.923 74.4778 99.7335 74.7169 100.354 76.6378C100.974 78.5586 104.457 76.5929 104.457 76.5929C104.457 76.5929 112.768 74.4404 114.457 60.4043Z" fill="#FEFBFD"></path><path d="M55.0597 68.7983C55.8354 68.3504 55.7013 66.6659 54.7602 65.0359C53.8191 63.4059 52.4273 62.4475 51.6516 62.8954C50.8759 63.3432 51.01 65.0277 51.9511 66.6577C52.8923 68.2878 54.284 69.2461 55.0597 68.7983Z" fill="#FEFBFD"></path><defs><linearGradient id="paint0_linear_1357_958" x1="79.0617" y1="71.9467" x2="79.0617" y2="529.871" gradientUnits="userSpaceOnUse"><stop stop-color="#33D7FB"></stop><stop offset="0.463542" stop-color="#2A26DF"></stop><stop offset="1" stop-color="#171CBE"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "computer") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "517",
          height: "757",
          viewBox: "0 0 517 757",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><g clip-path="url(#clip0_451_1929)"><path d="M0.0996094 465.8C0.0996094 418.5 0.0996094 371.1 0.0996094 323.8C1.49961 323.3 2.89961 322.7 4.29961 322.3C36.7996 313.5 69.2996 304.6 101.9 295.8C158 280.6 214 265.4 270.2 250.4C272.7 249.7 276.2 250 278.5 251.2C353.4 288.3 428.1 325.6 502.9 362.8C504.4 363.6 505.9 364.4 508.2 365.6C505.2 366.5 503.2 367.2 501.1 367.7C457.6 379.6 414 391.6 370.5 403.5C323.9 416.3 277.3 429 230.8 441.8C180.9 455.5 130.9 469.2 80.9996 482.9C70.7996 485.7 60.4996 488.1 50.1996 490.7C37.5996 484.2 24.8996 477.7 12.1996 471.3C8.29961 469.3 4.19961 467.6 0.0996094 465.8Z" fill="#49C9FF"></path><path d="M0.0996094 727.8C0.0996094 642.1 0.0996094 556.5 0.0996094 470.8C14.3996 478 28.6996 485.2 42.9996 492.2C45.8996 493.6 47.1996 495.1 47.1996 498.6C47.0996 581.4 47.0996 664.2 47.0996 747C47.0996 748.5 46.7996 750.1 46.5996 752.4C43.6996 750.9 41.6996 749.9 39.6996 748.8C26.4996 741.9 13.2996 734.8 0.0996094 727.8Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50.2002 490.7C50.9002 492.4 51.5002 494.1 52.2002 495.8C52.2002 580.8 52.2002 665.7 52.2002 750.7C51.5002 752.7 50.9002 754.7 50.2002 756.7C47.7002 756.5 44.9002 757.1 42.9002 756C30.1002 749.4 17.4002 742.5 4.7002 735.7C3.3002 734.9 1.7002 734.4 0.200195 733.7C0.200195 731.7 0.200195 729.7 0.200195 727.7C13.4002 734.7 26.6002 741.7 39.8002 748.7C41.8002 749.8 43.9002 750.8 46.7002 752.3C46.9002 750 47.2002 748.4 47.2002 746.9C47.2002 664.1 47.2002 581.3 47.3002 498.5C47.3002 495.1 46.0002 493.5 43.1002 492.1C28.7002 485.1 14.5002 477.9 0.200195 470.7C0.200195 469 0.200195 467.4 0.200195 465.7C4.2002 467.5 8.3002 469.2 12.3002 471.2C24.9002 477.7 37.5002 484.3 50.2002 490.7Z" fill="#273CD9"></path><path d="M153.5 508.9C153.3 508.8 153.2 508.5 153.2 508.3C153.2 508 153.4 507.7 153.7 507.7C180.2 500.5 206.8 493.4 233.3 486.3C241.6 484.1 249.9 482.1 258.2 480.1C260.7 479.5 263.2 481.4 263.2 484C263.2 497.4 263.1 510.9 263.3 524.3C263.3 527.7 262.2 529.1 258.8 530C245.9 533.5 233 537.4 220.1 541.1C217.4 541.9 214.8 539.5 213.5 537C212.4 534.9 210.3 533.4 207.5 532.2C190.1 525 172.8 517.3 155.4 509.9C154.7 509.7 154.1 509.3 153.5 508.9Z" fill="#2331B5"></path><path d="M50.0996 756.8C50.7996 754.8 51.3996 752.8 52.0996 750.8C58.9996 749.2 65.9996 747.7 72.8996 746C80.0996 744.3 80.0996 744.2 80.0996 736.8C80.0996 666.5 80.0996 596.2 80.1996 525.9C81.8996 526 83.5996 526.1 85.2996 526.1C85.1996 539.6 85.1996 553.1 85.1996 566.6C85.1996 625.4 85.1996 684.3 85.3996 743.1C85.3996 747.2 84.2996 748.8 80.2996 749.6C70.0996 751.7 60.0996 754.3 50.0996 756.8Z" fill="#161CC1"></path><path d="M80.1996 525.8C80.1996 596.1 80.1996 666.4 80.0996 736.7C80.0996 744.1 80.0996 744.2 72.8996 745.9C65.9996 747.6 58.9996 749.1 52.0996 750.7C52.0996 665.7 52.0996 580.8 52.0996 495.8C70.1996 490.9 88.2996 486 106.3 481.1C140.8 471.7 175.4 462.2 209.9 452.7C245.4 443 280.9 433.2 316.4 423.5C348.7 414.6 381 405.7 413.3 396.8C444.5 388.3 475.7 379.8 506.9 371.3C508 371 509.1 371 510.8 370.7C510.9 372.8 511 374.6 511 376.3C511 457.3 511 538.3 511.1 619.2C511.1 623 510 624.8 506.3 625.8C498.5 627.8 490.8 630.3 482 632.9C482 630.2 482 628.1 482 626.1C482 558.1 482 490.1 482 422.1C482 414 481.6 413.7 473.8 415.8C432.9 426.9 391.9 438 351 449.1C285.4 466.9 219.8 484.7 154.2 502.4C131.2 508.6 108.1 514.6 84.9996 520.9C82.7996 521.6 79.5996 521.8 80.1996 525.8Z" fill="#0BACFF"></path><path d="M477.1 619.5C477.1 622.4 474.1 624.4 471.4 623.1C439.2 607.9 407 592.8 374.7 577.6C352.7 567.3 330.8 557 308.8 546.7C296.8 541 284.8 535.2 272.7 529.7C269.2 528.1 267.8 526.2 267.9 522.2C268.2 508.1 268 494 268 479.8C268 478 269.2 476.4 271 475.9C337.7 458 404.5 440 472 421.9C474.5 421.2 477 423.1 477 425.8C477.1 490.8 477.1 555.2 477.1 619.5Z" fill="#2331B5"></path><path d="M516.2 369.3C516.2 365.3 515.1 363.2 511.4 361.4C433.9 323 356.5 284.4 279 246C276.6 244.8 273.2 244.4 270.7 245.1C192.7 266.1 114.8 287.3 36.8002 308.4C24.6002 311.7 12.4002 314.7 0.200195 317.8C0.200195 319.8 0.200195 321.8 0.200195 323.8C1.6002 323.3 3.0002 322.7 4.4002 322.3C36.9002 313.5 69.4002 304.6 101.9 295.8C158 280.6 214 265.4 270.1 250.4C272.6 249.7 276.1 250 278.4 251.2C353.2 288.3 428 325.6 502.8 362.8C504.3 363.6 505.8 364.4 508.1 365.7C505.1 366.6 503.1 367.3 501 367.8C457.5 379.7 413.9 391.7 370.4 403.6C323.8 416.4 277.2 429.1 230.7 441.9C180.8 455.6 130.8 469.3 80.9002 483C70.7002 485.8 60.4002 488.2 50.1002 490.8C50.8002 492.5 51.4002 494.2 52.1002 496C70.2002 491.1 88.3002 486.2 106.3 481.3C140.9 471.9 175.4 462.4 209.9 452.9C245.4 443.2 280.9 433.4 316.4 423.7C348.7 414.8 381 405.9 413.3 397C444.5 388.4 475.7 379.9 506.9 371.5C508 371.2 509.1 371.2 510.8 370.9C510.9 373 511 374.8 511 376.5C511 457.5 511 538.5 511.1 619.4C511.1 623.2 510 625 506.3 626C498.5 628 490.8 630.5 482 633.1C482 630.4 482 628.3 482 626.3C482 558.3 482 490.3 482 422.3C482 414.2 481.6 413.9 473.8 416C432.9 427.1 391.9 438.2 351 449.3C285.4 467.1 219.8 484.8 154.2 502.6C131.2 508.8 108.1 514.8 85.0002 521C82.6002 521.6 79.4002 521.9 80.0002 525.8C81.7002 525.9 83.4002 525.9 85.1002 526C91.0002 524.5 96.8002 523.1 102.6 521.4C108.6 519.7 114.4 517.5 120.4 515.9C127.6 514 134.9 512.4 142.1 510.8C145.7 510 149.3 509.4 152.9 508.7C152.9 508.4 152.9 508.1 152.9 507.8C179.6 500.6 206.3 493.4 233 486.3C242.9 483.7 252.9 481.3 262.8 478.8C264.5 478.1 266.1 477.5 267.8 476.8C266.4 476.2 264.7 474.8 263.6 475.1C246.8 479.5 230.1 484.2 213.4 488.7C212.6 488.9 211.8 489.1 210.9 489.4C211.7 489.2 212.6 489 213.4 488.7C230.2 484.1 246.9 479.5 263.6 475.1C264.8 474.8 266.4 476.2 267.8 476.8C337.2 458.1 406.5 439.5 476.8 420.6C476.8 489.4 476.8 557.6 476.8 625.8C476.7 627.3 476.7 628.7 476.5 630.9C476.6 628.7 476.7 627.3 476.8 625.8C442.7 609.8 408.6 593.7 374.4 577.7C352.4 567.4 330.5 557.1 308.6 546.8C296.6 541.1 284.6 535.3 272.5 529.8C269 528.2 267.6 526.3 267.7 522.3C268 507.2 267.8 492 267.8 476.9C266.1 477.6 264.5 478.2 262.8 478.9C262.8 494 262.7 509.2 262.9 524.3C262.9 527.7 261.8 529.1 258.4 530C243.6 534 228.8 538.5 214 542.8C214 544.4 214 546 214 547.9C230.2 543.3 246 538.9 261.7 534.2C265.3 533.1 268.3 533.4 271.6 535C289.3 543.7 307 552.3 324.8 560.9C324.8 560.9 324.8 560.9 324.9 560.9C325.3 561.2 325.6 561.6 326 561.8C376.6 587.1 427.2 612.4 477.8 637.6C479.2 638.3 481.3 638.4 482.9 637.9C492.2 635.3 501.4 632.3 510.7 629.8C514.7 628.7 516.1 627 516.1 622.7C516.1 538.2 516.1 453.7 516.2 369.3ZM179.1 498C170.6 500.3 162.2 502.7 153.8 505.2C153.4 505.3 152.2 505.5 151.7 505.9C152.3 505.5 153.4 505.3 153.8 505.2C162.3 502.7 170.7 500.3 179.1 498C185.1 496.4 191.2 494.8 197.2 493.2C191.2 494.8 185.2 496.4 179.1 498Z" fill="#273CD9"></path><path d="M0.0996094 290.8C0.0996094 280.5 0.0996094 270.1 0.0996094 259.8C15.9996 256.4 31.8996 253 47.8996 249.6C56.9996 247.6 66.0996 245.7 75.1996 243.7C78.2996 243 80.4996 241.4 80.0996 237.9C79.6996 234.3 77.0996 233.4 73.8996 233.8C73.0996 233.9 72.1996 233.9 71.3996 234.1C47.6996 239 23.8996 244 0.199609 248.9C0.199609 239.9 0.199609 230.9 0.199609 221.9C27.8996 216.4 55.5996 210.8 83.3996 205.3C87.0996 204.6 90.0996 203.1 89.0996 198.8C88.1996 194.9 84.9996 194.5 81.4996 195.2C64.5996 198.6 47.5996 202.1 30.5996 205.4C20.4996 207.4 10.3996 209 0.199609 210.9C0.199609 203.6 0.199609 196.2 0.199609 188.9C5.89961 187.6 11.4996 186.3 17.1996 184.9C20.4996 184.1 22.3996 181.5 20.8996 178.6C19.9996 176.8 16.6996 175 14.6996 175.3C9.79961 175.9 5.09961 177.6 0.199609 178.9C0.199609 170.2 0.199609 161.6 0.199609 152.9C10.9996 150.6 21.8996 148.3 32.6996 146.1C36.2996 145.4 38.8996 143.6 37.8996 139.7C36.8996 135.9 33.7996 135.6 30.2996 136.4C20.2996 138.7 10.2996 140.8 0.199609 142.9C0.199609 135.2 0.199609 127.6 0.199609 119.9C4.29961 119.3 8.39961 118.7 12.3996 118C15.6996 117.5 17.5996 115.5 17.0996 112.2C16.4996 108.5 13.7996 107.5 10.3996 108C6.99961 108.5 3.59961 109.3 0.199609 109.9C0.199609 103.2 0.199609 96.5999 0.199609 89.8999C21.4996 85.4999 42.8996 81.1999 64.1996 76.7999C75.5996 74.4999 86.9996 72.1999 98.3996 69.8999C101.6 69.1999 104 67.0999 102.8 63.9999C102.1 62.1999 99.0996 61.1999 96.9996 59.9999C96.3996 59.6999 95.3996 59.9999 94.4996 60.0999C80.1996 62.4999 65.8996 64.6999 51.6996 67.4999C34.3996 70.9999 17.2996 74.9999 0.0996094 78.7999C0.0996094 69.7999 0.0996094 60.7999 0.0996094 51.7999C1.19961 51.4999 2.29961 51.0999 3.49961 50.8999C64.9996 35.4999 127.8 29.6999 190.8 25.9999C219.1 24.2999 247.4 23.1999 275.7 22.3999C294 21.8999 312.3 21.9999 330.6 22.6999C339.4 22.9999 341.1 25.5999 341.1 34.4999C341.5 98.7999 341.8 163.1 342.1 227.4C342.1 234.5 339.5 237.3 332.3 237.9C327 238.3 321.7 238.6 316.3 238.8C271.4 240.9 226.6 245.1 182 251.2C126.5 258.7 71.7996 270.9 17.8996 286.3C11.9996 288 6.09961 289.3 0.0996094 290.8ZM322.3 201.7C309.8 202.8 299.1 203.8 288.3 204.7C255 207.4 221.6 210.1 188.3 212.7C184.9 213 182.2 214.2 182.3 217.9C182.4 221.9 185.4 223.1 189 222.7C195.8 222.1 202.6 221.5 209.4 220.9C246.7 217.9 284 214.8 321.3 211.9C325 211.6 328.3 210.8 328 206.4C327.7 202.1 324.2 201.5 322.3 201.7ZM193.2 156.8C203.5 155.8 213.7 154.8 224 153.9C254 151.2 284 148.6 314 146C317.8 145.7 321.5 145 321 140.3C320.5 135.6 316.6 135.6 312.9 136C303.1 136.9 293.4 137.9 283.6 138.8C253.3 141.5 222.9 144.2 192.6 146.8C189 147.1 186.1 148.2 186.3 152.2C186.5 156.1 189.6 157.1 193.2 156.8ZM204.2 89.7999C204.2 89.7999 204.2 89.6999 204.2 89.5999C240.7 87.6999 277.3 85.6999 313.8 83.7999C317.2 83.5999 320 82.5999 320 78.7999C320 74.7999 317.2 73.5999 313.5 73.6999C305.4 73.9999 297.2 74.2999 289.1 74.6999C267 75.7999 244.9 76.7999 222.8 77.9999C215 78.3999 207.2 79.0999 199.4 79.6999C196.1 79.8999 193.6 81.7999 194.4 84.9999C194.9 86.8999 197.7 88.3999 199.8 89.5999C201 90.2999 202.7 89.7999 204.2 89.7999ZM203.3 176.9C202.9 177.2 202.6 177.5 202.2 177.8C201.5 177.9 200.9 177.9 200.2 178C174.2 181.3 148.1 184.7 122.1 188C115.3 188.9 108.5 189.5 101.9 191C99.9996 191.4 98.6996 194.4 97.1996 196.3C99.0996 197.8 100.9 199.5 102.9 200.7C103.7 201.2 105.2 200.6 106.3 200.4C121 198.5 135.6 196.6 150.3 194.7C167.8 192.4 185.2 190.1 202.7 187.9C205.9 187.5 208.6 185.9 207.9 182.6C207.5 180.5 204.9 178.8 203.3 176.9ZM302.3 44.7999C278.2 45.6999 254.1 46.7999 230 47.6999C226.5 47.7999 223.3 48.5999 223.4 52.6999C223.4 57.0999 226.7 57.8999 230.4 57.7999C241.7 57.3999 253 57.0999 264.3 56.6999C280.8 56.0999 297.2 55.3999 313.7 54.8999C317.3 54.7999 320.2 53.6999 320.1 49.6999C320 45.6999 316.9 44.7999 313.3 44.8999C309.6 44.8999 305.9 44.7999 302.3 44.7999ZM31.3996 181.1C41.8996 179.1 50.8996 177.5 59.8996 175.8C75.6996 172.8 91.5996 170 107.3 166.7C109.2 166.3 111.7 163.4 111.8 161.4C112.1 158.2 109.3 156.7 106 156.9C105 157 104 157.1 103 157.2C93.4996 158.7 83.8996 160 74.4996 161.9C60.1996 164.7 45.8996 167.7 31.6996 171C29.8996 171.4 27.4996 174.6 27.4996 176.4C27.5996 178.2 30.3996 179.9 31.3996 181.1ZM49.9996 144.7C50.2996 144.4 50.6996 144.1 50.9996 143.8C51.2996 143.8 51.6996 143.7 51.9996 143.7C76.9996 139.2 102.1 134.6 127.1 130.1C130.8 129.4 133.8 127.9 132.9 123.7C131.9 119.4 128.4 119.6 124.8 120.3C112.5 122.6 100.3 124.7 87.9996 127C75.3996 129.3 62.7996 131.6 50.1996 133.8C46.9996 134.4 44.4996 136.2 45.3996 139.5C45.9996 141.4 48.4996 142.9 49.9996 144.7ZM163.7 215.9C142.2 219.5 120.8 223 99.2996 226.6C95.8996 227.2 93.5996 228.8 94.0996 232.5C94.6996 236.7 97.7996 237.2 101.3 236.7C122.5 233.5 143.7 230.2 164.9 227C168.3 226.5 170.7 225.1 170.4 221.3C170 217.5 167.2 216.6 163.7 215.9ZM208.8 110.4C188.7 112.8 168.6 115.3 148.5 117.6C145 118 142 119.1 142.3 123.1C142.7 127.4 146 128.1 149.7 127.7C169.6 125.5 189.6 123.2 209.6 121C213.3 120.6 216.5 119.6 216 115.2C215.6 111.2 212.4 110.5 208.8 110.4ZM318.1 168.8C318.1 168.9 318.1 168.9 318.1 168.8C301.2 169.8 284.2 170.8 267.3 171.7C263.8 171.9 261.2 173.1 261.3 176.8C261.4 180.5 264 181.9 267.5 181.7C276.1 181.3 284.8 180.9 293.4 180.5C303.2 180 313 179.4 322.8 178.8C326.1 178.6 328.7 176.7 327.9 173.5C327.4 171.6 324.6 170 322.6 168.9C321.4 168.3 319.6 168.8 318.1 168.8ZM28.9996 114.9C30.8996 114.7 31.3996 114.7 31.8996 114.6C48.4996 111.4 65.0996 108.1 81.6996 104.9C85.0996 104.2 87.4996 102.6 86.8996 98.9999C86.1996 94.9999 83.0996 94.3999 79.5996 95.0999C74.8996 96.0999 70.1996 96.8999 65.3996 97.8999C53.4996 100.2 41.5996 102.3 29.7996 105C27.8996 105.4 25.6996 108.4 25.4996 110.4C25.3996 111.9 28.0996 113.8 28.9996 114.9ZM124.2 165C142.1 162.8 158.5 160.9 174.8 158.5C176.4 158.3 178.8 155.2 178.8 153.3C178.9 150 176.2 148.5 172.9 148.9C156.9 150.8 140.9 152.7 124.9 155C123.1 155.3 120.5 158.4 120.5 160.2C120.5 162 123.3 163.8 124.2 165ZM100.5 102.1C116.2 99.4999 130.3 97.1999 144.4 94.9999C148 94.3999 150.7 92.8999 149.9 88.8999C149.1 84.8999 145.9 84.4999 142.4 84.9999C138.1 85.5999 133.8 86.1999 129.6 86.8999C119.9 88.4999 110.2 89.8999 100.7 91.9999C98.8996 92.3999 96.4996 95.5999 96.5996 97.4999C96.5996 99.2999 99.4996 101 100.5 102.1ZM154.4 53.7999C141.2 55.0999 127.9 56.3999 114.7 57.5999C111.1 57.8999 108.1 58.7999 108.3 62.8999C108.5 67.2999 111.9 67.8999 115.6 67.5999C128.8 66.2999 142.1 64.9999 155.3 63.7999C158.8 63.4999 161.3 61.9999 160.9 58.2999C160.6 54.5999 157.9 53.4999 154.4 53.7999ZM230.7 119.7C243 118.7 255.2 117.7 267.5 116.8C270.8 116.6 273.5 115 272.8 111.8C272.4 109.9 269.5 107 267.8 107.1C254 107.7 240.3 108.7 226.6 110.1C225 110.3 222.7 113.3 222.5 115.1C222.4 116.5 225 118.4 226.8 119.6C227.7 120.2 229.4 119.7 230.7 119.7ZM208.4 47.7999C196.5 49.0999 184.7 50.4999 172.8 51.5999C169 51.9999 165.9 52.8999 166.3 57.2999C166.7 61.5999 170.2 61.9999 173.9 61.5999C185.8 60.2999 197.6 58.9999 209.5 57.7999C213 57.3999 215.4 55.7999 215 52.1999C214.6 48.3999 211.8 47.4999 208.4 47.7999ZM314.4 103.8C304.3 104.5 294.2 105.1 284.1 105.7C280.6 105.9 278.1 107.4 278.4 111.1C278.6 114.5 281 115.9 284.3 115.7C291.9 115.3 299.6 115 307.2 114.5C311.2 114.3 315.3 114.5 319.1 113.5C321.1 113 322.5 110.3 324.2 108.6C322.4 107 320.9 105 318.9 103.8C317.7 103.3 315.9 103.8 314.4 103.8ZM218.5 187C230.7 185.4 241.2 184.3 251.7 182.5C253.4 182.2 255.8 179 255.9 177C256 173.7 253.1 172.4 249.8 172.8C239.6 174.1 229.4 175.2 219.3 176.9C217.4 177.2 214.6 180.3 214.7 181.9C214.7 184 217.4 185.8 218.5 187ZM182.5 80.7999C174.3 81.4999 166.8 82.0999 159.3 82.7999C155.9 83.0999 153.5 84.9999 154.3 88.1999C154.8 90.0999 157.7 92.7999 159.5 92.6999C168.3 92.4999 177.1 91.7999 185.9 90.6999C187.5 90.4999 189.9 87.2999 189.8 85.5999C189.7 83.8999 187 82.1999 185.1 80.9999C184.4 80.2999 182.9 80.7999 182.5 80.7999Z" fill="#F2EAE4"></path><path d="M0.0996094 290.8C5.99961 289.3 11.9996 288 17.7996 286.3C71.7996 270.8 126.4 258.6 182.1 251.1C226.7 245 271.4 240.8 316.4 238.7C321.7 238.5 327 238.2 332.4 237.8C339.6 237.2 342.3 234.4 342.2 227.3C341.9 163 341.6 98.7 341.2 34.4C341.2 25.6 339.5 23 330.7 22.6C312.4 21.9 294.1 21.8 275.8 22.3C247.5 23.1 219.2 24.2 190.9 25.9C127.9 29.7 65.0996 35.5 3.59961 50.8C2.49961 51.1 1.39961 51.4 0.199609 51.7C0.199609 45 0.199609 38.4 0.199609 31.7C23.8996 27.7 47.4996 23 71.1996 19.8C96.2996 16.4 121.6 14.2 146.9 11.8C164.7 10.1 182.6 8.90002 200.5 7.80002C222.6 6.50002 244.6 5.30002 266.7 4.90002C284 4.50002 301.3 5.10002 318.6 5.70002C329.2 6.10002 339.7 7.40002 350.3 8.80002C358.2 9.80002 360.2 12.6 360.2 20.4C360.2 93.2 360.2 166 360.2 238.9C360.2 240.2 360.3 241.6 360.1 242.9C359.3 249.4 355.7 254.3 351.1 254.7C346.3 255.2 341.5 255.5 336.7 255.7C320.9 256.4 305.1 256.8 289.4 257.8C271.9 258.9 254.3 260.1 236.8 261.9C217 263.9 197.2 265.8 177.6 269.2C146.6 274.7 115.7 280.9 84.9996 287.9C56.4996 294.4 28.3996 302.5 0.0996094 309.8C0.0996094 303.5 0.0996094 297.2 0.0996094 290.8Z" fill="#1C2FBC"></path><path d="M0.1 309.8C28.4 302.4 56.5 294.4 84.9 287.9C115.6 280.9 146.5 274.7 177.5 269.2C197.1 265.7 216.9 263.9 236.7 261.9C254.2 260.1 271.7 258.9 289.3 257.8C305.1 256.8 320.8 256.4 336.6 255.7C341.4 255.5 346.2 255.2 351 254.7C355.6 254.2 359.2 249.4 360 242.9C360.2 241.6 360.1 240.2 360.1 238.9C360.1 166.1 360.1 93.3 360.1 20.4C360.1 12.6 358.1 9.79996 350.2 8.79996C339.7 7.39996 329.1 6.19996 318.5 5.79996C301.2 5.09996 283.9 4.59996 266.6 4.89996C244.5 5.39996 222.4 6.59996 200.4 7.79996C182.5 8.79996 164.6 10.1 146.8 11.8C121.6 14.2 96.3 16.4 71.1 19.8C47.3 23 23.7 27.7 0 31.7C0 29.7 0 27.7 0 25.7C8.4 24.2 16.8 22.6 25.3 21.3C42.5 18.7 59.6 15.9 76.8 13.8C95.2 11.5 113.7 9.79996 132.2 8.09996C147.1 6.69996 162 5.79996 176.8 4.69996C195.7 3.39996 214.6 1.69996 233.5 1.09996C259.6 0.299963 285.8 -0.200037 311.9 0.0999629C324.6 0.199963 337.2 2.19996 349.9 3.69996C358.7 4.79996 365.2 8.79996 365.2 20.9C364.8 93.6 365.1 166.2 364.8 238.8C364.8 243.8 363.1 249.3 360.6 253.6C358.9 256.5 354.4 259.1 350.9 259.4C333.7 260.6 316.5 260.8 299.3 261.7C289 262.3 278.8 263.8 268.6 264.6C260.4 265.2 252.2 265.5 244 265.9C242.8 265.9 241.5 265.9 240.3 265.9C236.9 266.5 233.5 267 230.1 267.6C213.5 269.5 196.8 271.5 180.2 273.4C180.1 273.8 180.1 274.2 180 274.6C183 276.2 186 277.7 189 279.3C196.7 283.2 196.7 283.2 195.7 292.4C174.8 297.9 153.8 303.3 132.8 308.8C114.6 313.6 96.4 318.6 78.1 323.3C61.1 327.7 44.1 331.9 27.1 336C25.5 336.4 23.4 335.8 22 334.9C16.9 331.8 12 328.1 6.8 325.1C3.1 322.9 0.8 320.1 0.1 315.8C0.1 313.8 0.1 311.8 0.1 309.8ZM42.2 303.9C40.2 304.4 38.2 304.8 36.2 305.3C36 305.9 35.8 306.5 35.6 307.1C37.8 308.3 40 309.6 42.2 310.8C42.5 310.8 42.9 310.9 43.2 310.8C77.8 302.2 112.3 293.5 146.9 284.9C150.5 284 150.4 282.1 149.8 279.4C149.1 279.4 148.6 279.3 148.2 279.4C131.5 282.9 114.8 286.1 98.1 290C79.4 294.3 60.9 299.2 42.2 303.9ZM10.1 313.8C8.8 314.3 7.6 314.8 6.3 315.3C7 316.7 7.4 318.5 8.5 319.4C12.9 322.7 17.3 326.1 22 328.6C24.5 329.9 28 330.6 30.7 330C76.6 318.3 122.4 306.3 168.2 294.4C175.8 292.4 183.4 290.5 191.1 288.6C191.2 288.1 191.3 287.6 191.4 287.2C190 286.1 188.5 285.1 187.1 284C184.6 282.7 181.8 281.8 179.5 280.2C171.7 274.7 163.7 275.7 155.3 278.8C155.2 280 154.9 281.2 155.1 282.3C156.1 287.3 153.5 288.8 149.1 289.9C115.1 298.2 81.1 306.7 47.2 315.2C39.6 317.1 34.5 315.1 29.7 308C23.3 309.8 16.7 311.8 10.1 313.8Z" fill="#200B65"></path><path d="M332.2 392.9C321.1 395.9 310.2 398.8 299.3 401.9C285.3 405.9 271.5 410.2 257.5 414.1C236.1 420.1 214.5 425.8 193.1 431.9C175.1 437 157.2 442.6 139.2 447.7C126.5 451.4 113.7 454.8 100.8 458.1C99.3001 458.5 96.9001 457.7 95.7001 456.6C86.8001 448.2 78.2001 439.5 69.2001 431.1C61.4001 423.8 53.2001 416.8 45.4001 409.5C33.5001 398.5 21.7001 387.2 9.80014 376C7.20014 373.6 5.90014 371 6.10014 367.3C6.40014 362.8 5.90014 358.3 6.30014 353.8C6.40014 352.4 8.10014 350.3 9.40014 350C80.7001 331.2 152 312.5 223.3 293.8C226.1 293.1 228.1 293.3 230.4 295.3C257.5 318.2 284.6 341 311.8 363.9C316.7 368 321.7 372.2 326.8 376.1C330.7 379.1 333.4 382.4 332.3 387.7C331.9 389.1 332.2 390.6 332.2 392.9ZM11.4001 358.6C10.1001 365.7 12.1001 371.1 17.7001 376.1C31.4001 388.1 44.7001 400.8 58.0001 413.2C71.0001 425.4 83.9001 437.6 96.7001 449.9C98.9001 452 100.7 453 104.1 452.1C129.7 444.7 155.5 437.6 181.1 430.3C228.3 416.9 275.5 403.5 322.7 390.1C327.9 388.6 328.7 386.1 325.1 381.8C324.2 380.9 323.3 379.8 322.3 379C308.8 367.7 295.3 356.4 281.8 345.1C264.2 330.4 246.6 315.7 228.8 301.2C227.1 299.8 223.9 299.1 221.8 299.7C190.7 307.6 159.8 315.8 128.8 323.9C90.7001 333.9 52.7001 343.9 14.6001 353.7C11.6001 354.5 10.9001 355.9 11.4001 358.6Z" fill="#200B65"></path><path d="M305.2 308C313.8 301 323.7 299.9 334.5 299.7C342.7 299.5 346.6 305.4 352.6 308.1C361.9 312.2 367.6 320.8 374.7 327.6C378.5 331.2 377.6 342.7 373.9 347.6C369.5 353.5 363.1 355.8 356.3 357.6C354.1 358.2 351.8 358.2 349.5 358.7C337.3 361.3 328.6 354.2 319.6 347.9C314.3 344.2 309.2 340.1 304 336.3C296.4 330.7 295 325.1 299.4 316.6C300.2 315 301.2 313.4 302.1 311.9C303.2 310.5 304.2 309.3 305.2 308ZM328.4 304.9C324.3 305.8 320.3 306.8 316.2 307.7C313 310.1 309 312 306.7 315.1C301.3 322.4 298.5 328.5 310.3 333.7C311.6 334.4 312.9 335 314.2 335.7C319.4 339.7 324.7 343.6 329.8 347.7C341.2 357.1 353.2 354.3 364.8 348.8C373.4 344.7 374.7 335.6 368.5 328.3C367.6 327.3 367 326 366 325.2C359.8 320.6 353.6 316 347.4 311.5C345 309.9 342.7 308.3 340.3 306.7C336.2 306.2 332.3 305.6 328.4 304.9Z" fill="#200B65"></path><path d="M305.2 308C304.2 309.3 303.2 310.6 302.2 311.8C279.1 295.7 255.6 280.1 230.1 267.7C233.5 267.2 236.9 266.6 240.3 266C240.9 266.6 241.5 267.2 242 267.8C249.6 272.2 257.3 276.4 264.7 281.2C278.4 289.9 291.8 299 305.2 308Z" fill="#131E81"></path><path d="M242.2 267.8C241.6 267.2 241 266.6 240.5 266C241.7 266 243 266 244.2 266C243.5 266.6 242.8 267.2 242.2 267.8Z" fill="#E6F9FE"></path><path d="M0.0996094 142.8C10.0996 140.6 20.1996 138.6 30.1996 136.3C33.6996 135.5 36.7996 135.8 37.7996 139.6C38.7996 143.5 36.1996 145.2 32.5996 146C21.6996 148.2 10.8996 150.5 0.0996094 152.8C0.0996094 149.5 0.0996094 146.1 0.0996094 142.8Z" fill="#33D7FB"></path><path d="M28.9998 114.9C28.0998 113.8 25.3998 111.9 25.4998 110.4C25.6998 108.4 27.9998 105.5 29.7998 105C41.5998 102.3 53.4998 100.2 65.3998 97.9001C70.0998 97.0001 74.8998 96.1001 79.5998 95.1001C83.0998 94.4001 86.1998 95.0001 86.8998 99.0001C87.4998 102.7 85.0998 104.3 81.6998 104.9C65.0998 108.1 48.4998 111.3 31.8998 114.6C31.3998 114.7 30.8998 114.7 28.9998 114.9Z" fill="#33D7FB"></path><path d="M124.2 165C123.2 163.9 120.5 162 120.5 160.3C120.6 158.4 123.1 155.3 124.9 155.1C140.8 152.8 156.9 150.9 172.9 149C176.2 148.6 178.9 150.2 178.8 153.4C178.7 155.2 176.4 158.3 174.8 158.6C158.5 160.9 142.2 162.8 124.2 165Z" fill="#33D7FB"></path><path d="M154.399 53.8C157.799 53.5 160.599 54.6 160.899 58.3C161.199 62 158.699 63.5 155.299 63.8C142.099 65 128.799 66.3 115.599 67.6C111.899 68 108.599 67.3 108.299 62.9C108.099 58.8 111.099 57.9 114.699 57.6C127.999 56.5 141.199 55.1 154.399 53.8Z" fill="#33D7FB"></path><path d="M230.7 119.7C229.4 119.7 227.7 120.2 226.8 119.6C225 118.4 222.4 116.5 222.5 115.1C222.6 113.3 224.9 110.2 226.6 110.1C240.3 108.7 254.1 107.7 267.8 107.1C269.5 107 272.4 109.9 272.8 111.8C273.4 115 270.7 116.6 267.5 116.8C255.2 117.7 243 118.6 230.7 119.7C230.7 119.6 230.7 119.7 230.7 119.7Z" fill="#33D7FB"></path><path d="M0.1 248.8C23.8 243.9 47.6 238.9 71.3 234C72.1 233.8 73 233.8 73.8 233.7C77 233.4 79.6 234.2 80 237.8C80.4 241.3 78.2 243 75.1 243.6C66 245.6 56.9 247.5 47.8 249.5C31.9 252.9 16 256.3 0 259.7C0.1 256.2 0.1 252.5 0.1 248.8Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M322.3 201.7C324.3 201.5 327.7 202.1 328.1 206.4C328.4 210.8 325.1 211.6 321.4 211.9C284.1 214.8 246.8 217.9 209.5 220.9C202.7 221.5 195.9 222.1 189.1 222.7C185.5 223 182.5 221.9 182.4 217.9C182.3 214.2 185 213 188.4 212.7C221.7 210.1 255.1 207.4 288.4 204.7C299 203.8 309.8 202.8 322.3 201.7Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M193.2 156.7C189.6 157 186.6 156.1 186.3 152C186.1 148 189 146.9 192.6 146.6C222.9 144 253.3 141.3 283.6 138.6C293.4 137.7 303.1 136.8 312.9 135.8C316.6 135.5 320.5 135.5 321 140.1C321.5 144.8 317.8 145.5 314 145.8C284 148.4 254 151 224 153.7C213.7 154.8 203.4 155.8 193.2 156.7Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M204.2 89.7999C202.7 89.7999 200.9 90.2999 199.8 89.6999C197.7 88.5999 194.9 86.9999 194.4 85.0999C193.6 81.8999 196.1 79.9999 199.4 79.7999C207.2 79.1999 215 78.4999 222.8 78.0999C244.9 76.8999 267 75.8999 289.1 74.7999C297.2 74.3999 305.4 74.0999 313.5 73.7999C317.1 73.5999 320 74.8999 320 78.8999C320 82.5999 317.2 83.6999 313.8 83.8999C277.3 85.7999 240.7 87.6999 204.2 89.7999C204.2 89.6999 204.2 89.6999 204.2 89.7999Z" fill="#1E82F9"></path><path d="M204.2 89.7999C202.7 89.7999 200.9 90.2999 199.8 89.6999C197.7 88.5999 194.9 86.9999 194.4 85.0999C193.6 81.8999 196.1 79.9999 199.4 79.7999C207.2 79.1999 215 78.4999 222.8 78.0999C244.9 76.8999 267 75.8999 289.1 74.7999C297.2 74.3999 305.4 74.0999 313.5 73.7999C317.1 73.5999 320 74.8999 320 78.8999C320 82.5999 317.2 83.6999 313.8 83.8999C277.3 85.7999 240.7 87.6999 204.2 89.7999ZM204.2 89.7999C204.2 89.6999 204.2 89.6999 204.2 89.7999Z" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M203.3 176.9C204.9 178.8 207.5 180.5 207.9 182.6C208.6 185.9 205.9 187.4 202.7 187.9C185.2 190.1 167.8 192.5 150.3 194.7C135.6 196.6 121 198.5 106.3 200.4C105.1 200.6 103.7 201.2 102.9 200.7C100.8 199.5 99.1002 197.8 97.2002 196.3C98.8002 194.5 100 191.5 101.9 191C108.5 189.5 115.3 188.9 122.1 188C148.1 184.6 174.2 181.3 200.2 178C200.9 177.9 201.5 177.9 202.2 177.8C202.6 177.5 202.9 177.2 203.3 176.9Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M302.3 44.7999C306 44.7999 309.6 44.8999 313.3 44.7999C316.9 44.6999 319.9 45.5999 320.1 49.5999C320.2 53.5999 317.3 54.6999 313.7 54.7999C297.2 55.2999 280.8 55.9999 264.3 56.5999C253 56.9999 241.7 57.2999 230.4 57.6999C226.7 57.7999 223.4 56.9999 223.4 52.5999C223.4 48.4999 226.5 47.6999 230 47.5999C254.1 46.5999 278.2 45.5999 302.3 44.5999C302.3 44.6999 302.3 44.7999 302.3 44.7999Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.3996 181.1C30.3996 180 27.5996 178.2 27.5996 176.5C27.5996 174.6 29.9996 171.5 31.7996 171.1C45.9996 167.7 60.2996 164.7 74.5996 162C83.9996 160.2 93.5996 158.9 103.1 157.3C104.1 157.1 105.1 157 106.1 157C109.4 156.8 112.2 158.3 111.9 161.5C111.7 163.4 109.2 166.4 107.4 166.8C91.5996 170.1 75.7996 173 59.9996 175.9C50.8996 177.5 41.9996 179.1 31.3996 181.1Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M208.8 110.4C212.4 110.5 215.6 111.2 216 115.2C216.5 119.5 213.3 120.5 209.6 121C189.6 123.2 169.7 125.4 149.7 127.7C146 128.1 142.7 127.5 142.3 123.1C142 119.1 145 118 148.5 117.6C168.6 115.3 188.7 112.8 208.8 110.4Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M318.1 168.8C319.6 168.8 321.4 168.3 322.5 168.9C324.6 170.1 327.4 171.6 327.8 173.5C328.6 176.7 326 178.6 322.7 178.8C312.9 179.4 303.1 180 293.3 180.5C284.7 181 276 181.3 267.4 181.7C263.9 181.9 261.3 180.5 261.2 176.8C261.1 173.1 263.7 171.8 267.2 171.7C284.1 170.8 301.1 169.8 318 168.9C318.1 168.9 318.1 168.9 318.1 168.8Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M100.5 102.1C99.4996 101 96.5996 99.2998 96.5996 97.4998C96.5996 95.5998 98.8996 92.3998 100.7 91.9998C110.3 89.8998 120 88.4998 129.6 86.8998C133.9 86.1998 138.2 85.5998 142.4 84.9998C145.9 84.4998 149.1 84.8998 149.9 88.8998C150.7 92.8998 148 94.3998 144.4 94.9998C130.3 97.1998 116.2 99.4998 100.5 102.1Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M314.4 103.8C315.9 103.8 317.7 103.3 318.8 103.9C320.8 105.1 322.4 107.1 324.1 108.7C322.4 110.4 321 113.1 319 113.6C315.2 114.6 311.1 114.4 307.1 114.6C299.5 115 291.8 115.4 284.2 115.8C280.9 116 278.5 114.5 278.3 111.2C278.1 107.5 280.5 106 284 105.8C294.1 105.2 304.2 104.6 314.3 104C314.4 103.9 314.4 103.9 314.4 103.8Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.0996094 78.8C17.2996 75 34.3996 70.9 51.6996 67.5C65.8996 64.7 80.1996 62.5 94.4996 60.1C95.2996 60 96.2996 59.6 96.9996 60C99.0996 61.2 102.1 62.2 102.8 64C104 67.1 101.6 69.3 98.3996 69.9C86.9996 72.2 75.5996 74.5 64.1996 76.8C42.8996 81.1 21.4996 85.5 0.199609 89.9C0.0996094 86.1 0.0996094 82.5 0.0996094 78.8Z" fill="#EA46E3"></path><path d="M49.9992 144.7C48.3992 143 45.8992 141.4 45.3992 139.4C44.5992 136.1 46.9992 134.3 50.1992 133.7C62.7992 131.4 75.3992 129.1 87.9992 126.9C100.299 124.7 112.499 122.5 124.799 120.2C128.299 119.5 131.899 119.3 132.899 123.6C133.799 127.8 130.799 129.4 127.099 130C102.099 134.5 76.9992 139 51.9992 143.6C51.6992 143.7 51.2992 143.7 50.9992 143.7C50.6992 144 50.3992 144.4 49.9992 144.7Z" fill="#EA46E3"></path><path d="M208.399 47.8C211.799 47.5 214.599 48.5 214.999 52.2C215.399 55.9 212.999 57.5 209.499 57.8C197.599 59 185.699 60.2999 173.899 61.5999C170.299 61.9999 166.799 61.6 166.299 57.3C165.899 53 168.999 52 172.799 51.6C184.699 50.5 196.599 49.1 208.399 47.8Z" fill="#EA46E3"></path><path d="M218.499 187C217.499 185.8 214.699 183.9 214.599 182C214.499 180.3 217.299 177.3 219.199 177C229.299 175.3 239.499 174.2 249.699 172.9C252.899 172.5 255.899 173.8 255.799 177.1C255.799 179 253.399 182.3 251.599 182.6C241.199 184.3 230.599 185.5 218.499 187Z" fill="#EA46E3"></path><path d="M0.0996094 210.8C10.1996 209 20.3996 207.3 30.4996 205.3C47.4996 202 64.3996 198.5 81.3996 195.1C84.8996 194.4 88.0996 194.8 88.9996 198.7C89.9996 203 87.0996 204.5 83.2996 205.2C55.5996 210.7 27.8996 216.2 0.0996094 221.8C0.0996094 218.1 0.0996094 214.5 0.0996094 210.8Z" fill="#FED531"></path><path d="M0.0996094 178.8C4.89961 177.5 9.69961 175.8 14.5996 175.2C16.5996 175 19.7996 176.7 20.7996 178.5C22.2996 181.4 20.3996 184 17.0996 184.8C11.4996 186.2 5.79961 187.5 0.0996094 188.8C0.0996094 185.5 0.0996094 182.1 0.0996094 178.8Z" fill="#FED531"></path><path d="M0.0996094 109.8C3.49961 109.2 6.89961 108.4 10.3996 107.9C13.7996 107.4 16.4996 108.4 17.0996 112.1C17.5996 115.5 15.6996 117.4 12.3996 117.9C8.29961 118.6 4.19961 119.2 0.199609 119.8C0.0996094 116.5 0.0996094 113.1 0.0996094 109.8Z" fill="#FED531"></path><path d="M163.699 215.9C167.199 216.6 169.999 217.5 170.299 221.3C170.599 225.1 168.299 226.5 164.799 227C143.599 230.2 122.399 233.5 101.199 236.7C97.6993 237.2 94.5993 236.7 93.9993 232.5C93.4993 228.8 95.6993 227.1 99.1993 226.6C120.799 223.1 142.199 219.5 163.699 215.9Z" fill="#FED531"></path><path d="M182.5 80.7999C182.9 80.7999 184.4 80.3999 185.2 80.8999C187 82.1999 189.7 83.8999 189.9 85.4999C190 87.1999 187.6 90.3999 186 90.5999C177.3 91.7999 168.4 92.4999 159.6 92.5999C157.8 92.5999 154.9 89.9999 154.4 88.0999C153.6 84.8999 156 82.9999 159.4 82.6999C166.8 82.0999 174.3 81.4999 182.5 80.7999Z" fill="#FED531"></path><path d="M10.0996 313.8C16.6996 311.8 23.2996 309.8 29.7996 307.8C34.5996 314.9 39.6996 316.8 47.2996 315C81.2996 306.5 115.2 298 149.2 289.7C153.5 288.6 156.2 287.1 155.2 282.1C155 281 155.3 279.8 155.4 278.6C163.8 275.5 171.8 274.5 179.6 280C181.9 281.6 184.6 282.6 187.2 283.8C186.4 284.5 185.8 285.5 184.9 285.8C180.3 287.2 175.7 288.5 171 289.7C125.5 301.1 79.9996 312.4 34.5996 324.1C29.2996 325.4 25.2996 325.6 21.0996 321.6C17.7996 318.5 13.7996 316.4 10.0996 313.8Z" fill="#1C2FBC"></path><path d="M10.1004 313.8C13.8004 316.3 17.9004 318.5 21.1004 321.5C25.3004 325.5 29.3004 325.4 34.6004 324C80.0004 312.4 125.5 301.1 171 289.6C175.7 288.4 180.3 287.1 184.9 285.7C185.8 285.4 186.5 284.4 187.2 283.7C188.6 284.8 190.1 285.8 191.5 286.9C191.4 287.4 191.3 287.9 191.2 288.3C183.6 290.2 175.9 292.2 168.3 294.1C122.5 306 76.7004 318 30.8004 329.7C28.1004 330.4 24.6004 329.7 22.1004 328.3C17.3004 325.7 12.9004 322.4 8.60039 319.1C7.50039 318.3 7.10039 316.4 6.40039 315C7.50039 314.8 8.80039 314.3 10.1004 313.8Z" fill="#131E81"></path><path d="M42.1996 303.9C60.7996 299.2 79.3996 294.3 98.0996 290C114.7 286.1 131.5 282.9 148.1 279.4C148.5 279.3 149 279.4 149.7 279.4C150.3 282.2 150.3 284.1 146.8 284.9C112.2 293.4 77.6996 302.1 43.0996 310.8C42.7996 310.9 42.3996 310.8 42.0996 310.8C42.1996 308.5 42.1996 306.2 42.1996 303.9Z" fill="#1C2FBC"></path><path d="M42.1996 303.9C42.1996 306.2 42.1996 308.5 42.1996 310.8C39.9996 309.6 37.7996 308.3 35.5996 307.1C35.7996 306.5 35.9996 305.9 36.1996 305.3C38.1996 304.8 40.1996 304.4 42.1996 303.9Z" fill="#131E81"></path><path d="M11.3997 358.6C10.8997 355.9 11.5997 354.5 14.6997 353.7C52.7997 343.9 90.7997 333.8 128.9 323.9C159.9 315.8 190.9 307.6 221.9 299.7C224 299.2 227.3 299.8 229 301.2C246.8 315.7 264.3 330.4 282 345.1C295.5 356.4 309 367.7 322.5 379C323.5 379.8 324.3 380.9 325.3 381.8C321.2 383.1 317.1 384.5 313 385.7C273.7 396.8 234.4 407.9 195.1 419C165.1 427.5 135.1 436 105.1 444.8C101.1 446 98.7997 444.9 95.9997 442.2C69.4997 415.5 42.8997 389 16.3997 362.5C14.8997 361.1 13.0997 359.9 11.3997 358.6ZM28.1997 357.7C30.0997 359.9 31.2997 361.4 32.6997 362.8C52.6997 382.8 73.1997 402.5 92.5997 423.1C99.8997 430.8 106 432.5 116.4 429.6C175 413 233.8 397.5 292.5 381.5C297.6 380.1 302.7 378.5 308.9 376.7C296.6 366.5 285.4 357.2 274.2 347.9C259.9 336.1 245.3 324.6 231.3 312.3C225.8 307.5 220.8 304.8 213.8 308.1C213.7 308.2 213.5 308.2 213.3 308.3C166.5 320.8 119.5 333.4 72.5997 345.9C58.1997 349.7 43.7997 353.6 28.1997 357.7Z" fill="#1C2FBC"></path><path d="M11.3996 358.6C13.0996 359.9 14.8996 361.1 16.3996 362.5C42.8996 389 69.4996 415.5 95.8996 442.1C98.5996 444.9 101 445.9 105 444.7C135 436 165 427.5 195 418.9C234.3 407.8 273.6 396.7 312.9 385.6C317 384.4 321.1 383 325.2 381.7C328.8 386 328 388.5 322.8 390C275.6 403.4 228.4 416.8 181.2 430.2C155.5 437.5 129.8 444.6 104.2 452C100.8 453 98.9996 452 96.7996 449.8C83.9996 437.5 71.0996 425.2 58.0996 413.1C44.7996 400.6 31.4996 388 17.7996 376C11.9996 371.1 9.99963 365.7 11.3996 358.6Z" fill="#131E81"></path><path d="M347.2 311.7C353.4 316.3 359.6 320.8 365.8 325.4C366.8 326.2 367.5 327.5 368.3 328.5C374.5 335.8 373.2 344.9 364.6 349C353 354.5 341 357.3 329.6 347.9C324.5 343.7 319.2 339.9 314 335.9C314.9 334.5 315.9 333.2 316.6 331.8C323.1 319.3 332.7 311.7 347.2 311.7Z" fill="#1C2FBC"></path><path d="M310.2 333.8C298.4 328.6 301.2 322.5 306.6 315.2C308.9 312.1 312.9 310.2 316.2 307.7C320.4 307.8 324.6 307.9 327.9 311.3C320 317.7 313.4 324.4 310.2 333.8Z" fill="#1C2FBC"></path><path d="M310.2 333.8C313.4 324.4 320.1 317.7 327.9 311.4C324.6 308 320.4 307.8 316.2 307.8C320.3 306.9 324.3 305.9 328.4 305C331.8 308.5 335.6 310 340.2 306.9C342.6 308.5 344.9 310.1 347.3 311.7C332.7 311.7 323.2 319.4 316.7 331.8C315.9 333.2 314.9 334.6 314.1 335.9C312.7 335.2 311.4 334.5 310.2 333.8Z" fill="#131E81"></path><path d="M340.1 306.8C335.6 309.9 331.8 308.4 328.3 304.9C332.3 305.6 336.2 306.2 340.1 306.8Z" fill="#1C2FBC"></path><path d="M28.2002 357.7C43.8002 353.5 58.2002 349.7 72.6002 345.8C119.5 333.3 166.5 320.7 213.4 308.2C213.6 308.2 213.7 308.1 213.9 308C220.9 304.8 225.9 307.4 231.4 312.2C245.3 324.4 260 336 274.3 347.8C285.5 357.1 296.7 366.4 309 376.6C302.8 378.4 297.7 380.1 292.6 381.4C233.9 397.3 175 412.9 116.4 429.5C106 432.4 99.9002 430.7 92.6002 423C73.2002 402.4 52.8002 382.8 32.7002 362.7C31.3002 361.4 30.1002 359.9 28.2002 357.7ZM111.8 403.2C106.9 398.3 102.7 394 98.4002 389.7C97.9002 389.2 96.8002 388.8 96.2002 388.9C88.7002 390.8 81.2002 392.8 72.5002 395.2C77.7002 400.2 81.8002 404.3 86.1002 408.2C87.0002 409 88.8002 409.4 90.0002 409.1C96.8002 407.3 103.8 405.3 111.8 403.2ZM270 382.2C264.8 377.6 260.6 373.9 256.2 370.3C255.3 369.5 253.7 368.7 252.7 369C245.9 370.7 239.2 372.8 231.5 374.9C236.3 379.6 240.2 383.6 244.3 387.5C244.9 388.1 246.1 388.6 246.9 388.4C254.3 386.5 261.6 384.5 270 382.2ZM102.5 387.2C107.3 391.8 111.1 395.5 115 399.1C115.9 399.9 117.4 401 118.4 400.8C125.4 399.2 132.3 397.3 139.2 395.5C139.4 394.9 139.6 394.3 139.9 393.7C135.7 389.9 131.6 386.1 127.3 382.4C126.4 381.6 124.8 381 123.8 381.2C117 382.9 110.4 384.9 102.5 387.2ZM54.9002 377.7C59.8002 382.4 63.7002 386.2 67.7002 389.9C68.2002 390.4 69.3002 390.9 69.9002 390.7C77.3002 388.7 84.7002 386.6 92.1002 384.5C92.4002 383.9 92.8002 383.3 93.1002 382.7C89.1002 379.2 85.2002 375.7 81.1002 372.3C80.3002 371.6 78.7002 371.4 77.6002 371.7C70.5002 373.4 63.5002 375.3 54.9002 377.7ZM37.9002 360.5C42.5002 364.9 46.1002 368.5 49.8002 371.9C50.4002 372.5 51.7002 372.9 52.5002 372.7C60.0002 370.9 67.4002 368.9 76.2002 366.5C71.6002 361.9 68.0002 358.2 64.4002 354.7C63.9002 354.2 62.8002 353.8 62.2002 354C54.5002 356 46.9002 358.1 37.9002 360.5ZM240.2 390.3C234.9 385.4 230.7 381.5 226.4 377.6C225.9 377.1 224.8 376.8 224.1 376.9C217.5 378.7 211 380.6 203.9 382.6C208 387.2 211.4 391.1 215 394.8C215.8 395.6 217.7 396.2 218.8 395.9C225.5 394.4 232.2 392.5 240.2 390.3ZM249.9 364.3C245 360 241 356.4 236.8 353C235.9 352.2 234.3 351.6 233.2 351.9C226.6 353.4 220.2 355.1 213 356.9C217.7 361.6 221.6 365.7 225.6 369.6C226.2 370.2 227.5 370.8 228.2 370.6C235.1 368.7 242 366.6 249.9 364.3ZM298.3 374.5C293 370 288.3 366 283.6 362.2C282.9 361.6 281.7 361 280.9 361.3C274.4 363 268 364.8 260.7 366.9C265.2 371 268.7 374.7 272.6 377.6C274.6 379.1 277.8 380.1 280.2 379.6C285.9 378.4 291.6 376.4 298.3 374.5ZM120.9 376.8C121.3 376.1 121.7 375.4 122 374.7C118.2 371.5 114.5 368.2 110.7 365C110 364.4 108.8 363.7 108.1 363.9C100.8 365.5 93.6002 367.4 86.3002 369.2C86.1002 369.8 86.0002 370.4 85.8002 371C89.6002 374.5 93.4002 378 97.2002 381.4C98.0002 382.1 99.3002 382.6 100.2 382.4C107.1 380.5 114 378.6 120.9 376.8ZM91.3002 414.2C95.9002 418.6 99.5002 422.1 103.2 425.4C104.1 426.2 105.7 426.9 106.7 426.7C113.7 424.9 120.7 422.9 129.6 420.3C124.7 415.9 120.8 412.3 116.7 409C115.8 408.3 114.2 407.8 113.1 408.1C106.3 409.9 99.5002 411.9 91.3002 414.2ZM121.3 405.8C125.7 410.4 129.3 414.2 132.9 417.9C133.4 418.4 134.5 418.8 135.1 418.7C142.1 416.9 149 415.1 156.6 413C152.7 408.7 149.6 405 146.2 401.7C145.2 400.7 143.2 399.7 141.9 400C135.5 401.6 129 403.6 121.3 405.8ZM132.4 378.9C132.2 379.5 132 380.1 131.7 380.7C135.8 384.5 139.9 388.4 144 392.2C144.7 392.8 145.8 393.6 146.5 393.4C152.9 391.6 159.3 389.7 166.1 387.7C162.2 383.3 159 379.6 155.5 376C154.4 374.9 152.5 373.7 151.3 373.9C145 375.4 138.7 377.2 132.4 378.9ZM221.3 372.3C216.8 367.9 212.9 364 209 360.3C208.2 359.6 206.8 358.8 206 359C199.7 360.6 193.4 362.4 185.6 364.5C190.7 369.5 194.7 373.7 198.9 377.5C199.7 378.2 201.8 378 203.2 377.6C208.9 376 214.7 374.3 221.3 372.3ZM193.8 380C189 375.2 184.9 371 180.7 366.9C180.2 366.4 179.1 366.1 178.5 366.3C172.1 368 165.8 369.8 158.9 371.8C163.1 376.5 166.8 380.7 170.7 384.7C171.5 385.5 173.2 385.9 174.3 385.6C180.6 383.9 186.7 382.1 193.8 380ZM68.8002 352.2C73.2002 356.5 76.8002 360.2 80.5002 363.7C81.2002 364.4 82.7002 365 83.6002 364.7C90.4002 363 97.2002 361.1 104.6 359C100.9 354.9 97.9002 351.2 94.5002 347.8C93.6002 346.9 91.6002 346.4 90.3002 346.7C83.4002 348.3 76.7002 350.1 68.8002 352.2ZM210.9 398.3C206.8 393.7 203.4 389.9 199.8 386.3C198.9 385.4 197 384.8 195.8 385.1C189.6 386.6 183.5 388.5 177.3 390.2C177 390.7 176.7 391.3 176.4 391.8C180.4 395.5 184.4 399.2 188.5 402.7C189.2 403.3 190.7 403.8 191.6 403.5C197.8 402 203.8 400.2 210.9 398.3ZM149.9 397.7C153.8 402 156.8 405.7 160.2 409.1C161.3 410.2 163.6 411 165 410.6C171.2 409.2 177.3 407.3 184.7 405.3C180 400.8 176.1 397 172.1 393.3C171.4 392.6 170 392.1 169.1 392.3C162.9 394 156.8 395.8 149.9 397.7ZM142.6 354.3C142.3 354.8 141.9 355.4 141.5 355.9C145.2 359.2 148.9 362.5 152.6 365.7C153.4 366.4 154.8 367 155.7 366.8C162.3 365.3 168.9 363.6 176.9 361.5C172.2 357.1 168.7 353.6 165 350.3C164.1 349.5 162.3 349 161.1 349.3C155 350.9 148.8 352.7 142.6 354.3ZM276.9 356.8C271.4 352.2 266.8 348.4 262.3 344.6C261.7 344.2 260.7 343.9 260 344.1C254.1 345.7 248.1 347.5 241.3 349.5C246.4 354.2 250.6 358.1 255 361.8C255.6 362.3 256.9 362.3 257.7 362.1C263.6 360.5 269.6 358.8 276.9 356.8ZM125.2 337.2C129.2 341.4 132.6 345.1 136.1 348.5C136.9 349.3 138.6 349.9 139.6 349.6C146 348.1 152.3 346.3 159.1 344.5C155.5 340.5 152.6 336.9 149.3 333.7C148.1 332.5 145.7 331.7 144.1 332.1C137.9 333.5 131.9 335.4 125.2 337.2ZM114 362C118.7 366.4 122.4 369.9 126.2 373.4C126.9 374 128 374.7 128.7 374.5C135.1 372.9 141.5 371.1 148 369.3C148.3 368.8 148.5 368.2 148.8 367.7C145.3 364.7 142 361.4 138.3 358.7C136.8 357.6 134.3 356.8 132.5 357.2C126.9 358.2 121.4 360 114 362ZM98.5002 344.4C102.2 348.6 105.3 352.2 108.6 355.6C109.4 356.4 111.1 357 112.2 356.8C118.4 355.4 124.6 353.7 131.6 352C127.7 347.7 124.6 344.1 121.2 340.7C120.4 339.9 118.8 339 117.8 339.2C111.7 340.7 105.5 342.5 98.5002 344.4ZM203.5 354.3C199 350 195.7 346.8 192.2 343.7C191.3 342.9 189.7 341.9 188.7 342.1C182.5 343.6 176.4 345.4 170.3 347C169.9 347.7 169.5 348.3 169.1 349C173 352.3 176.8 355.6 180.8 358.8C181.5 359.4 182.7 359.8 183.5 359.6C189.7 358.1 195.8 356.4 203.5 354.3ZM212 330.5C207.9 326.7 204.6 323.4 201 320.5C199.6 319.4 197.4 318.2 195.9 318.5C190.1 319.6 184.5 321.3 178.1 323C182.4 327.3 186 331.1 189.8 334.7C190.6 335.4 192.3 335.8 193.4 335.5C199.5 334 205.5 332.3 212 330.5ZM196.1 340.2C200.1 344.2 203.5 347.8 207.1 351.3C207.8 352 209.2 352.6 210.1 352.3C216.5 350.7 222.7 349 230.2 346.9C226.6 343.5 223.8 340.9 221 338.3C218.2 335.6 215.3 334.3 211.2 335.8C206.6 337.6 201.7 338.6 196.1 340.2ZM153 329.8C156.8 334.1 160.2 337.9 163.7 341.6C164.3 342.2 165.6 342.8 166.3 342.7C172.5 341.2 178.6 339.5 185.5 337.6C181.2 333.3 177.6 329.7 173.8 326.2C173 325.5 171.6 324.9 170.7 325.1C165 326.4 159.3 328.1 153 329.8ZM256.3 339.9C251.7 336 247.7 332.5 243.7 329.2C243 328.6 241.8 328 241 328.2C235.2 329.6 229.4 331.3 222.8 333.1C227.3 337.2 231 340.5 234.8 343.7C235.7 344.4 237.3 344.9 238.4 344.7C244.2 343.3 249.8 341.7 256.3 339.9ZM204 316.3C208.7 320.6 212.6 324.1 216.6 327.6C217.3 328.2 218.4 328.8 219.2 328.6C224.8 327.3 230.3 325.7 237.1 323.9C231.7 319.5 227.4 315.8 222.9 312.3C222.1 311.7 220.6 311.7 219.6 312C214.6 313.2 209.7 314.7 204 316.3Z" fill="#131E81"></path><path d="M111.8 403.2C103.8 405.4 96.9004 407.4 89.9004 409.1C88.7004 409.4 86.9004 409 86.0004 408.2C81.7004 404.3 77.6004 400.2 72.4004 395.2C81.1004 392.9 88.6004 390.9 96.1004 388.9C96.8004 388.7 97.8004 389.2 98.3004 389.7C102.6 393.9 106.9 398.2 111.8 403.2Z" fill="#273CD9"></path><path d="M270 382.2C261.5 384.5 254.2 386.5 246.9 388.4C246.1 388.6 244.9 388.1 244.3 387.5C240.2 383.6 236.3 379.6 231.5 374.9C239.2 372.7 245.9 370.7 252.7 369C253.7 368.7 255.3 369.5 256.2 370.3C260.6 373.9 264.8 377.6 270 382.2Z" fill="#273CD9"></path><path d="M102.5 387.2C110.4 384.9 117.1 383 123.8 381.2C124.8 380.9 126.4 381.6 127.3 382.4C131.6 386.1 135.7 389.9 139.9 393.7C139.7 394.3 139.5 394.9 139.2 395.5C132.3 397.3 125.4 399.2 118.4 400.8C117.4 401 116 400 115 399.1C111 395.5 107.2 391.8 102.5 387.2Z" fill="#273CD9"></path><path d="M54.9004 377.7C63.6004 375.4 70.6004 373.4 77.6004 371.7C78.7004 371.4 80.3004 371.7 81.1004 372.3C85.2004 375.6 89.1004 379.2 93.1004 382.7C92.8004 383.3 92.4004 383.9 92.1004 384.5C84.7004 386.6 77.3004 388.7 69.9004 390.7C69.3004 390.9 68.2004 390.4 67.7004 389.9C63.6004 386.1 59.7004 382.3 54.9004 377.7Z" fill="#273CD9"></path><path d="M37.9004 360.5C46.9004 358.1 54.6004 356 62.2004 354C62.9004 353.8 63.9004 354.2 64.4004 354.7C68.1004 358.2 71.6004 361.9 76.2004 366.5C67.4004 368.8 60.0004 370.8 52.5004 372.7C51.7004 372.9 50.4004 372.5 49.8004 371.9C46.0004 368.5 42.4004 364.9 37.9004 360.5Z" fill="#273CD9"></path><path d="M240.2 390.3C232.2 392.5 225.5 394.4 218.8 396C217.7 396.3 215.8 395.7 215 394.9C211.4 391.2 208.1 387.3 203.9 382.7C211 380.7 217.5 378.8 224.1 377C224.8 376.8 225.8 377.2 226.4 377.7C230.7 381.5 234.9 385.4 240.2 390.3Z" fill="#273CD9"></path><path d="M249.9 364.3C242 366.6 235.1 368.7 228.1 370.5C227.4 370.7 226.1 370.1 225.5 369.5C221.5 365.6 217.6 361.5 212.9 356.8C220.1 355 226.6 353.3 233.1 351.8C234.2 351.6 235.8 352.2 236.7 352.9C241 356.4 245 360 249.9 364.3Z" fill="#273CD9"></path><path d="M298.3 374.5C291.7 376.4 286 378.4 280.2 379.5C277.8 379.9 274.6 378.9 272.6 377.5C268.6 374.6 265.2 370.9 260.7 366.8C268 364.8 274.5 362.9 280.9 361.2C281.7 361 282.9 361.6 283.6 362.1C288.3 366 292.9 370 298.3 374.5Z" fill="#273CD9"></path><path d="M120.9 376.8C114 378.7 107.2 380.6 100.3 382.3C99.4004 382.5 98.0004 382 97.3004 381.3C93.4004 377.9 89.7004 374.4 85.9004 370.9C86.1004 370.3 86.2004 369.7 86.4004 369.1C93.7004 367.3 100.9 365.5 108.2 363.8C109 363.6 110.1 364.3 110.8 364.9C114.6 368.1 118.3 371.4 122.1 374.6C121.6 375.4 121.2 376.1 120.9 376.8Z" fill="#273CD9"></path><path d="M91.2998 414.2C99.3998 411.9 106.3 409.9 113.1 408.1C114.2 407.8 115.8 408.3 116.7 409C120.8 412.4 124.6 415.9 129.6 420.3C120.7 422.8 113.7 424.9 106.7 426.7C105.7 427 104.1 426.2 103.2 425.4C99.4998 422.1 95.8998 418.6 91.2998 414.2Z" fill="#273CD9"></path><path d="M121.3 405.8C129 403.6 135.4 401.6 142 400C143.2 399.7 145.3 400.7 146.3 401.7C149.7 405.1 152.8 408.7 156.7 413C149.1 415 142.2 416.9 135.2 418.7C134.6 418.9 133.5 418.4 133 417.9C129.3 414.2 125.7 410.4 121.3 405.8Z" fill="#273CD9"></path><path d="M132.4 378.9C138.7 377.2 145 375.4 151.4 374C152.6 373.7 154.5 375 155.6 376C159.1 379.5 162.3 383.3 166.2 387.7C159.4 389.7 153 391.6 146.6 393.4C145.9 393.6 144.8 392.8 144.1 392.2C139.9 388.4 135.9 384.5 131.8 380.7C132 380.1 132.2 379.5 132.4 378.9Z" fill="#273CD9"></path><path d="M221.3 372.3C214.6 374.3 208.9 376 203.1 377.6C201.7 378 199.6 378.2 198.8 377.5C194.5 373.7 190.6 369.6 185.5 364.5C193.3 362.4 199.6 360.5 205.9 359C206.8 358.8 208.1 359.6 208.9 360.3C213 364 216.8 367.9 221.3 372.3Z" fill="#273CD9"></path><path d="M193.8 380C186.6 382.1 180.5 383.9 174.3 385.5C173.2 385.8 171.5 385.4 170.7 384.6C166.8 380.6 163.1 376.4 158.8 371.7C165.7 369.7 172 367.9 178.4 366.2C179.1 366 180.1 366.3 180.6 366.8C185 371 189.1 375.2 193.8 380Z" fill="#273CD9"></path><path d="M68.7998 352.2C76.6998 350.2 83.3998 348.3 90.1998 346.8C91.4998 346.5 93.4998 347 94.3998 347.9C97.7998 351.3 100.9 354.9 104.6 359.1C97.1998 361.1 90.4998 363 83.5998 364.8C82.6998 365 81.1998 364.5 80.4998 363.8C76.6998 360.2 73.1998 356.5 68.7998 352.2Z" fill="#273CD9"></path><path d="M210.9 398.3C203.8 400.3 197.7 402 191.7 403.5C190.8 403.7 189.3 403.3 188.6 402.7C184.5 399.1 180.5 395.4 176.5 391.8C176.8 391.3 177.1 390.7 177.4 390.2C183.5 388.4 189.7 386.6 195.9 385C197.1 384.7 199 385.3 199.9 386.2C203.4 389.8 206.8 393.7 210.9 398.3Z" fill="#273CD9"></path><path d="M149.9 397.7C156.8 395.8 162.9 394 169.1 392.4C170 392.2 171.4 392.7 172.1 393.4C176.1 397.1 180 400.9 184.7 405.4C177.3 407.4 171.2 409.3 165 410.7C163.6 411 161.3 410.2 160.2 409.2C156.8 405.8 153.8 402.1 149.9 397.7Z" fill="#273CD9"></path><path d="M142.6 354.3C148.8 352.6 154.9 350.9 161.2 349.4C162.4 349.1 164.2 349.6 165.1 350.4C168.8 353.6 172.3 357.2 177 361.6C169 363.6 162.4 365.4 155.8 366.9C154.9 367.1 153.5 366.5 152.7 365.8C148.9 362.6 145.3 359.3 141.6 356C141.9 355.4 142.3 354.9 142.6 354.3Z" fill="#273CD9"></path><path d="M276.9 356.8C269.6 358.8 263.6 360.5 257.6 362.1C256.8 362.3 255.5 362.3 254.9 361.8C250.6 358 246.3 354.1 241.2 349.5C248.1 347.5 254 345.7 259.9 344.1C260.6 343.9 261.6 344.2 262.2 344.6C266.8 348.4 271.4 352.2 276.9 356.8Z" fill="#273CD9"></path><path d="M125.2 337.2C131.9 335.3 137.9 333.5 144.1 332.1C145.7 331.8 148.1 332.6 149.3 333.7C152.6 336.9 155.5 340.5 159.1 344.5C152.3 346.3 146 348.1 139.6 349.6C138.6 349.8 136.9 349.3 136.1 348.5C132.6 345.1 129.2 341.4 125.2 337.2Z" fill="#273CD9"></path><path d="M114 362C121.4 360 126.8 358.2 132.5 357.1C134.3 356.7 136.8 357.5 138.3 358.6C142 361.3 145.3 364.6 148.8 367.6C148.5 368.1 148.3 368.7 148 369.2C141.6 371 135.2 372.8 128.7 374.4C128 374.6 126.8 373.9 126.2 373.3C122.4 369.9 118.7 366.4 114 362Z" fill="#273CD9"></path><path d="M98.5 344.4C105.5 342.5 111.6 340.7 117.9 339.2C118.9 339 120.5 339.8 121.3 340.7C124.6 344.1 127.8 347.8 131.7 352C124.7 353.8 118.5 355.4 112.3 356.8C111.2 357 109.5 356.4 108.7 355.6C105.4 352.2 102.3 348.5 98.5 344.4Z" fill="#273CD9"></path><path d="M203.5 354.3C195.8 356.4 189.7 358.2 183.5 359.7C182.7 359.9 181.5 359.5 180.8 358.9C176.9 355.7 173 352.3 169.1 349.1C169.5 348.4 169.9 347.8 170.3 347.1C176.4 345.4 182.5 343.6 188.7 342.2C189.7 342 191.2 342.9 192.2 343.8C195.6 346.7 198.9 350 203.5 354.3Z" fill="#273CD9"></path><path d="M212 330.5C205.5 332.3 199.5 334 193.4 335.5C192.3 335.8 190.6 335.4 189.8 334.7C186 331.1 182.3 327.3 178.1 323C184.5 321.3 190.1 319.6 195.9 318.5C197.4 318.2 199.6 319.4 201 320.5C204.6 323.4 207.9 326.7 212 330.5Z" fill="#273CD9"></path><path d="M196.1 340.2C201.7 338.6 206.6 337.6 211.2 335.9C215.3 334.4 218.2 335.7 221 338.4C223.8 341 226.6 343.6 230.2 347C222.7 349 216.4 350.8 210.1 352.4C209.2 352.6 207.8 352 207.1 351.4C203.6 347.8 200.1 344.2 196.1 340.2Z" fill="#273CD9"></path><path d="M153 329.8C159.3 328.1 165 326.4 170.7 325C171.6 324.8 173 325.4 173.8 326.1C177.6 329.6 181.1 333.3 185.5 337.5C178.6 339.4 172.4 341.1 166.3 342.6C165.5 342.8 164.3 342.2 163.7 341.5C160.2 337.9 156.8 334.1 153 329.8Z" fill="#273CD9"></path><path d="M256.3 339.9C249.9 341.7 244.2 343.3 238.4 344.7C237.3 345 235.7 344.5 234.8 343.7C231 340.5 227.4 337.1 222.8 333.1C229.4 331.3 235.2 329.6 241 328.2C241.8 328 243 328.6 243.7 329.2C247.7 332.5 251.7 336 256.3 339.9Z" fill="#273CD9"></path><path d="M204 316.3C209.7 314.7 214.6 313.3 219.5 312C220.5 311.7 222.1 311.7 222.8 312.3C227.3 315.8 231.7 319.5 237 323.9C230.2 325.7 224.7 327.3 219.1 328.6C218.3 328.8 217.2 328.2 216.5 327.6C212.6 324.1 208.7 320.5 204 316.3Z" fill="#273CD9"></path><path d="M209.5 539.3C209.5 541.4 209.5 542.9 209.5 544.3C209.5 600.2 209.5 656.2 209.6 712.1C209.6 716.2 208.4 717.8 204.6 719C176.2 727.6 147.9 736.5 119.5 745.2C118.1 745.6 116.6 745.8 114.6 746.3C114.6 744.4 114.6 742.8 114.6 741.2C114.6 684.6 114.7 628 114.5 571.4C114.5 566.5 116.3 565 120.6 563.8C148.3 556.3 175.8 548.5 203.5 540.8C205.3 540.3 207.2 539.9 209.5 539.3ZM197.5 609.9C181.6 614.8 166.5 619.4 151.6 624.1C150.4 624.5 148.7 626.3 148.7 627.4C148.5 640 148.6 652.6 148.6 666C164.6 660.7 180 655.6 195.3 650.4C196.2 650.1 197.4 648.5 197.4 647.5C197.6 635.2 197.5 622.9 197.5 609.9ZM198.8 557.1C190.9 559.4 183.1 561.7 175.4 563.9C159.5 568.5 143.5 573.1 127.7 577.9C126.1 578.4 124.1 580.1 123.9 581.5C123.3 584.7 123.7 588 123.7 591.7C125.1 591.4 125.9 591.3 126.6 591.1C147.6 585 168.7 579 189.6 572.8C200.4 569.6 200.4 569.5 199.4 558.2C199.3 558 199.2 557.9 198.8 557.1ZM123.6 619.7C125.7 619.2 126.8 619 127.9 618.6C149.2 612.4 170.5 606.1 191.8 600C199.9 597.7 202 593.3 198.3 585.2C190.7 587.4 183.1 589.7 175.4 591.9C159.5 596.5 143.6 601.2 127.6 605.7C124.5 606.6 123.2 608.1 123.4 611.3C123.8 613.9 123.6 616.5 123.6 619.7ZM133.8 654.9C130.2 654.8 126.7 658.4 126.6 662.3C126.6 665.9 129.8 669.7 133.1 669.9C136.7 670.1 140.3 666.6 140.5 662.7C140.7 658.9 137.4 655 133.8 654.9ZM140.5 635.5C140.6 631.7 137.1 627.9 133.5 627.9C130.1 627.9 126.7 631.4 126.6 635C126.4 638.8 129.8 642.7 133.4 642.8C137 643 140.5 639.3 140.5 635.5Z" fill="#A7CEFB"></path><path d="M85.1 552.5C93.1 556.9 100.6 561 108 565.3C108.9 565.9 109.5 567.9 109.5 569.2C109.6 627.5 109.5 685.7 109.5 744C109.5 744.3 109.3 744.6 109 745.6C101.3 741.5 93.7 737.7 86.2 733.4C85.2 732.8 84.6 730.6 84.6 729.1C84.5 671.5 84.5 613.9 84.5 556.3C84.6 555.4 84.9 554.4 85.1 552.5Z" fill="#5244FD"></path><path d="M205.1 535.2C174 543.9 144.2 552.2 114.4 560.4C112.8 560.8 110.7 560.6 109.3 559.9C101.9 556.1 94.7004 552.1 87.5004 547.8C86.1004 547 85.5004 544.8 84.7004 543.2C84.4004 542.7 84.6004 541.9 84.7004 541.2C84.9004 535.9 83.3004 529.3 85.9004 525.8C88.3004 522.5 95.2004 522.4 100.1 521.1C113.7 517.4 127.3 513.7 140.9 510.1C142.5 509.7 144.6 509.6 146.1 510.2C165.3 518.2 184.5 526.4 205.1 535.2Z" fill="#E9FAFF"></path><path d="M197.5 609.9C197.5 622.9 197.6 635.2 197.4 647.5C197.4 648.5 196.2 650.1 195.3 650.4C180 655.6 164.6 660.7 148.6 666C148.6 652.6 148.5 640 148.7 627.4C148.7 626.2 150.4 624.5 151.6 624.1C166.5 619.3 181.6 614.8 197.5 609.9Z" fill="#5244FD"></path><path d="M198.8 557.1C199.2 557.9 199.4 558 199.4 558.1C200.4 569.4 200.4 569.5 189.6 572.7C168.6 578.9 147.6 584.9 126.6 591C125.8 591.2 125 591.3 123.7 591.6C123.7 587.9 123.3 584.6 123.9 581.4C124.1 580 126.2 578.3 127.7 577.8C143.6 573 159.5 568.5 175.4 563.8C183.1 561.7 190.9 559.4 198.8 557.1Z" fill="#5244FD"></path><path d="M123.6 619.7C123.6 616.5 123.8 613.9 123.6 611.2C123.3 608 124.6 606.5 127.8 605.6C143.7 601.1 159.6 596.4 175.6 591.8C183.2 589.6 190.9 587.3 198.5 585.1C202.1 593.2 200.1 597.6 192 599.9C170.7 606 149.4 612.3 128.1 618.5C126.8 619 125.6 619.2 123.6 619.7Z" fill="#5244FD"></path><path d="M133.8 654.9C137.4 655 140.7 658.9 140.6 662.7C140.4 666.6 136.8 670.1 133.2 669.9C129.9 669.7 126.6 665.9 126.7 662.3C126.6 658.4 130.2 654.8 133.8 654.9Z" fill="#5244FD"></path><path d="M140.5 635.5C140.5 639.4 136.9 643 133.3 642.9C129.7 642.8 126.3 638.9 126.5 635.1C126.7 631.4 130 628 133.4 628C137.1 627.9 140.6 631.6 140.5 635.5Z" fill="#5244FD"></path><path d="M79.6 628.3C79.6 594.5 79.7 560.7 79.5 526.9C79.5 523 80.4 521.1 84.4 520C103 515.2 121.6 509.9 140.2 505C142.5 504.4 145.5 504.5 147.7 505.5C168.6 514.2 189.3 523.1 210.2 531.8C213.5 533.2 214.5 534.9 214.5 538.4C214.4 597.7 214.4 656.9 214.5 716.2C214.5 719.6 213.9 721.4 210.2 722.6C178.4 732.2 146.7 742.1 114.9 751.7C113.1 752.2 110.6 752 108.9 751.1C100.3 746.8 91.9 742 83.3 737.7C80.3 736.2 79.5 734.4 79.5 731.1C79.7 696.9 79.6 662.6 79.6 628.3ZM209.5 539.3C207.2 539.9 205.3 540.3 203.4 540.8C175.8 548.5 148.2 556.3 120.5 563.8C116.2 565 114.3 566.5 114.4 571.4C114.6 628 114.5 684.6 114.5 741.2C114.5 742.8 114.5 744.4 114.5 746.3C116.5 745.9 118 745.7 119.4 745.2C147.8 736.4 176.1 727.6 204.5 719C208.4 717.8 209.5 716.2 209.5 712.1C209.3 656.2 209.4 600.2 209.4 544.3C209.5 542.9 209.5 541.4 209.5 539.3ZM85.1 552.5C84.9 554.5 84.6 555.4 84.6 556.3C84.6 613.9 84.6 671.5 84.7 729.1C84.7 730.6 85.2 732.8 86.3 733.4C93.8 737.6 101.4 741.5 109.1 745.6C109.4 744.6 109.6 744.3 109.6 744C109.6 685.7 109.6 627.5 109.6 569.2C109.6 567.9 109 565.9 108.1 565.3C100.7 561 93.1 556.9 85.1 552.5ZM205.1 535.2C184.5 526.5 165.3 518.3 146 510.2C144.5 509.6 142.4 509.7 140.8 510.1C127.2 513.7 113.6 517.4 100 521.1C95.1 522.5 88.2 522.5 85.8 525.8C83.2 529.3 84.8 536 84.6 541.2C84.6 541.9 84.4 542.6 84.6 543.2C85.4 544.8 86 547 87.4 547.8C94.5 552 101.8 556 109.2 559.9C110.6 560.7 112.8 560.9 114.4 560.4C144.2 552.2 174 543.9 205.1 535.2Z" fill="#5765FE"></path></g><defs><clipPath id="clip0_451_1929"><rect width="517.2" height="756.8" fill="white" transform="translate(-1)"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "controller-md") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "166",
          height: "550",
          viewBox: "0 0 166 550",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.90977 70.0515V512.416C2.8319 516.621 4.54498 520.904 7.89328 524.408C14.512 531.416 22.9217 536.01 32.1879 539.125C53.2121 546.055 74.7814 548.313 96.9736 546.444C109.822 545.354 122.203 543.174 134.272 538.891C143.305 535.776 151.714 531.338 158.022 524.174C161.214 520.592 163.161 516.699 163.005 512.416V70.0515" fill="url(#paint0_linear_1357_959)"></path><path d="M2.90977 70.0515V512.416C2.8319 516.621 4.54498 520.904 7.89328 524.408C14.512 531.416 22.9217 536.01 32.1879 539.125C53.2121 546.055 74.7814 548.313 96.9736 546.444C109.822 545.354 122.203 543.174 134.272 538.891C143.305 535.777 151.714 531.338 158.022 524.174C161.214 520.592 163.161 516.699 163.005 512.416V70.0515" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M80.9331 38.2815C104.215 38.8266 124.928 41.4741 143.85 50.9739C151.481 54.7894 158.411 59.5393 161.837 67.6375C164.641 74.1005 162.538 79.7848 158.022 84.7683C151.637 91.9321 143.305 96.3706 134.272 99.4853C122.203 103.768 109.744 105.87 96.9738 107.038C74.7816 108.907 53.2123 106.727 32.1881 99.7189C22.844 96.6042 14.5122 92.01 7.89346 85.0019C1.3526 78.0717 1.27473 68.4162 7.65986 61.486C14.045 54.5558 22.2211 50.0395 31.1758 46.8469C43.0895 42.7199 55.3147 39.8388 68.0071 39.2938C72.9128 38.9823 78.052 38.4372 80.9331 38.2815Z" fill="#EA46E3" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M81.3832 63.1253C81.3832 63.1253 80.7519 71.4676 77.3376 76.1445C73.9232 80.8214 60.6529 99.5288 40.3096 87.521C19.9595 75.5132 13.3889 49.2237 10.2325 39.3677C7.07613 29.5117 12.8866 12.8271 23.5028 5.24499C23.5028 5.24499 25.6206 2.84205 37.2619 2.71987C48.9031 2.59769 102.365 0.948242 102.365 0.948242C102.365 0.948242 113.232 1.65421 118.16 8.31313C123.088 14.9788 144.701 46.9498 144.572 64.897C144.572 64.897 144.701 75.5132 128.647 82.2129C128.647 82.2129 119.171 83.7266 112.594 81.2015C106.016 78.6764 101.849 76.5246 92.7529 61.7406C92.7529 61.7338 85.0418 61.1025 81.3832 63.1253Z" fill="#74B4FB"></path><path d="M19.1992 13.4585C19.1992 13.4585 9.46532 26.3487 13.891 40.7594C18.3167 55.1701 23.2447 66.1597 29.6864 74.6309C36.1349 83.0954 55.0867 98.5175 72.0225 78.2964C72.0225 78.2964 49.1473 83.1023 35.1167 58.5776C21.0929 34.0598 18.5679 26.0908 19.1992 13.4585Z" fill="#A7CEFB"></path><path d="M27.5426 6.50731C27.5426 6.50731 19.3292 10.0438 22.6146 22.4317C25.8999 34.8196 30.9569 48.2121 40.5618 60.2199C50.1666 72.2277 57.7487 77.9159 72.0304 74.6306C72.0304 74.6306 77.1145 75.2619 76.972 64.2655C76.8295 53.2691 76.972 49.1013 76.972 49.1013C76.972 49.1013 90.6089 46.8274 101.354 47.8388C101.354 47.8388 104.259 48.2053 105.902 50.8662C107.545 53.527 115.887 64.3944 122.458 66.4172C129.028 68.44 139.522 71.7254 141.036 66.4172C142.55 61.1091 141.538 54.4095 127.515 28.2489C113.491 2.08841 107.036 4.10442 99.7046 3.85326C92.3737 3.60211 32.7217 5.49592 32.7217 5.49592C32.7217 5.49592 28.5404 5.92355 27.5426 6.50731Z" fill="#E9FAFF"></path><path d="M56.6416 43.0402L56.085 43.3592C53.879 44.6353 51.0552 43.8751 49.7859 41.669L39.1017 23.1652C37.8256 20.9592 38.5859 18.1354 40.7919 16.8661L41.3486 16.547C43.5546 15.2709 46.3784 16.0312 47.6477 18.2372L58.3318 36.741C59.6012 38.9471 58.8477 41.764 56.6416 43.0402Z" fill="#74B4FB"></path><path d="M32.7611 32.9261L32.6728 32.2949C32.3131 29.7698 34.0644 27.4347 36.5894 27.075L57.7405 24.0544C60.2656 23.6947 62.6006 25.4459 62.9604 27.971L63.0486 28.6023C63.4084 31.1274 61.6571 33.4624 59.132 33.8222L37.981 36.8428C35.4626 37.2025 33.1208 35.4445 32.7611 32.9261Z" fill="#74B4FB"></path><path d="M103.244 30.4127C104.454 28.8941 103.455 26.0854 101.013 24.1393C98.5711 22.1932 95.6104 21.8466 94.4002 23.3651C93.19 24.8837 94.1886 27.6924 96.6307 29.6385C99.0727 31.5846 102.033 31.9313 103.244 30.4127Z" fill="#74B4FB"></path><path d="M108.527 20.8145C109.737 19.2959 108.738 16.4873 106.296 14.5411C103.854 12.595 100.894 12.2484 99.6835 13.767C98.4733 15.2855 99.4718 18.0943 101.914 20.0404C104.356 21.9865 107.317 22.3331 108.527 20.8145Z" fill="#74B4FB"></path><path d="M122.631 29.0133C123.841 27.4947 122.843 24.686 120.401 22.7399C117.959 20.7938 114.998 20.4472 113.788 21.9657C112.578 23.4843 113.576 26.293 116.018 28.2391C118.46 30.1852 121.421 30.5318 122.631 29.0133Z" fill="#74B4FB"></path><path d="M118.628 37.9486C119.839 36.43 118.84 33.6213 116.398 31.6752C113.956 29.729 110.995 29.3825 109.785 30.901C108.575 32.4196 109.573 35.2283 112.015 37.1744C114.457 39.1205 117.418 39.4671 118.628 37.9486Z" fill="#74B4FB"></path><path d="M80.2422 60.2132V51.7691C80.2422 51.7691 99.8524 48.4499 103.172 52.5226C103.172 52.5226 114.786 73.341 137.566 72.1328C137.566 72.1328 132.909 81.086 119.463 79.5248C106.023 77.9636 100.585 68.2365 95.0262 59.4598C95.0262 59.4598 88.6931 57.9461 80.2422 60.2132Z" fill="#A7CEFB"></path><defs><linearGradient id="paint0_linear_1357_959" x1="83.0245" y1="70.0232" x2="83.0245" y2="547.109" gradientUnits="userSpaceOnUse"><stop stop-color="#EA46E3"></stop><stop offset="0.776042" stop-color="#EA46E3" stop-opacity="0"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "controller") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "219",
          height: "733",
          viewBox: "0 0 219 733",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.0327 92.4585V684.33C1.92851 689.956 4.22057 695.686 8.7005 700.375C17.5562 709.751 28.8081 715.898 41.206 720.065C69.3358 729.338 98.1949 732.359 127.887 729.859C145.078 728.4 161.643 725.483 177.792 719.753C189.877 715.586 201.129 709.647 209.568 700.062C213.84 695.27 216.444 690.06 216.236 684.33V92.4585" fill="url(#paint0_linear_1357_563)"></path><path d="M2.0327 92.4585V684.33C1.92851 689.956 4.22057 695.686 8.7005 700.375C17.5562 709.751 28.8081 715.898 41.206 720.065C69.3358 729.338 98.1949 732.359 127.887 729.859C145.078 728.4 161.643 725.483 177.792 719.753C189.877 715.586 201.129 709.647 209.568 700.062C213.84 695.27 216.444 690.06 216.236 684.33V92.4585" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M106.426 49.9512C137.577 50.6805 165.29 54.2227 190.607 66.9332C200.817 72.0383 210.09 78.3935 214.674 89.2287C218.425 97.876 215.612 105.481 209.569 112.149C201.026 121.734 189.878 127.673 177.793 131.84C161.644 137.57 144.975 140.383 127.888 141.946C98.1957 144.446 69.3366 141.529 41.2068 132.153C28.7047 127.985 17.557 121.838 8.70129 112.462C-0.0501995 103.189 -0.154383 90.2705 8.38874 80.9981C16.9319 71.7257 27.8712 65.683 39.8524 61.4115C55.7927 55.8897 72.1496 52.0349 89.1317 51.3056C95.6953 50.8888 102.571 50.1595 106.426 49.9512Z" fill="#EA46E3" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M107.029 83.1912C107.029 83.1912 106.184 94.353 101.616 100.611C97.0474 106.868 79.292 131.898 52.0733 115.832C24.8454 99.7659 16.054 64.5913 11.8309 51.4042C7.60777 38.2171 15.382 15.8935 29.5862 5.74893C29.5862 5.74893 32.4198 2.53387 47.9955 2.37039C63.5711 2.20691 135.101 0 135.101 0C135.101 0 149.641 0.944562 156.235 9.85401C162.828 18.7725 191.745 61.5488 191.573 85.5616C191.573 85.5616 191.745 99.7659 170.267 108.73C170.267 108.73 157.588 110.755 148.788 107.377C139.987 103.998 134.411 101.119 122.241 81.3385C122.241 81.3294 111.924 80.4848 107.029 83.1912Z" fill="#74B4FB"></path><path d="M23.8274 16.7383C23.8274 16.7383 10.8038 33.985 16.7253 53.2661C22.6468 72.5472 29.2403 87.251 37.8591 98.5853C46.487 109.911 71.8439 130.545 94.5036 103.49C94.5036 103.49 63.8972 109.92 45.1247 77.1064C26.3613 44.3022 22.9828 33.6399 23.8274 16.7383Z" fill="#A7CEFB"></path><path d="M34.9908 7.43794C34.9908 7.43794 24.0016 12.1697 28.3972 28.7443C32.7929 45.319 39.559 63.2378 52.4101 79.3039C65.2611 95.3699 75.4057 102.981 94.5143 98.585C94.5143 98.585 101.317 99.4296 101.126 84.7168C100.935 70.0039 101.126 64.4275 101.126 64.4275C101.126 64.4275 119.372 61.3851 133.749 62.7383C133.749 62.7383 137.636 63.2287 139.833 66.7889C142.031 70.349 153.193 84.8893 161.985 87.5957C170.776 90.3022 184.817 94.6979 186.842 87.5957C188.867 80.4936 187.514 71.5297 168.751 36.5276C149.987 1.52558 141.35 4.22293 131.542 3.8869C121.733 3.55086 41.9204 6.08473 41.9204 6.08473C41.9204 6.08473 36.3258 6.65688 34.9908 7.43794Z" fill="#E9FAFF"></path><path d="M73.9254 56.3177L73.1807 56.7445C70.2291 58.452 66.451 57.4347 64.7526 54.4831L50.4575 29.7256C48.7501 26.7739 49.7673 22.9958 52.719 21.2974L53.4637 20.8706C56.4154 19.1632 60.1934 20.1804 61.8918 23.132L76.1869 47.8896C77.8852 50.8412 76.8771 54.6102 73.9254 56.3177Z" fill="#74B4FB"></path><path d="M41.9737 42.7854L41.8556 41.9407C41.3743 38.5622 43.7175 35.438 47.096 34.9567L75.3955 30.9152C78.774 30.4339 81.8982 32.777 82.3796 36.1555L82.4976 37.0001C82.979 40.3786 80.6358 43.5028 77.2573 43.9842L48.9578 48.0257C45.5884 48.507 42.4551 46.1548 41.9737 42.7854Z" fill="#74B4FB"></path><path d="M136.278 39.4226C137.897 37.3908 136.561 33.6329 133.293 31.029C130.026 28.4252 126.065 27.9614 124.445 29.9932C122.826 32.025 124.162 35.783 127.43 38.3868C130.697 40.9907 134.658 41.4544 136.278 39.4226Z" fill="#74B4FB"></path><path d="M143.346 26.5806C144.965 24.5488 143.629 20.7908 140.362 18.187C137.094 15.5831 133.133 15.1193 131.514 17.1511C129.895 19.1829 131.231 22.9409 134.498 25.5448C137.765 28.1486 141.727 28.6124 143.346 26.5806Z" fill="#74B4FB"></path><path d="M162.217 37.5501C163.836 35.5183 162.5 31.7603 159.233 29.1565C155.966 26.5526 152.004 26.0889 150.385 28.1207C148.766 30.1525 150.102 33.9104 153.369 36.5143C156.637 39.1181 160.598 39.5819 162.217 37.5501Z" fill="#74B4FB"></path><path d="M156.862 49.5051C158.481 47.4733 157.145 43.7154 153.877 41.1115C150.61 38.5077 146.649 38.0439 145.029 40.0757C143.41 42.1075 144.746 45.8655 148.014 48.4693C151.281 51.0732 155.242 51.5369 156.862 49.5051Z" fill="#74B4FB"></path><path d="M105.502 79.2949V67.9969C105.502 67.9969 131.74 63.5558 136.181 69.005C136.181 69.005 151.72 96.8595 182.2 95.2429C182.2 95.2429 175.969 107.222 157.978 105.133C139.995 103.044 132.721 90.0299 125.283 78.2868C125.283 78.2868 116.809 76.2615 105.502 79.2949Z" fill="#A7CEFB"></path><defs><linearGradient id="paint0_linear_1357_563" x1="109.224" y1="92.4206" x2="109.224" y2="730.749" gradientUnits="userSpaceOnUse"><stop stop-color="#EA46E3"></stop><stop offset="0.776042" stop-color="#EA46E3" stop-opacity="0"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "crown-slime-md") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "159",
          height: "564",
          viewBox: "0 0 159 564",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.26513 103.161V527.759C2.19039 531.795 3.83467 535.906 7.04849 539.269C13.4014 545.995 21.4733 550.405 30.3674 553.395C50.5472 560.047 71.2501 562.214 92.551 560.42C104.883 559.374 116.767 557.281 128.351 553.171C137.021 550.181 145.093 545.921 151.147 539.045C154.211 535.607 156.08 531.87 155.931 527.759V103.161" fill="url(#paint0_linear_1357_957)"></path><path d="M2.26513 103.161V527.759C2.19039 531.795 3.83467 535.906 7.04849 539.269C13.4014 545.995 21.4733 550.405 30.3674 553.395C50.5472 560.047 71.2501 562.214 92.551 560.42C104.883 559.374 116.767 557.281 128.351 553.171C137.021 550.181 145.093 545.921 151.147 539.045C154.211 535.607 156.08 531.87 155.931 527.759V103.161" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M77.1538 72.6672C99.501 73.1904 119.382 75.7316 137.544 84.8498C144.868 88.5121 151.52 93.0712 154.809 100.844C157.499 107.048 155.481 112.504 151.146 117.287C145.018 124.163 137.021 128.423 128.351 131.413C116.766 135.524 104.808 137.542 92.5502 138.663C71.2493 140.456 50.5464 138.364 30.3666 131.637C21.3978 128.647 13.4006 124.238 7.04771 117.511C0.769548 110.859 0.694798 101.592 6.89822 94.9397C13.1016 88.2879 20.8746 83.953 29.4697 80.8886C40.9049 76.9274 52.6391 74.162 64.8217 73.6389C69.4556 73.3399 74.3137 72.8167 77.1538 72.6672Z" fill="#5244FD" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M121.161 81.1353C121.161 112.085 100.727 114.387 75.5169 114.387C50.3071 114.387 30.5234 106.046 30.5234 84.0427C30.5234 65.6791 51.0919 46.2317 76.3017 46.2317C101.511 46.2317 121.161 65.2381 121.161 81.1353Z" fill="#FEBC2E"></path><path d="M116.998 81.1504C116.998 108.034 98.3431 110.037 75.3382 110.037C52.3332 110.037 34.2686 102.795 34.2686 83.6766C34.2686 67.7271 53.0432 50.8284 76.0557 50.8284C99.0681 50.8284 116.998 67.331 116.998 81.1504Z" fill="#FEE65C"></path><path d="M41.8687 73.6688C41.8687 73.6688 40.4262 76.6211 42.2498 77.518C44.0735 78.4149 45.4039 74.6778 45.4039 74.6778C45.4039 74.6778 48.1468 68.1605 55.0528 64.2965C55.0528 64.2965 57.7808 63.4967 56.7718 61.4713C55.7628 59.4458 52.2874 61.6357 52.2874 61.6357C52.2874 61.6357 44.35 65.6791 41.8687 73.6688Z" fill="#FDFDFD"></path><path d="M84.0065 43.982C83.0274 44.3781 81.9063 43.8997 81.5177 42.9206L75.0377 26.7768C74.6416 25.7977 75.1199 24.6766 76.099 24.288C77.0781 23.8918 78.1992 24.3702 78.5879 25.3492L85.0678 41.4931C85.4714 42.4722 84.9931 43.5933 84.0065 43.982Z" fill="#FDFDFD"></path><path d="M61.9214 45.9252C61.316 46.8893 60.0529 47.1733 59.0888 46.5754L50.7478 41.3436C49.7836 40.7382 49.4996 39.4751 50.0975 38.511C50.7029 37.5468 51.966 37.2628 52.9302 37.8607L61.2712 43.0925C62.2353 43.6979 62.5268 44.961 61.9214 45.9252Z" fill="#FDFDFD"></path><path d="M104.884 64.0613C105.4 63.3286 104.03 61.4776 101.825 59.9269C99.6203 58.3762 97.4152 57.7131 96.8999 58.4458C96.3845 59.1785 97.7542 61.0296 99.9591 62.5802C102.164 64.1309 104.369 64.794 104.884 64.0613Z" fill="#FDFDFD"></path><path d="M72.0408 41.1792C72.6424 39.3304 72.4395 37.6071 71.5877 37.3299C70.736 37.0528 69.5579 38.3268 68.9564 40.1755C68.3548 42.0243 68.5577 43.7476 69.4094 44.0247C70.2611 44.3019 71.4393 43.0279 72.0408 41.1792Z" fill="#FDFDFD"></path><path d="M127.774 71.7704V84.1175C127.916 98.176 114.583 97.5333 114.583 97.5333C104.575 97.5333 101.832 91.0907 101.077 87.3238H92.4224C90.7333 99.4766 75.3294 98.8861 75.3294 98.8861C62.4666 98.8861 58.782 92.3538 57.7356 88.3926L26.9651 85.0368C26.9651 85.0368 23.6542 85.0816 23.9382 82.0696C24.2222 79.0576 27.2566 79.7302 27.2566 79.7302L57.3171 82.3461V71.9125C57.3171 70.186 58.7147 68.7883 60.4412 68.7883H89.4627C91.1892 68.7883 92.5794 70.186 92.5794 71.9125V81.1802H100.801V71.7704C100.801 70.1262 101.87 68.7883 103.185 68.7883H125.39C126.706 68.7883 127.774 70.1262 127.774 71.7704Z" fill="#1B0560"></path><path d="M61.959 72.503C61.959 72.503 61.518 79.7677 62.1085 83.9755C62.1085 83.9755 62.3551 78.0861 63.8798 74.7003C63.8798 74.7003 68.9547 71.9873 79.6275 73.2877C79.6275 73.2952 76.0026 71.21 61.959 72.503Z" fill="#FDFDFD"></path><path d="M89.2532 84.4688C89.2532 84.4688 90.0006 94.9622 80.2021 94.6334C80.2021 94.6334 86.3009 92.5033 89.2532 84.4688Z" fill="#FDFDFD"></path><path d="M103.963 72.0022C103.963 72.0022 103.761 80.1563 105.039 83.9755C105.039 83.9755 104.449 80.7991 105.458 74.207C105.458 74.207 109.86 71.4118 118.163 72.7122C118.163 72.7122 114.897 70.7167 103.963 72.0022Z" fill="#FDFDFD"></path><path d="M125.211 83.9753C125.211 83.9753 125.794 94.4689 118.171 94.14C118.163 94.14 122.909 92.0024 125.211 83.9753Z" fill="#FDFDFD"></path><path d="M39.2969 23.4211L49.2896 57.4875C49.2896 57.4875 74.6788 58.9973 96.2712 55.2678L102.295 17.9351L87.5938 36.1044L74.0285 0.169434L64.2301 38.4513L39.2969 23.4211Z" fill="#F28301"></path><path d="M52.1451 54.64L44.9551 30.9848L65.9196 43.7953L74.6119 11.1414L86.5703 43.2272L97.4375 28.9743L93.9845 52.5548C93.992 52.5548 69.2605 56.2917 52.1451 54.64Z" fill="#FEB019"></path><defs><linearGradient id="paint0_linear_1357_957" x1="96.7358" y1="132.459" x2="96.7358" y2="542.034" gradientUnits="userSpaceOnUse"><stop stop-color="#5244FD"></stop><stop offset="1" stop-color="#EA46E3"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "crown-slime") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "211",
          height: "753",
          viewBox: "0 0 211 753",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.60092 137.8V705.9C2.50092 711.3 4.70091 716.8 9.00091 721.3C17.5009 730.3 28.3009 736.2 40.2009 740.2C67.2009 749.1 94.9009 752 123.401 749.6C139.901 748.2 155.801 745.4 171.301 739.9C182.901 735.9 193.701 730.2 201.801 721C205.901 716.4 208.401 711.4 208.201 705.9V137.8" fill="url(#paint0_linear_1357_560)"></path><path d="M2.60092 137.8V705.9C2.50092 711.3 4.70091 716.8 9.00091 721.3C17.5009 730.3 28.3009 736.2 40.2009 740.2C67.2009 749.1 94.9009 752 123.401 749.6C139.901 748.2 155.801 745.4 171.301 739.9C182.901 735.9 193.701 730.2 201.801 721C205.901 716.4 208.401 711.4 208.201 705.9V137.8" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M102.8 97C132.7 97.7 159.3 101.1 183.6 113.3C193.4 118.2 202.3 124.3 206.7 134.7C210.3 143 207.6 150.3 201.8 156.7C193.6 165.9 182.9 171.6 171.3 175.6C155.8 181.1 139.8 183.8 123.4 185.3C94.8997 187.7 67.1997 184.9 40.1997 175.9C28.1997 171.9 17.4997 166 8.99973 157C0.59973 148.1 0.499718 135.7 8.79972 126.8C17.0997 117.9 27.4997 112.1 38.9997 108C54.2997 102.7 69.9997 99 86.2997 98.3C92.4997 97.9 98.9997 97.2 102.8 97Z" fill="#5244FD" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M161.68 108.33C161.68 149.74 134.34 152.82 100.61 152.82C66.8802 152.82 40.4102 141.66 40.4102 112.22C40.4102 87.6499 67.9302 61.6299 101.66 61.6299C135.39 61.6299 161.68 87.0599 161.68 108.33Z" fill="#FEBC2E"></path><path d="M156.11 108.35C156.11 144.32 131.15 147 100.37 147C69.5899 147 45.4199 137.31 45.4199 111.73C45.4199 90.3903 70.5399 67.7803 101.33 67.7803C132.12 67.7803 156.11 89.8603 156.11 108.35Z" fill="#FEE65C"></path><path d="M55.5898 98.3401C55.5898 98.3401 53.6598 102.29 56.0998 103.49C58.5398 104.69 60.3198 99.69 60.3198 99.69C60.3198 99.69 63.9898 90.9701 73.2298 85.8001C73.2298 85.8001 76.8798 84.73 75.5298 82.02C74.1798 79.31 69.5298 82.2401 69.5298 82.2401C69.5298 82.2401 58.9098 87.6501 55.5898 98.3401Z" fill="#FDFDFD"></path><path d="M111.97 58.6199C110.66 59.1499 109.16 58.5098 108.64 57.1998L99.9695 35.5999C99.4395 34.2899 100.08 32.7898 101.39 32.2698C102.7 31.7398 104.2 32.3798 104.72 33.6898L113.39 55.2899C113.93 56.5999 113.29 58.0999 111.97 58.6199Z" fill="#FDFDFD"></path><path d="M82.4196 61.2201C81.6096 62.5101 79.9196 62.8901 78.6296 62.0901L67.4696 55.0901C66.1796 54.2801 65.7996 52.5902 66.5996 51.3002C67.4096 50.0102 69.0996 49.6302 70.3896 50.4302L81.5496 57.4302C82.8396 58.2402 83.2296 59.9301 82.4196 61.2201Z" fill="#FDFDFD"></path><path d="M139.904 85.4854C140.594 84.5051 138.761 82.0285 135.811 79.9537C132.861 77.8789 129.911 76.9917 129.221 77.972C128.532 78.9524 130.364 81.429 133.314 83.5038C136.264 85.5786 139.215 86.4658 139.904 85.4854Z" fill="#FDFDFD"></path><path d="M95.9592 54.8699C96.764 52.3964 96.4926 50.0906 95.353 49.7198C94.2134 49.349 92.6371 51.0536 91.8323 53.5271C91.0274 56.0007 91.2988 58.3064 92.4384 58.6773C93.5781 59.0481 95.1544 57.3435 95.9592 54.8699Z" fill="#FDFDFD"></path><path d="M170.529 95.8V112.32C170.719 131.13 152.879 130.27 152.879 130.27C139.489 130.27 135.819 121.65 134.809 116.61H123.229C120.969 132.87 100.359 132.08 100.359 132.08C83.1493 132.08 78.2193 123.34 76.8193 118.04L35.6493 113.55C35.6493 113.55 31.2193 113.61 31.5993 109.58C31.9793 105.55 36.0393 106.45 36.0393 106.45L76.2593 109.95V95.9901C76.2593 93.6801 78.1293 91.8101 80.4393 91.8101H119.269C121.579 91.8101 123.439 93.6801 123.439 95.9901V108.39H134.439V95.8C134.439 93.6 135.869 91.8101 137.629 91.8101H167.339C169.099 91.8101 170.529 93.6 170.529 95.8Z" fill="#1B0560"></path><path d="M82.4695 96.7802C82.4695 96.7802 81.8795 106.5 82.6695 112.13C82.6695 112.13 82.9995 104.25 85.0395 99.7202C85.0395 99.7202 91.8295 96.0902 106.109 97.8302C106.109 97.8402 101.259 95.0502 82.4695 96.7802Z" fill="#FDFDFD"></path><path d="M118.989 112.79C118.989 112.79 119.989 126.83 106.879 126.39C106.879 126.39 115.039 123.54 118.989 112.79Z" fill="#FDFDFD"></path><path d="M138.67 96.1102C138.67 96.1102 138.4 107.02 140.11 112.13C140.11 112.13 139.32 107.88 140.67 99.0602C140.67 99.0602 146.56 95.3202 157.67 97.0602C157.67 97.0602 153.3 94.3902 138.67 96.1102Z" fill="#FDFDFD"></path><path d="M167.1 112.13C167.1 112.13 167.88 126.17 157.68 125.73C157.67 125.73 164.02 122.87 167.1 112.13Z" fill="#FDFDFD"></path><path d="M52.1484 31.11L65.5184 76.69C65.5184 76.69 99.4884 78.71 128.378 73.72L136.438 23.77L116.768 48.08L98.6184 0L85.5084 51.22L52.1484 31.11Z" fill="#F28301"></path><path d="M69.3387 72.8801L59.7188 41.2302L87.7687 58.3702L99.3988 14.6802L115.399 57.6102L129.939 38.5402L125.319 70.0901C125.329 70.0901 92.2387 75.0901 69.3387 72.8801Z" fill="#FEB019"></path><defs><linearGradient id="paint0_linear_1357_560" x1="129" y1="177" x2="129" y2="725" gradientUnits="userSpaceOnUse"><stop stop-color="#5244FD"></stop><stop offset="1" stop-color="#EA46E3"></stop></linearGradient></defs></svg>`);
      } else if (__props.name === "gameboy-md") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "138",
          height: "437",
          viewBox: "0 0 138 437",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.89467 93.9712V409.338C2.83062 412.335 4.23958 415.388 6.9935 417.886C12.4373 422.883 19.3541 426.158 26.9754 428.378C44.2675 433.319 62.0079 434.929 80.2606 433.596C90.828 432.819 101.011 431.265 110.938 428.212C118.367 425.991 125.284 422.827 130.472 417.72C133.097 415.166 134.699 412.391 134.57 409.338V93.9712" fill="url(#paint0_linear_718_1318)"></path><path d="M2.89467 93.9712V409.338C2.83062 412.335 4.23958 415.388 6.9935 417.886C12.4373 422.883 19.3541 426.158 26.9754 428.378C44.2675 433.319 62.0079 434.929 80.2606 433.596C90.828 432.819 101.011 431.265 110.938 428.212C118.367 425.991 125.284 422.827 130.472 417.72C133.097 415.166 134.699 412.391 134.57 409.338V93.9712" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M67.3598 67.4985C86.5374 67.9475 103.598 70.1282 119.184 77.9532C125.47 81.096 131.178 85.0085 134 91.679C136.309 97.0025 134.578 101.685 130.857 105.79C125.598 111.69 118.735 115.346 111.295 117.912C101.354 121.439 91.0912 123.171 80.5724 124.133C62.2928 125.673 44.5263 123.877 27.2088 118.104C19.5121 115.539 12.6492 111.754 7.19739 105.982C1.80971 100.274 1.74556 92.3203 7.0691 86.612C12.3926 80.9036 19.0631 77.1835 26.4391 74.5538C36.2524 71.1545 46.3222 68.7813 56.7769 68.3323C60.7535 68.0758 64.9225 67.6268 67.3598 67.4985Z" fill="#FEC810" stroke="#2331B5" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><g clip-path="url(#clip0_718_1318)"><path d="M44.0268 0.977026C44.0268 0.977026 40.2256 0.0946001 38.8002 7.90067C37.3747 15.7067 26.2426 80.6668 26.2426 80.6668C26.2426 80.6668 24.2741 84.4681 31.3335 89.6947C38.3929 94.9214 40.8365 97.2972 43.2123 97.9081C45.588 98.5869 92.4245 104.832 92.4245 104.832C92.4245 104.832 98.9409 105.646 100.095 100.42C101.249 95.1929 112.245 24.3952 112.245 24.3952C112.245 24.3952 112.788 22.0195 108.444 17.3358C104.1 12.6522 98.6693 6.27158 98.6693 6.27158C98.6693 6.27158 97.9227 5.11764 89.1663 4.57461C80.4099 3.9637 44.0268 0.977026 44.0268 0.977026Z" fill="#161CC1"></path><path d="M42.8053 4.50659L29.3652 82.16C29.3652 82.16 81.8356 89.8304 82.9217 88.9479C84.0078 88.0655 95.615 8.91872 95.615 8.91872L42.8053 4.50659Z" fill="#8BD8FE"></path><path d="M98.4652 11.2947L86.5864 89.0839C86.5864 89.0839 86.3148 92.953 80.9524 92.5457C75.59 92.1384 32.0117 86.5045 32.0117 86.5045L42.7366 94.8536L91.3379 101.777C91.3379 101.777 95.4106 103.203 96.7003 100.488C97.99 97.7724 109.122 23.988 109.122 23.988C109.122 23.988 109.258 22.8341 107.968 21.4765C106.543 20.1868 98.4652 11.2947 98.4652 11.2947Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.6921 10.48L41.7188 47.8134L81.2921 51.7503L87.8085 13.1951L47.6921 10.48Z" fill="#161CC1"></path><path d="M69.7523 67.77C71.5851 67.77 73.0105 66.2767 73.0105 64.5118C73.0105 62.6791 71.5172 61.2537 69.7523 61.2537C67.9196 61.2537 66.4941 62.747 66.4941 64.5118C66.4941 66.3446 67.9875 67.77 69.7523 67.77Z" fill="#161CC1"></path><path d="M78.3734 64.5117C80.2062 64.5117 81.6316 63.0184 81.6316 61.2536C81.6316 59.4208 80.1383 57.9954 78.3734 57.9954C76.5407 57.9954 75.1152 59.4887 75.1152 61.2536C75.1152 63.0184 76.5407 64.5117 78.3734 64.5117Z" fill="#161CC1"></path><path d="M79.6625 73.4038C81.4952 73.4038 82.9207 71.9105 82.9207 70.1456C82.9207 68.3129 81.4273 66.8875 79.6625 66.8875C77.8298 66.8875 76.4043 68.3808 76.4043 70.1456C76.4043 71.9784 77.8298 73.4038 79.6625 73.4038Z" fill="#161CC1"></path><path d="M70.8383 76.2547C72.671 76.2547 74.0965 74.7613 74.0965 72.9965C74.0965 71.1637 72.6031 69.7383 70.8383 69.7383C69.0055 69.7383 67.5801 71.2316 67.5801 72.9965C67.5801 74.8292 69.0055 76.2547 70.8383 76.2547Z" fill="#161CC1"></path><path d="M46.538 73.0644L46.0629 72.9965C44.5017 72.7929 43.4156 71.3674 43.6193 69.8741L45.0447 58.0631C45.2484 56.5019 46.6738 55.4159 48.1671 55.6195L48.6423 55.6874C50.2035 55.891 51.2896 57.3165 51.0859 58.8098L49.6605 70.6207C49.4568 72.1819 48.0314 73.268 46.538 73.0644Z" fill="#161CC1"></path><path d="M56.1092 64.4438V64.9189C56.0413 66.4801 54.7516 67.7019 53.1904 67.6341L41.3116 67.1589C39.7504 67.091 38.5286 65.8013 38.5964 64.2401V63.765C38.6643 62.2038 39.954 60.9819 41.5152 61.0498L53.3941 61.525C54.9553 61.5928 56.1771 62.8825 56.1092 64.4438Z" fill="#161CC1"></path><path d="M50.4752 13.9419L45.5879 44.691L78.7128 48.1529L83.7358 16.114L50.4752 13.9419Z" fill="#E9FAFF"></path></g><defs><linearGradient id="paint0_linear_718_1318" x1="91.8139" y1="117.05" x2="32.0805" y2="418.432" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC810"></stop><stop offset="1" stop-color="#161CBF"></stop></linearGradient><clipPath id="clip0_718_1318"><rect width="86.2741" height="103.923" fill="white" transform="translate(25.9717 0.977051)"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "gameboy") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "181",
          height: "582",
          viewBox: "0 0 181 582",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M2.0028 124.991V546.943C1.91711 550.954 3.80225 555.039 7.48692 558.381C14.7706 565.066 24.0251 569.448 34.2222 572.419C57.3585 579.029 81.0946 581.183 105.516 579.401C119.655 578.361 133.28 576.281 146.562 572.196C156.502 569.225 165.756 564.991 172.697 558.158C176.211 554.742 178.353 551.028 178.181 546.943V124.991" fill="url(#paint0_linear_451_997)"></path><path d="M2.0028 124.991V546.943C1.91711 550.954 3.80225 555.039 7.48692 558.381C14.7706 565.066 24.0251 569.448 34.2222 572.419C57.3585 579.029 81.0946 581.183 105.516 579.401C119.655 578.361 133.28 576.281 146.562 572.196C156.502 569.225 165.756 564.991 172.697 558.158C176.211 554.742 178.353 551.028 178.181 546.943V124.991" stroke="#161CC0" stroke-width="4" stroke-miterlimit="10"></path><path d="M88.255 89.5715C113.914 90.1722 136.741 93.09 157.594 103.56C166.004 107.765 173.642 112.999 177.418 121.924C180.507 129.047 178.19 135.312 173.213 140.804C166.176 148.699 156.994 153.59 147.039 157.023C133.738 161.743 120.007 164.06 105.933 165.347C81.4755 167.407 57.7044 165.004 34.534 157.281C24.2361 153.848 15.0537 148.785 7.75933 141.061C0.550761 133.424 0.464934 122.782 7.58768 115.145C14.7104 107.507 23.6353 102.53 33.5042 99.0113C46.6341 94.4631 60.1072 91.2879 74.0953 90.6871C79.4159 90.3439 84.994 89.7432 88.255 89.5715Z" fill="#FEC810" stroke="#2331B5" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"></path><g clip-path="url(#clip0_451_997)"><path d="M57.0368 0.567977C57.0368 0.567977 51.9508 -0.612684 50.0436 9.83162C48.1364 20.2759 33.2419 107.191 33.2419 107.191C33.2419 107.191 30.6081 112.277 40.0534 119.27C49.4987 126.263 52.7682 129.442 55.9469 130.259C59.1256 131.167 121.791 139.523 121.791 139.523C121.791 139.523 130.51 140.613 132.054 133.619C133.598 126.626 148.311 31.9009 148.311 31.9009C148.311 31.9009 149.037 28.7222 143.225 22.4556C137.413 16.189 130.147 7.65194 130.147 7.65194C130.147 7.65194 129.148 6.108 117.432 5.38144C105.716 4.56406 57.0368 0.567977 57.0368 0.567977Z" fill="#161CC1"></path><path d="M55.4023 5.29053L37.4199 109.189C37.4199 109.189 107.624 119.451 109.077 118.271C110.53 117.09 126.06 11.1938 126.06 11.1938L55.4023 5.29053Z" fill="#8BD8FE"></path><path d="M129.874 14.3726L113.98 118.452C113.98 118.452 113.617 123.629 106.442 123.084C99.2674 122.539 40.9609 115.001 40.9609 115.001L55.3105 126.172L120.338 135.436C120.338 135.436 125.787 137.343 127.512 133.71C129.238 130.077 144.133 31.3559 144.133 31.3559C144.133 31.3559 144.314 29.812 142.589 27.9956C140.681 26.27 129.874 14.3726 129.874 14.3726Z" fill="#1E82F9" stroke="#3874FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M61.9414 13.2827L53.9492 63.2337L106.897 68.5013L115.616 16.9155L61.9414 13.2827Z" fill="#161CC1"></path><path d="M91.457 89.935C93.9092 89.935 95.8164 87.937 95.8164 85.5757C95.8164 83.1235 93.8183 81.2163 91.457 81.2163C89.0049 81.2163 87.0977 83.2143 87.0977 85.5757C87.0977 88.0278 89.0957 89.935 91.457 89.935Z" fill="#161CC1"></path><path d="M102.992 85.5757C105.444 85.5757 107.352 83.5776 107.352 81.2163C107.352 78.7642 105.353 76.8569 102.992 76.8569C100.54 76.8569 98.6328 78.855 98.6328 81.2163C98.6328 83.5776 100.54 85.5757 102.992 85.5757Z" fill="#161CC1"></path><path d="M104.717 97.4729C107.169 97.4729 109.076 95.4748 109.076 93.1135C109.076 90.6614 107.078 88.7542 104.717 88.7542C102.265 88.7542 100.357 90.7522 100.357 93.1135C100.357 95.5657 102.265 97.4729 104.717 97.4729Z" fill="#161CC1"></path><path d="M92.9101 101.287C95.3623 101.287 97.2695 99.2893 97.2695 96.928C97.2695 94.4758 95.2715 92.5686 92.9101 92.5686C90.458 92.5686 88.5508 94.5666 88.5508 96.928C88.5508 99.3801 90.458 101.287 92.9101 101.287Z" fill="#161CC1"></path><path d="M60.3971 97.0188L59.7613 96.928C57.6725 96.6556 56.2193 94.7483 56.4918 92.7503L58.399 76.9476C58.6715 74.8587 60.5787 73.4056 62.5768 73.6781L63.2125 73.7689C65.3014 74.0414 66.7545 75.9486 66.482 77.9466L64.5748 93.7493C64.3023 95.8382 62.3951 97.2913 60.3971 97.0188Z" fill="#161CC1"></path><path d="M73.2028 85.4848V86.1205C73.1119 88.2094 71.3864 89.8442 69.2975 89.7533L53.404 89.1176C51.3151 89.0268 49.6804 87.3012 49.7712 85.2123V84.5766C49.862 82.4877 51.5876 80.853 53.6764 80.9438L69.57 81.5795C71.6588 81.6704 73.2936 83.3959 73.2028 85.4848Z" fill="#161CC1"></path><path d="M65.664 17.9146L59.125 59.056L103.445 63.6879L110.166 20.8208L65.664 17.9146Z" fill="#E9FAFF"></path></g><defs><linearGradient id="paint0_linear_451_997" x1="120.974" y1="155.87" x2="41.0526" y2="559.111" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC810"></stop><stop offset="1" stop-color="#161CBF"></stop></linearGradient><clipPath id="clip0_451_997"><rect width="115.432" height="139.046" fill="white" transform="translate(32.8789 0.567871)"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "pirate-slime") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "158",
          height: "223",
          viewBox: "0 0 158 223",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M82.2363 89.7393L3.23633 114.909V186.239L76.5663 222.909L157.066 191.909V119.909L82.2363 89.7393Z" fill="#FFAF2E"></path><path d="M11.7363 117.239L76.2363 148.579L150.236 122.409L82.5663 94.7393L11.7363 117.239Z" fill="#F9E362"></path><path d="M8.23633 120.909V183.079L73.7363 216.409V153.409L8.23633 120.909Z" fill="#FFD348"></path><path d="M78.9062 153.239V216.409L151.906 188.909V126.239L78.9062 153.239Z" fill="#FFC933"></path><path d="M25.277 73.6794C23.457 72.8994 21.667 72.0394 19.817 71.3394C5.61704 65.9294 -4.013 43.9194 1.647 29.8294C2.887 26.7494 4.55704 25.5394 8.18704 26.7194C13.047 28.2994 18.177 29.0593 23.197 30.1693C25.547 30.6894 26.717 29.9793 27.397 27.4093C33.837 3.13934 58.687 -3.38067 75.927 1.51933C88.167 4.98933 99.277 9.23934 104.597 22.1593C108.247 31.0193 109.007 39.8094 105.377 48.8194C103.287 54.0094 105.547 57.1493 111.327 56.8493C115.307 56.6393 119.287 56.1094 123.247 55.5694C130.537 54.5694 134.367 57.4894 134.157 65.0494C133.617 84.3493 127.927 95.3793 110.117 99.7693C108.467 99.8793 106.807 99.9794 105.157 100.089C96.557 97.8894 87.777 96.2193 79.397 93.3793C62.957 87.8193 46.747 81.5993 30.437 75.6593C28.717 74.9893 26.997 74.3294 25.277 73.6794ZM106.847 66.4093C105.407 66.8093 104.287 67.1193 103.177 67.4093C93.007 70.0493 80.437 65.0093 77.297 56.5393C76.557 54.5593 77.017 50.8494 78.427 49.5594C86.247 42.3194 86.297 25.7293 80.947 16.9893C75.477 8.0593 64.707 3.69938 54.597 6.32938C42.487 9.46938 32.347 20.4093 32.307 30.9093C32.287 35.6493 33.167 40.3993 33.657 45.3493C22.337 49.2593 13.327 45.0494 5.30703 35.4494C5.06703 45.5894 7.517 53.5694 12.717 60.5594C14.307 62.6894 16.697 64.7093 19.147 65.6393C41.677 74.1593 64.287 82.4493 86.907 90.7393C88.057 91.1593 89.517 91.4393 90.637 91.1093C100.487 88.1593 107.837 77.1393 106.847 66.4093ZM81.987 9.25932C92.127 24.2393 93.217 39.0894 81.657 53.9694C86.357 62.5894 96.907 65.9394 104.067 60.7094C101.047 57.2194 98.137 54.0094 99.797 48.4494C101.397 43.0694 102.277 37.1993 102.057 31.5993C101.637 20.8593 92.577 11.2993 81.987 9.25932ZM96.807 94.2194C121.777 97.4694 129.267 83.5193 129.047 64.0193C129.037 62.6793 126.817 60.1793 125.747 60.2393C121.037 60.5093 116.357 61.5193 111.477 62.2893C114.727 76.5193 107.617 85.8394 96.807 94.2194ZM29.5771 41.1493C27.5971 38.4993 26.567 35.6194 24.917 35.2094C20.427 34.0794 15.677 33.9794 10.647 33.4394C15.107 39.1994 20.0871 42.9593 29.5771 41.1493Z" fill="#220E60"></path><path d="M25.2762 73.6792C26.9962 74.3392 28.7163 74.9892 30.4363 75.6492C29.4463 76.7692 28.4862 77.9191 27.4562 78.9991C16.6862 90.2091 17.1462 115.669 35.6162 123.359C55.0262 131.429 73.8462 130.019 92.4762 121.369C101.396 117.229 105.476 109.889 105.166 100.089C106.816 99.9792 108.476 99.8792 110.126 99.7692C111.026 111.079 106.366 119.769 96.5563 124.939C75.8662 135.839 54.2763 137.639 32.8263 127.639C12.2763 118.059 8.83622 91.0992 25.2762 73.6792Z" fill="#249FFE"></path><path d="M106.848 66.4096C107.828 77.1396 100.488 88.1595 90.6176 91.1095C89.5076 91.4395 88.0376 91.1595 86.8876 90.7395C64.2776 82.4395 41.6576 74.1596 19.1276 65.6396C16.6776 64.7096 14.2776 62.6996 12.6976 60.5596C7.49757 53.5696 5.04754 45.5896 5.28754 35.4496C13.3075 45.0496 22.3176 49.2595 33.6376 45.3495C33.1476 40.3995 32.2675 35.6496 32.2875 30.9096C32.3275 20.4096 42.4676 9.46962 54.5776 6.32962C64.6876 3.70962 75.4576 8.06953 80.9276 16.9895C86.2775 25.7295 86.2275 42.3296 78.4075 49.5596C77.0075 50.8596 76.5475 54.5596 77.2775 56.5396C80.4275 65.0096 92.9875 70.0496 103.158 67.4096C104.298 67.1196 105.408 66.7996 106.848 66.4096ZM46.3876 53.3695C42.0076 55.0695 37.4676 56.6596 33.1176 58.6596C31.9476 59.1996 31.3476 60.9696 30.4876 62.1796C31.8976 62.5396 33.4676 63.4796 34.6776 63.1396C38.3376 62.1196 42.0775 60.9896 45.3975 59.1896C48.8975 57.2896 50.8275 58.3895 52.8475 61.2295C55.6375 65.1495 58.5076 69.0195 61.6776 72.6295C62.6076 73.6895 64.6576 73.7596 66.1976 74.2896C65.9776 72.7296 66.2276 70.8496 65.4376 69.6796C62.7476 65.6996 59.7575 61.9096 56.7375 58.1696C54.8775 55.8596 54.9076 54.3495 57.6176 52.5995C64.9576 47.8395 67.5376 40.8196 66.2476 32.3296C65.5276 27.5696 63.1775 23.7596 58.4075 22.2796C53.4075 20.7296 49.3376 23.0496 46.9276 27.1596C45.0676 30.3396 43.4375 34.2596 43.4875 37.8296C43.5375 42.7796 45.2476 47.7395 46.3876 53.3695Z" fill="#2330B3"></path><path d="M105.156 100.079C105.466 109.879 101.386 117.219 92.4663 121.359C73.8463 130.009 55.0163 131.419 35.6063 123.349C17.1363 115.669 16.6763 90.1991 27.4463 78.9891C28.4763 77.9091 29.4363 76.7592 30.4263 75.6392C46.7363 81.5892 62.9464 87.7991 79.3863 93.3691C87.7764 96.2091 96.5563 97.8792 105.156 100.079ZM74.3463 124.019C84.2263 122.689 91.8663 118.929 97.9963 112.409C98.9863 111.359 99.0264 109.409 99.5163 107.879C97.8363 108.279 95.7163 108.159 94.5563 109.159C88.7463 114.129 82.4263 117.799 74.7563 119.019C73.5263 119.219 72.5263 120.799 71.4163 121.739C72.5663 122.639 73.7363 123.539 74.3463 124.019ZM36.3763 93.6191C36.2063 91.2691 36.4063 89.9791 35.9663 88.9791C35.3563 87.5591 34.2663 86.3392 33.3863 85.0392C32.2263 86.0792 30.2563 86.9692 30.0363 88.1792C29.3163 92.1592 29.1064 96.2392 29.0164 100.299C28.9964 101.109 30.2863 102.519 31.1063 102.629C31.9363 102.739 33.4063 101.799 33.7863 100.949C34.9663 98.2592 35.7763 95.3991 36.3763 93.6191ZM58.6563 99.9991C58.1363 97.5791 57.9664 95.7292 57.3264 94.0592C56.3264 91.4392 54.7163 91.3292 52.8963 93.4592C50.3963 96.3892 49.4063 104.379 51.0863 107.779C52.3363 110.299 54.1363 110.699 55.4763 108.299C56.9663 105.619 57.7263 102.529 58.6563 99.9991ZM58.9063 127.159C60.9063 125.649 62.4963 124.449 64.0764 123.249C62.3264 122.469 60.5464 121.009 58.8264 121.089C56.9764 121.169 55.1964 122.679 53.3863 123.569C54.9763 124.599 56.5663 125.639 58.9063 127.159Z" fill="#8AD6FD"></path><path d="M81.986 9.25928C92.576 11.2993 101.636 20.8592 102.066 31.5992C102.286 37.1992 101.406 43.0693 99.806 48.4493C98.146 54.0093 101.066 57.2193 104.076 60.7094C96.916 65.9394 86.356 62.5894 81.666 53.9694C93.216 39.0894 92.116 24.2393 81.986 9.25928Z" fill="#2F0C97"></path><path d="M96.8066 94.2194C107.617 85.8394 114.727 76.5194 111.477 62.2894C116.357 61.5194 121.037 60.4993 125.747 60.2393C126.827 60.1793 129.037 62.6794 129.047 64.0194C129.257 83.5094 121.777 97.4694 96.8066 94.2194Z" fill="#2F0C97"></path><path d="M29.5765 41.1492C20.0765 42.9592 15.1065 39.1992 10.6465 33.4292C15.6765 33.9792 20.4265 34.0692 24.9165 35.1992C26.5765 35.6192 27.5965 38.4892 29.5765 41.1492Z" fill="#2F0C97"></path><path d="M46.3866 53.3693C45.2466 47.7393 43.5366 42.7894 43.4766 37.8094C43.4366 34.2394 45.0566 30.3294 46.9166 27.1394C49.3266 23.0194 53.3965 20.6994 58.3965 22.2594C63.1565 23.7394 65.5066 27.5494 66.2366 32.3094C67.5266 40.7994 64.9466 47.8194 57.6066 52.5794C54.8966 54.3394 54.8666 55.8394 56.7266 58.1494C59.7366 61.8994 62.7366 65.6794 65.4266 69.6594C66.2166 70.8294 65.9666 72.7194 66.1866 74.2694C64.6466 73.7394 62.5966 73.6693 61.6666 72.6093C58.4966 69.0093 55.6165 65.1294 52.8365 61.2094C50.8165 58.3794 48.8866 57.2794 45.3866 59.1694C42.0666 60.9694 38.3366 62.1093 34.6666 63.1193C33.4466 63.4593 31.8766 62.5094 30.4766 62.1594C31.3366 60.9494 31.9366 59.1694 33.1066 58.6394C37.4666 56.6594 42.0066 55.0693 46.3866 53.3693ZM51.8766 49.6293C60.1766 45.4193 62.3666 42.0394 61.0766 33.5294C60.7266 31.2294 58.4066 27.8894 56.5366 27.5594C54.6566 27.2294 51.3566 29.5494 50.1866 31.5794C46.6266 37.7594 48.0166 43.8893 51.8766 49.6293Z" fill="#220E60"></path><path d="M74.3463 124.019C73.7363 123.539 72.5662 122.639 71.4062 121.739C72.5163 120.799 73.5163 119.209 74.7463 119.019C82.4263 117.799 88.7363 114.129 94.5463 109.159C95.7163 108.159 97.8263 108.279 99.5063 107.879C99.0263 109.409 98.9763 111.359 97.9863 112.409C91.8663 118.929 84.2263 122.689 74.3463 124.019Z" fill="#FEFEFE"></path><path d="M36.3778 93.619C35.7778 95.399 34.9678 98.2591 33.7878 100.949C33.4178 101.789 31.9378 102.739 31.1078 102.629C30.2878 102.519 28.9978 101.109 29.0178 100.299C29.1078 96.2491 29.3278 92.1591 30.0378 88.1791C30.2578 86.9691 32.2178 86.0791 33.3878 85.0391C34.2678 86.3391 35.3578 87.559 35.9678 88.979C36.4078 89.989 36.2078 91.269 36.3778 93.619Z" fill="#220E60"></path><path d="M58.6572 99.9994C57.7272 102.529 56.9672 105.619 55.4772 108.299C54.1372 110.699 52.3371 110.299 51.0871 107.779C49.4071 104.379 50.3971 96.3895 52.8971 93.4595C54.7171 91.3295 56.3172 91.4395 57.3272 94.0595C57.9672 95.7295 58.1372 97.5794 58.6572 99.9994Z" fill="#220E60"></path><path d="M58.9067 127.16C56.5667 125.63 54.9767 124.6 53.3867 123.56C55.1967 122.67 56.9867 121.16 58.8267 121.08C60.5467 121.01 62.3267 122.46 64.0767 123.24C62.4967 124.45 60.9167 125.65 58.9067 127.16Z" fill="#FEFEFE"></path><path d="M51.8775 49.6294C48.0175 43.8994 46.6275 37.7694 50.1875 31.5694C51.3575 29.5394 54.6575 27.2094 56.5375 27.5494C58.4075 27.8794 60.7375 31.2294 61.0775 33.5194C62.3675 42.0294 60.1775 45.4193 51.8775 49.6294Z" fill="#2330B3"></path></svg>`);
      } else if (__props.name === "mascot-lg") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "551",
          height: "864",
          viewBox: "0 0 521 864",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M380.305 827.013C380.332 829.47 379.736 830.745 377.353 831.808C354.141 842.139 331.535 852.654 308.406 863.16C306.178 864.177 304.492 864.443 302.181 862.977C280.822 849.391 259.389 835.915 237.883 822.577C235.068 820.835 234.142 818.974 234.032 815.692C233.336 794.03 232.446 772.377 231.41 750.733C231.264 747.588 232.281 746.25 235.041 745.022C258.142 734.727 281.143 724.23 304.262 713.981C305.821 713.294 308.47 713.486 309.919 714.394C332.039 728.2 354.068 742.161 376.024 756.224C377.399 757.104 378.82 759.148 378.856 760.688C379.095 771.818 379.379 782.919 379.379 794.057L380.305 827.013ZM237.809 749.174C237.204 750.357 236.086 751.549 236.095 752.731C236.122 756.371 236.746 759.992 236.856 763.631C237.25 776.429 237.479 789.235 237.873 802.033C238.011 806.433 238.222 810.861 238.854 815.215C239.065 816.7 240.339 818.47 241.641 819.304C257.28 829.333 273.011 839.215 288.733 849.106C293.161 851.893 297.662 854.552 303.236 857.944C302.759 852.168 302.191 847.676 302.062 843.166C301.641 828.077 301.265 812.978 301.164 797.889C301.146 794.671 300.018 792.902 297.442 791.307C292.4 788.181 287.45 784.881 282.628 781.406C281.665 780.71 281.482 778.94 280.941 777.666C282.426 777.73 284.214 777.272 285.341 777.941C289.797 780.581 294.316 783.249 298.276 786.54C301.934 789.584 305.06 789.226 309.02 787.402C322.148 781.361 335.413 775.622 348.604 769.737C356.213 766.345 363.795 762.889 371.578 759.378C370.973 758.58 370.789 758.122 370.459 757.911C350.099 745.031 329.757 732.132 309.314 719.39C308.049 718.602 305.729 718.382 304.382 718.987C282.151 728.961 259.985 739.09 237.809 749.174ZM374.245 763.888C372.925 764.099 372.293 764.08 371.788 764.31C350.539 773.816 329.28 783.304 308.104 792.975C306.921 793.516 305.766 795.643 305.766 797.027C305.793 803.252 306.408 809.467 306.518 815.683C306.673 824.227 306.399 832.78 306.619 841.314C306.756 846.833 307.444 852.342 307.92 858.246C312.11 856.404 315.859 854.809 319.581 853.131C337.475 845.064 355.333 836.905 373.283 828.957C375.721 827.875 376.345 826.482 376.262 824.08C375.895 813.281 375.657 802.482 375.309 791.692C375.015 782.598 374.621 773.504 374.245 763.888Z" fill="#F7A901"></path><path d="M237.808 749.175C259.993 739.081 282.15 728.952 304.39 718.996C305.738 718.391 308.048 718.611 309.322 719.399C329.765 732.142 350.116 745.04 370.468 757.92C370.807 758.131 370.99 758.589 371.586 759.387C363.803 762.898 356.222 766.354 348.613 769.746C335.412 775.631 322.147 781.37 309.029 787.411C305.068 789.235 301.942 789.593 298.285 786.549C294.324 783.249 289.796 780.591 285.35 777.951C284.222 777.281 282.435 777.73 280.95 777.675C272.681 772.331 264.375 767.041 256.152 761.624C249.973 757.563 243.914 753.337 237.808 749.175Z" fill="#FEE65C"></path><path d="M374.245 763.888C374.612 773.504 375.006 782.598 375.3 791.692C375.648 802.491 375.886 813.29 376.253 824.08C376.336 826.472 375.721 827.875 373.274 828.957C355.324 836.905 337.466 845.063 319.572 853.131C315.859 854.808 312.11 856.412 307.911 858.246C307.435 852.342 306.747 846.833 306.61 841.314C306.39 832.77 306.655 824.226 306.509 815.683C306.399 809.458 305.785 803.242 305.757 797.027C305.748 795.643 306.903 793.516 308.095 792.975C329.271 783.304 350.53 773.816 371.78 764.309C372.302 764.08 372.925 764.098 374.245 763.888Z" fill="#FECB00"></path><path d="M237.809 749.174C243.924 753.327 249.983 757.553 256.153 761.623C264.376 767.041 272.682 772.331 280.95 777.675C281.491 778.949 281.675 780.719 282.637 781.416C287.45 784.881 292.4 788.181 297.451 791.316C300.018 792.911 301.146 794.681 301.173 797.898C301.274 812.997 301.65 828.086 302.072 843.175C302.2 847.686 302.768 852.177 303.245 857.953C297.671 854.561 293.17 851.902 288.743 849.116C273.012 839.224 257.29 829.333 241.65 819.313C240.349 818.479 239.074 816.709 238.864 815.224C238.24 810.87 238.02 806.451 237.883 802.042C237.489 789.244 237.259 776.438 236.865 763.64C236.755 760.001 236.132 756.371 236.104 752.74C236.077 751.549 237.204 750.366 237.809 749.174Z" fill="#FED531"></path><path d="M354.856 372.501C264.11 403.257 173.235 434.05 81.9749 464.98C81.9749 462.734 81.9749 461.057 81.9749 459.388C81.9749 414.02 82.3324 368.651 81.7549 323.301C81.5807 310.045 86.5585 299.979 95.2765 291.096C108.377 277.758 124.868 270.369 142.451 265.089C164.544 258.451 187.279 255.903 210.197 255.316C243.96 254.455 277.714 255.17 311.119 260.725C321.57 262.467 331.81 265.749 341.939 268.966C345.707 270.167 349.172 272.89 352.216 275.558C353.82 276.96 355.003 279.747 355.021 281.92C355.195 311.548 355.131 341.186 355.122 370.814C355.113 371.254 354.984 371.704 354.856 372.501Z" fill="#1A1E7E"></path><path d="M386.318 740.96C386.318 735.212 384.768 728.218 387.344 724.065C389.81 720.086 397.016 719.032 402.149 716.713C407.696 714.21 413.187 711.542 418.861 709.352C420.484 708.728 423.014 708.893 424.499 709.773C433.951 715.347 443.264 721.15 452.496 727.081C453.733 727.879 454.916 729.813 454.953 731.252C455.173 740.557 455.154 749.871 454.953 759.175C454.925 760.422 453.715 762.237 452.569 762.787C442.137 767.802 431.64 772.67 421.052 777.336C419.741 777.913 417.495 777.611 416.221 776.832C407.008 771.157 397.868 765.354 388.875 759.34C387.564 758.47 386.538 756.324 386.418 754.693C386.098 750.127 386.318 745.535 386.318 740.96C386.162 740.96 386.464 740.96 386.318 740.96ZM447.757 729.547C439.148 724.157 431.09 719.087 422.987 714.1C422.317 713.688 421.135 713.532 420.438 713.834C411.583 717.648 402.773 721.562 392.982 725.88C402.186 731.793 410.327 737.073 418.559 742.216C419.256 742.647 420.658 742.436 421.511 742.042C430.055 738.045 438.562 733.947 447.757 729.547ZM450.479 734.387C449.746 734.387 449.251 734.241 448.893 734.406C440.194 738.439 431.485 742.482 422.831 746.616C422.125 746.955 421.309 747.973 421.3 748.679C421.19 756.343 421.226 764.016 421.226 772.211C430.797 767.857 439.543 763.97 448.178 759.854C449.251 759.34 450.342 757.617 450.369 756.416C450.58 749.11 450.479 741.794 450.479 734.387Z" fill="#273CD9"></path><path d="M447.756 729.547C438.561 733.947 430.054 738.045 421.51 742.033C420.658 742.427 419.255 742.638 418.558 742.207C410.326 737.064 402.186 731.784 392.982 725.871C402.772 721.553 411.582 717.639 420.438 713.825C421.134 713.523 422.317 713.688 422.986 714.091C431.09 719.087 439.148 724.157 447.756 729.547Z" fill="#33D7FB"></path><path d="M450.479 734.387C450.479 741.804 450.58 749.11 450.378 756.416C450.341 757.608 449.25 759.341 448.187 759.854C439.551 763.979 430.815 767.866 421.235 772.211C421.235 764.016 421.19 756.343 421.309 748.679C421.318 747.964 422.143 746.946 422.84 746.616C431.493 742.482 440.193 738.439 448.902 734.406C449.25 734.241 449.745 734.387 450.479 734.387Z" fill="#33D7FB"></path><path d="M389.241 728.722L417.376 746.562V772.762L389.241 754.72V728.722Z" fill="#33D7FB"></path><path d="M538.145 210.718C538.145 278.528 538.145 346.329 538.145 414.139C534.643 415.55 531.077 416.825 527.639 418.383C474.983 442.126 422.344 465.906 369.706 489.677C339.152 503.473 308.579 517.233 278.061 531.122C275.54 532.268 273.67 532.185 271.332 530.709C248.552 516.243 225.716 501.86 202.881 487.486C171.785 467.914 140.653 448.387 109.549 428.825C101.326 423.654 93.1395 418.429 84.5131 412.965C86.4932 411.984 87.8225 411.269 89.1884 410.664C113.271 399.939 137.371 389.24 161.445 378.515C201.67 360.584 241.887 342.625 282.113 324.694C334.87 301.18 387.628 277.675 440.385 254.189C472.966 239.677 505.555 225.202 538.145 210.718Z" fill="#8BD8FE"></path><path d="M538.144 418.723C538.144 481.949 538.144 545.175 538.144 608.402C488.925 629.459 439.716 650.525 389.516 672.004C388.26 641.248 387.032 611.299 385.776 580.57C349.593 595.834 314.097 610.813 277.107 626.416C277.107 609.905 277.116 594.688 277.107 579.47C277.098 566.343 277.135 553.215 277.006 540.088C276.979 537.622 277.666 536.366 280.022 535.302C301.281 525.759 322.457 516.051 343.67 506.407C363.362 497.46 383.044 488.531 402.753 479.63C430.365 467.153 457.995 454.704 485.625 442.273C503.125 434.399 520.635 426.57 538.144 418.723Z" fill="#1E82F9"></path><path d="M538.146 418.722C520.646 426.569 503.127 434.398 485.636 442.273C458.006 454.704 430.376 467.153 402.764 479.629C383.055 488.531 363.363 497.469 343.681 506.407C322.468 516.042 301.283 525.759 280.033 535.302C277.677 536.356 276.99 537.621 277.017 540.087C277.145 553.215 277.109 566.342 277.118 579.47C277.127 594.687 277.118 609.905 277.118 626.415C314.108 610.813 349.603 595.833 385.786 580.57C387.042 611.298 388.271 641.248 389.527 672.004C439.726 650.516 488.945 629.459 538.155 608.402C538.155 610.235 538.155 612.069 538.155 613.902C536.578 614.37 534.937 614.672 533.443 615.314C485.434 635.894 437.444 656.52 389.417 677.055C388.161 677.596 386.529 677.238 385.062 677.303C384.485 664.102 383.815 650.901 383.348 637.7C382.917 625.535 382.789 613.361 382.349 601.196C382.193 596.833 381.524 592.487 381.056 587.748C379.443 588.325 377.866 588.802 376.362 589.444C365.023 594.238 353.683 599.051 342.352 603.873C327.244 610.299 312.146 616.744 297.038 623.179C291.547 625.444 286.047 627.653 280.592 630C279.575 630.44 278.887 631.888 277.897 632.062C276.44 632.319 274.698 632.218 273.359 631.622C271.132 630.632 269.124 629.138 267.034 627.855C265.934 626.855 264.953 625.691 263.725 624.884C239.725 609.126 215.707 593.386 191.661 577.691C188.278 575.482 184.758 573.493 180.459 570.889C180.935 577.801 181.577 583.824 181.724 589.856C182.154 607.806 182.365 625.764 182.723 643.723C182.769 645.978 183.429 648.233 183.383 650.479C183.282 655.1 182.897 659.72 182.631 664.34C156.175 647.106 129.718 629.871 103.27 612.637C98.4117 609.474 93.6539 606.147 88.6853 603.158C86.2835 601.719 85.5501 599.968 85.4218 597.263C83.3316 552.124 81.159 506.994 78.968 461.863C78.2163 446.316 77.4279 430.759 76.4745 415.22C76.2912 412.296 77.2354 410.921 79.8664 409.757C231.355 342.322 382.807 274.815 534.277 207.335C535.506 206.785 536.853 206.528 538.146 206.134C538.146 207.665 538.146 209.187 538.146 210.718C505.566 225.202 472.967 239.668 440.396 254.17C387.629 277.657 334.872 301.162 282.123 324.676C241.897 342.607 201.681 360.565 161.455 378.496C137.373 389.231 113.281 399.929 89.1987 410.646C87.8236 411.26 86.4943 411.975 84.5233 412.947C93.1497 418.411 101.345 423.636 109.559 428.806C140.664 448.369 171.786 467.895 202.891 487.467C225.736 501.842 248.562 516.225 271.343 530.691C273.671 532.176 275.55 532.249 278.071 531.103C308.589 517.224 339.162 503.455 369.716 489.658C422.355 465.888 474.993 442.108 527.649 418.365C531.087 416.815 534.653 415.532 538.155 414.12C538.146 415.67 538.146 417.201 538.146 418.722ZM80.9848 416.302C81.3698 419.437 81.7274 421.353 81.819 423.288C82.7724 442.447 83.6708 461.616 84.5967 480.775C85.5042 499.476 86.4209 518.187 87.3285 536.888C88.2544 556.048 89.2811 575.207 89.987 594.376C90.1154 597.758 91.408 599.5 94.0573 601.224C119.359 617.688 144.569 634.272 169.825 650.791C172.566 652.588 175.435 654.192 178.726 656.172C177.837 624.738 176.966 594 176.058 562.254C208.959 583.632 240.77 604.313 273.369 625.499C273.369 622.437 273.387 620.612 273.369 618.797C273.075 595.769 272.782 572.732 272.498 549.704C272.452 546.349 272.718 542.957 272.369 539.638C272.204 538.098 271.269 536.155 270.05 535.302C264.935 531.727 259.59 528.472 254.301 525.145C206.429 495.049 158.549 464.971 110.677 434.884C101.153 428.916 91.6096 422.967 80.9848 416.302Z" fill="#161CC1"></path><path d="M186.646 663.763C184.707 664.643 182.738 662.386 182.878 660.262C183.093 657.004 183.308 653.746 183.373 650.479C183.419 648.233 182.759 645.978 182.713 643.723C182.355 625.765 182.145 607.815 181.714 589.856C181.624 586.161 181.348 582.469 181.039 578.574C180.782 575.344 184.287 573.173 187.066 574.841C188.657 575.796 190.167 576.722 191.651 577.691C215.697 593.386 239.715 609.126 263.715 624.884V624.884C265.473 626.039 264.883 628.822 262.966 629.688C249.643 635.711 236.324 641.754 222.975 647.729C210.893 653.138 198.783 658.482 186.646 663.763V663.763Z" fill="#0057BF"></path><path d="M303.63 627.234C300.864 625.533 301.17 621.419 304.157 620.146C316.889 614.719 329.617 609.29 342.351 603.873C353.682 599.051 365.012 594.229 376.362 589.444V589.444C378.698 588.461 381.312 590.191 381.602 592.71C381.936 595.604 382.248 598.396 382.348 601.196C382.788 613.361 382.916 625.535 383.347 637.7C383.726 648.389 384.23 659.078 384.72 669.767C384.867 672.973 381.369 675.033 378.635 673.352C353.631 657.979 328.627 642.606 303.63 627.234Z" fill="#0057BF"></path><path d="M80.9841 416.302C91.6181 422.958 101.152 428.916 110.677 434.903C158.557 464.98 206.429 495.067 254.3 525.163C259.589 528.491 264.934 531.745 270.049 535.321C271.269 536.173 272.204 538.117 272.369 539.657C272.717 542.975 272.451 546.367 272.497 549.722C272.781 572.75 273.084 595.788 273.368 618.816C273.386 620.631 273.368 622.455 273.368 625.517C240.769 604.332 208.95 583.65 176.058 562.272C176.956 594.018 177.827 624.756 178.725 656.191C175.434 654.211 172.565 652.606 169.824 650.81C144.568 634.29 119.349 617.697 94.0566 601.242C91.4073 599.519 90.1147 597.777 89.9864 594.394C89.2805 575.226 88.2537 556.066 87.3278 536.907C86.4203 518.205 85.5036 499.495 84.596 480.794C83.6701 461.634 82.7718 442.466 81.8184 423.306C81.7175 421.363 81.3692 419.447 80.9841 416.302Z" fill="#1E82F9"></path><path d="M0.207221 697.441C25.1722 686.887 49.8111 676.463 74.4637 666.038C85.9003 661.203 97.3709 656.421 108.767 651.484C110.628 650.676 111.959 650.703 113.697 651.81C143.708 670.975 173.78 690.052 203.771 709.251C204.844 709.937 205.869 711.635 205.89 712.878C206.243 732.566 206.385 752.261 206.705 771.949C206.745 774.319 206.046 775.46 203.832 776.411C165.142 793.05 126.479 809.763 87.8494 826.538C85.9615 827.359 84.7051 827.353 83.0072 826.089C56.1475 806.103 29.2266 786.197 2.37366 766.197C1.36854 765.45 0.309101 763.949 0.30231 762.794C0.173274 741.082 0.207221 719.357 0.207221 697.441ZM200.525 712.253C200.939 713.156 201.36 714.06 201.862 715.16C181.291 723.73 160.911 732.233 140.516 740.709C124.156 747.507 107.802 754.298 91.4013 760.988C88.7527 762.067 87.7 763.466 87.7272 766.482C87.8902 784.024 87.8087 801.566 87.8087 819.115C87.8087 820.188 87.8087 821.261 87.8087 822.701C90.3419 821.648 92.42 820.813 94.4778 819.923C111.87 812.385 129.256 804.819 146.656 797.287C164.571 789.532 182.473 781.756 200.45 774.142C202.759 773.165 203.343 771.956 203.302 769.626C202.997 751.317 202.806 733.001 202.576 714.691C202.569 714.127 202.677 713.489 202.453 713.02C202.188 712.464 201.618 712.042 201.183 711.567C171.716 692.816 142.268 674.045 112.733 655.396C111.694 654.737 109.677 654.9 108.427 655.423C82.3824 666.337 56.3852 677.359 30.3743 688.361C22.2723 691.791 14.177 695.227 5.86442 698.752C6.71334 699.485 7.27021 700.042 7.88822 700.504C33.6138 719.656 59.3326 738.821 85.1329 757.87C86.1177 758.597 88.1754 758.679 89.3775 758.183C114.132 747.996 138.825 737.653 163.553 727.398C175.858 722.297 188.198 717.299 200.525 712.253ZM3.88812 701.815C3.73191 702.888 3.61649 703.322 3.61649 703.75C3.6029 722.752 3.56215 741.755 3.69798 760.75C3.70477 762.027 4.75064 763.697 5.82367 764.506C22.9514 777.355 40.1607 790.109 57.3631 802.856C66.2054 809.41 75.0817 815.916 84.413 822.796C84.413 821.193 84.413 820.106 84.413 819.026C84.413 801.267 84.3383 783.515 84.4877 765.755C84.5149 762.713 83.5709 760.865 81.126 759.066C63.6926 746.244 46.3815 733.259 29.0161 720.348C20.8053 714.263 12.5607 708.212 3.88812 701.815Z" fill="#161CC1"></path><path d="M200.525 712.253C188.198 717.299 175.852 722.297 163.553 727.398C138.825 737.653 114.132 747.996 89.3777 758.183C88.1824 758.679 86.1179 758.597 85.1331 757.87C59.326 738.827 33.614 719.655 7.88843 700.504C7.26363 700.042 6.70675 699.485 5.86462 698.752C14.1772 695.227 22.2725 691.791 30.3745 688.361C56.3786 677.359 82.3826 666.337 108.427 655.423C109.677 654.9 111.694 654.737 112.733 655.396C142.262 674.045 171.716 692.816 201.184 711.567C200.959 711.798 200.742 712.022 200.525 712.253Z" fill="#66BBFE"></path><path d="M200.676 712.583C200.585 712.384 200.623 712.148 200.775 711.989V711.989C200.992 711.761 201.361 711.762 201.587 711.98C201.922 712.304 202.26 712.628 202.447 713.02C202.671 713.489 202.562 714.127 202.569 714.691C202.8 733.007 202.99 751.317 203.295 769.626C203.336 771.949 202.752 773.164 200.443 774.142C182.466 781.755 164.564 789.538 146.649 797.287C129.249 804.819 111.864 812.384 94.471 819.923C93.3824 820.395 92.2862 820.852 91.1173 821.334C89.5389 821.985 87.8019 820.822 87.8019 819.115V819.115C87.8019 801.573 87.8834 784.024 87.7204 766.482C87.6933 763.466 88.7459 762.067 91.3946 760.988C107.796 754.298 124.156 747.507 140.509 740.709C160.314 732.478 180.106 724.222 200.072 715.903C201.049 715.496 201.496 714.363 201.053 713.401C200.925 713.123 200.8 712.852 200.676 712.583Z" fill="#1E82F9"></path><path d="M3.61682 703.764C3.60311 702.873 4.75648 702.455 5.47389 702.984C13.5687 708.951 21.3075 714.63 29.0164 720.362C46.3819 733.272 63.693 746.257 81.1263 759.079C83.5712 760.879 84.5152 762.726 84.4881 765.769C84.3387 783.522 84.4134 801.281 84.4134 819.04V819.04C84.4134 820.602 82.636 821.5 81.378 820.574C73.1422 814.512 65.2366 808.71 57.3635 802.87C40.161 790.116 22.9518 777.369 5.82401 764.519C4.75097 763.711 3.7051 762.041 3.69831 760.764C3.56249 741.762 3.61003 722.759 3.61682 703.764V703.764Z" fill="#1E82F9"></path><path d="M382.238 740.905L275.192 787.154L175.058 725.22L171.602 628.753L227.825 603.598L229.539 603.717L233.508 606.358L239.476 610.327L242.657 612.445L246.388 614.92L250.009 617.331V617.34L273.047 632.658L313.007 616.304L316.573 614.846L320.35 613.297L325.712 611.097L378.672 643.934L382.238 740.905Z" fill="#CC27C5"></path><path d="M372.053 646.382L269.792 688.964L178.322 630.898L231.895 606.248L233.508 606.358L239.476 610.327L242.657 612.445L246.388 614.92L250.009 617.331V617.34L273.047 632.659L313.007 616.304L316.573 614.847L320.35 613.297L372.053 646.382Z" fill="#FF98FB"></path><path d="M323.475 631.549C323.475 653.569 301.629 666.678 274.678 666.678C247.726 666.678 226.1 658.262 226.1 634.171C226.1 625.856 230.913 617.037 239.475 610.327L242.656 612.444L246.387 614.92L250.009 617.331V617.34L273.046 632.658L313.006 616.304L316.572 614.846C320.899 619.586 323.475 625.224 323.475 631.549Z" fill="#273CD9"></path><path d="M319.753 631.54C319.753 651.112 299.622 662.763 274.779 662.763C249.935 662.763 229.997 655.283 229.997 633.878C229.997 626.388 234.553 618.431 242.657 612.445L246.388 614.92L250.009 617.331V617.34L273.046 632.658L313.006 616.304C317.223 620.585 319.753 625.737 319.753 631.54Z" fill="url(#paint0_linear_102_190)"></path><path d="M257.246 639.098C257.572 634.248 256.087 630.2 253.93 630.055C251.773 629.91 249.76 633.724 249.435 638.574C249.109 643.423 250.594 647.472 252.751 647.617C254.908 647.762 256.921 643.948 257.246 639.098Z" fill="#191055"></path><path d="M285.364 640.983C285.689 636.133 284.205 632.085 282.048 631.94C279.89 631.795 277.878 635.609 277.552 640.459C277.227 645.308 278.711 649.357 280.868 649.502C283.025 649.647 285.038 645.833 285.364 640.983Z" fill="#191055"></path><path d="M250.082 617.798C250.082 617.798 242.977 622.199 239.97 630.11C239.97 630.11 239.09 634.29 237.037 634.437C237.037 634.437 232.783 633.997 236.45 626.883C239.521 620.943 243.912 616.735 246.387 614.92L250.009 617.331V617.34C250.064 617.624 250.082 617.798 250.082 617.798Z" fill="white"></path><path d="M311.86 631.87C311.86 631.87 313.18 642.275 302.775 647.702C302.775 647.702 299.328 648.656 300.282 651.809C300.282 651.809 301.455 654.082 304.829 652.249C308.202 650.416 316.407 643.944 316.334 632.924C316.334 632.924 316.334 629.523 314.354 628.863C312.373 628.203 311.805 630.697 311.86 631.87Z" fill="white"></path><path d="M238.716 645.848C240.043 645.48 240.6 643.315 239.961 641.012C239.321 638.71 237.728 637.142 236.401 637.51C235.074 637.879 234.516 640.044 235.156 642.346C235.795 644.649 237.389 646.217 238.716 645.848Z" fill="white"></path><path d="M176.076 635.583L179.542 722.571L272.03 780.838L267.96 692.218L176.076 635.583Z" fill="#EA46E3"></path><path d="M273.761 693.236L277.428 780.838L378.671 737.037L375.004 650.865L273.761 693.236Z" fill="#EA46E3"></path><g clip-path="url(#clip0_102_190)"><path d="M538.981 309.691C538.981 311.443 538.981 313.272 538.981 315.024C537.838 315.481 536.619 315.786 535.476 316.319C479.017 342.298 422.557 368.353 366.022 394.256C364.193 395.094 361.602 395.17 359.697 394.561C338.592 387.704 317.639 380.619 296.609 373.61C295.466 373.229 294.323 372.772 292.647 372.086C293.942 371.477 294.704 371.02 295.466 370.715C348.192 348.85 400.994 326.985 453.72 305.196C455.092 304.663 456.692 304.358 458.14 304.434C467.13 304.967 476.121 305.653 485.112 306.263C503.018 307.405 520.999 308.548 538.981 309.691Z" fill="#E7FAFE"></path><path d="M538.981 309.691C520.999 308.548 503.018 307.481 485.036 306.263C476.045 305.653 467.054 304.967 458.063 304.434C456.616 304.358 455.016 304.663 453.644 305.196C400.842 326.985 348.116 348.85 295.39 370.715C294.628 371.02 293.866 371.477 292.571 372.086C294.323 372.772 295.39 373.229 296.533 373.61C317.562 380.619 338.516 387.704 359.621 394.561C361.526 395.17 364.117 395.094 365.945 394.256C422.481 368.353 478.94 342.298 535.4 316.319C536.543 315.786 537.762 315.481 538.905 315.024C538.905 319.062 538.905 323.176 538.905 327.213C530.295 331.175 521.609 335.06 512.999 339.022C492.655 348.469 472.388 357.992 452.12 367.591C422.329 381.609 392.537 395.627 362.669 409.493C361.069 410.255 358.707 410.483 357.031 409.95C326.096 399.513 295.238 388.923 264.379 378.333C263.313 377.952 262.398 377.267 261.408 376.733C261.865 376.505 262.246 376.2 262.703 375.972C282.132 367.667 301.562 359.211 321.067 351.135C363.583 333.537 406.099 316.167 448.692 298.796C452.73 297.12 457.149 295.597 461.416 295.444C469.111 295.14 476.883 295.825 484.579 296.13C502.637 296.816 520.771 297.577 538.829 298.339C538.981 302.072 538.981 305.882 538.981 309.691Z" fill="#1B2EBC"></path><path d="M538.981 298.263C520.923 297.501 502.789 296.816 484.731 296.054C477.035 295.749 469.264 295.063 461.568 295.368C457.301 295.52 452.882 297.12 448.844 298.72C406.251 316.09 363.735 333.46 321.219 351.059C301.714 359.135 282.284 367.591 262.855 375.895C262.398 376.124 262.017 376.429 261.56 376.657C260.798 377.495 259.35 378.638 259.503 379.171C259.884 380.314 260.95 381.533 262.093 381.99C272.075 385.952 282.132 389.685 292.19 393.494C313.067 401.493 334.02 409.493 354.821 417.568C358.402 418.94 361.678 418.711 365.107 417.111C381.793 409.112 398.48 401.189 415.166 393.189C432.538 384.885 449.91 376.581 467.283 368.277C491.131 356.849 515.056 345.421 538.905 333.994C538.905 335.517 538.905 337.041 538.905 338.565C533.952 340.774 528.999 342.907 524.123 345.193C517.799 348.164 511.627 351.135 504.541 354.564C507.589 355.783 509.951 356.697 512.313 357.611C515.818 358.982 518.18 361.496 518.256 365.229C518.332 369.191 515.285 370.867 512.008 372.01C507.132 373.686 502.255 372.848 497.455 371.248C496.998 371.096 496.541 370.791 496.084 370.639C491.817 368.734 487.626 365.306 483.359 365.306C479.245 365.306 475.13 368.734 471.016 370.715C451.51 380.085 432.005 389.456 412.499 398.751C411.356 399.284 410.214 399.894 408.613 400.655C412.728 402.56 416.385 404.388 420.119 405.912C422.862 407.055 424.614 408.655 424.614 411.778C424.614 415.054 422.938 417.34 420.043 418.635C414.938 420.92 409.68 420.768 404.499 418.787C399.318 416.807 394.289 414.292 389.108 412.388C387.584 411.855 385.374 411.931 383.927 412.54C378.212 414.978 372.726 417.797 367.088 420.54C362.821 422.597 358.402 423.13 353.83 421.378C322.515 409.34 291.199 397.379 259.884 385.495C257.445 384.58 256.226 383.209 255.769 380.771C255.083 377.343 255.769 374.981 259.274 373.457C273.446 367.439 287.542 361.039 301.79 355.097C350.402 334.984 399.165 315.024 447.777 294.987C454.482 292.244 461.263 291.33 468.578 291.711C491.512 292.93 514.446 293.768 537.381 294.682C537.838 294.682 538.371 294.53 538.905 294.454C538.981 295.749 538.981 296.968 538.981 298.263ZM391.241 408.959C397.337 411.626 402.442 414.369 407.852 415.892C411.433 416.883 415.699 417.416 419.128 414.673C421.643 412.693 421.49 410.864 418.747 409.493C414.404 407.36 410.061 405.379 405.642 403.474C404.804 403.093 403.661 403.017 402.823 403.398C399.318 404.998 395.813 406.75 391.241 408.959ZM488.922 362.106C488.922 362.487 488.922 362.792 488.922 363.172C492.96 364.925 496.846 367.058 501.036 368.277C503.855 369.115 507.056 369.115 509.951 368.582C511.627 368.277 512.999 366.372 514.523 365.153C513.227 363.782 512.084 361.954 510.484 361.115C507.589 359.592 504.389 358.601 501.341 357.611C500.503 357.306 499.36 357.306 498.522 357.687C495.246 359.058 492.122 360.582 488.922 362.106Z" fill="#1B0660"></path><path d="M538.98 334.07C515.131 345.498 491.207 356.925 467.358 368.353C449.986 376.657 432.614 384.961 415.242 393.266C398.555 401.265 381.869 409.188 365.182 417.188C361.83 418.787 358.477 419.016 354.896 417.645C334.019 409.569 313.142 401.57 292.265 393.57C282.208 389.761 272.15 385.952 262.169 382.066C261.102 381.609 259.959 380.39 259.578 379.248C259.426 378.714 260.873 377.571 261.635 376.733C262.626 377.267 263.54 377.952 264.607 378.333C295.465 388.923 326.324 399.513 357.258 409.95C358.935 410.483 361.297 410.255 362.897 409.493C392.764 395.627 422.556 381.533 452.348 367.591C472.615 358.068 492.883 348.545 513.227 339.022C521.836 334.984 530.446 331.099 539.132 327.213C538.98 329.499 538.98 331.784 538.98 334.07Z" fill="#101C80"></path><path d="M391.24 408.96C395.812 406.75 399.241 404.922 402.822 403.322C403.584 402.941 404.803 403.093 405.641 403.398C410.06 405.303 414.403 407.36 418.746 409.417C421.489 410.788 421.642 412.54 419.127 414.597C415.698 417.34 411.432 416.883 407.851 415.816C402.441 414.369 397.412 411.626 391.24 408.96Z" fill="#1B2EBC"></path><path d="M488.922 362.106C492.122 360.582 495.246 359.059 498.446 357.687C499.284 357.306 500.427 357.306 501.265 357.611C504.389 358.678 507.513 359.592 510.408 361.116C512.008 361.954 513.075 363.782 514.447 365.153C512.923 366.372 511.551 368.277 509.875 368.582C506.98 369.039 503.78 369.039 500.96 368.277C496.77 367.058 492.884 364.925 488.846 363.172C488.922 362.792 488.922 362.487 488.922 362.106Z" fill="#1B2EBC"></path><path d="M412.195 256.819C407.852 254.457 403.357 253.086 398.785 252.476C382.48 250.343 365.717 257.885 354.897 264.285C363.965 257.2 376.156 245.239 383.851 228.478C386.213 223.374 388.118 217.812 389.337 211.87C392.69 196.023 389.642 180.177 383.622 165.702C383.394 167.454 383.089 169.282 382.708 171.187C376.765 201.051 363.507 219.031 306.591 241.429C249.674 263.828 139.574 242.42 139.574 242.42L138.279 241.429C138.432 241.81 138.584 242.267 138.736 242.648C149.708 273.351 181.252 294.149 213.863 300.396C232.607 303.977 251.655 302.758 267.427 295.901C267.427 295.901 270.627 294.835 274.361 294.073C276.19 293.616 277.79 293.387 279.161 293.311C277.561 293.464 275.885 293.768 274.361 294.073C265.065 296.359 249.827 304.51 228.645 329.88C228.188 330.413 227.73 331.023 227.197 331.556C188.643 378.41 204.796 427.244 232.531 415.588C232.531 415.588 241.521 414.826 248.303 378.486C255.084 342.069 271.923 312.129 300.8 302.301C300.8 302.301 312.077 302.682 320.687 324.471C329.296 346.183 349.945 372.848 368.689 361.573C387.432 350.297 366.784 321.042 353.678 305.272C340.573 289.502 342.783 291.788 342.783 291.788C342.783 291.788 359.698 275.255 383.318 276.779C406.938 278.303 404.728 301.158 405.033 304.51C405.414 307.862 404.652 330.794 425.3 331.175C445.949 331.556 442.139 273.351 412.195 256.819ZM279.161 293.235C281.523 293.006 283.733 293.159 285.028 293.997C284.723 293.844 282.818 293.006 279.161 293.235Z" fill="url(#paint1_linear_102_190)"></path><path d="M174.7 70.166C174.7 71.3088 174.548 72.4516 174.167 73.5182C172.719 78.0131 168.529 81.2128 163.652 81.2128C157.557 81.2128 152.604 76.2608 152.604 70.166C152.604 64.0713 157.557 59.1193 163.652 59.1193C167.309 59.1193 170.586 60.8715 172.567 63.6903C173.938 65.5188 174.7 67.7281 174.7 70.166Z" fill="#E6FAFF"></path><path d="M227.121 21.7887C227.121 27.8835 222.168 32.8355 216.072 32.8355C209.977 32.8355 205.024 27.8835 205.024 21.7887C205.024 15.694 209.977 10.7419 216.072 10.7419C222.168 10.7419 227.121 15.694 227.121 21.7887Z" fill="#E6FAFF"></path><path d="M333.868 16.3034C333.868 22.3982 328.915 27.3502 322.819 27.3502C316.724 27.3502 311.771 22.3982 311.771 16.3034C311.771 10.2087 316.724 5.25665 322.819 5.25665C328.915 5.25665 333.868 10.2087 333.868 16.3034Z" fill="#E6FAFF"></path><path d="M407.853 89.4408C407.853 95.5356 402.9 100.488 396.805 100.488C390.709 100.488 385.756 95.5356 385.756 89.4408C385.756 83.3461 390.709 78.394 396.805 78.394C402.9 78.394 407.853 83.3461 407.853 89.4408Z" fill="#E6FAFF"></path><path d="M274.285 293.997C264.989 296.282 249.75 304.434 228.569 329.804C220.035 332.775 209.444 336.127 197.71 339.174C168.299 346.869 136.146 344.812 132.793 326.071C129.441 307.329 145.518 299.406 171.804 303.596C197.558 307.634 213.177 300.701 213.787 300.396C232.531 303.977 251.579 302.758 267.351 295.901C267.351 295.825 270.551 294.759 274.285 293.997Z" fill="url(#paint2_linear_102_190)"></path><path d="M398.708 252.476C382.403 250.343 365.64 257.885 354.821 264.285C363.888 257.199 376.079 245.238 383.774 228.478C383.774 228.478 393.908 222.916 404.042 208.289C414.175 193.661 432.157 175.682 447.929 186.881C463.701 198.08 449.301 241.582 398.708 252.476Z" fill="url(#paint3_linear_102_190)"></path><path d="M396.861 71.9922C392.749 71.3812 388.789 72.4505 385.59 74.7418C385.59 74.7418 348.887 59.1612 324.519 100.786C324.519 100.786 311.421 93.1482 291.927 86.7327C291.927 86.7327 287.282 56.9463 311.878 35.0265C313.249 35.6375 314.772 36.0958 316.371 36.3249C326.346 37.776 335.56 30.9022 337.007 20.897C338.454 10.8919 331.601 1.65043 321.625 0.199295C313.401 -1.02271 305.634 3.48344 302.436 10.7391C301.826 11.121 263.752 33.8045 262.61 85.2052C262.61 85.2052 241.059 82.6084 213.95 96.1269C213.95 96.1269 185.166 73.9016 205.193 35.7903C207.097 37.0123 209.229 37.8524 211.59 38.1579C220.575 39.4563 228.952 33.1935 230.246 24.2576C231.541 15.2453 225.373 6.84396 216.311 5.54558C211.133 4.78182 206.259 6.53846 202.68 9.8226C202.071 10.0517 171.078 20.3624 172.373 58.5502C169.86 56.4116 166.662 54.8841 163.083 54.3495C153.031 52.8984 143.665 59.8485 142.142 70.0065C141.913 71.6104 141.913 73.2142 142.065 74.7418C141.304 75.3528 95.6907 112.395 143.665 164.941C143.665 164.941 121.886 194.117 138.334 241.928L139.629 242.921C139.629 242.921 249.664 264.382 306.548 241.928C363.431 219.473 376.681 201.449 382.621 171.509C383.001 169.6 383.306 167.843 383.534 166.01C374.168 143.403 357.491 124.386 346.45 114.533C346.45 114.533 356.045 89.9405 381.631 100.709C384.067 103.841 387.57 105.979 391.606 106.59C400.516 107.889 408.892 101.168 410.263 91.6207C411.862 82.1502 405.77 73.2906 396.861 71.9922ZM322.92 5.31645C329.012 5.31645 333.961 10.2809 333.961 16.3909C333.961 22.5009 329.012 27.4653 322.92 27.4653C316.828 27.4653 311.878 22.5009 311.878 16.3909C311.878 10.2809 316.828 5.31645 322.92 5.31645ZM216.235 10.8155C222.327 10.8155 227.276 15.7799 227.276 21.8899C227.276 28 222.327 32.9644 216.235 32.9644C210.143 32.9644 205.193 28 205.193 21.8899C205.193 15.7799 210.143 10.8155 216.235 10.8155ZM163.844 59.3139C167.499 59.3139 170.774 61.0705 172.754 63.8964C174.124 65.7294 174.886 68.0207 174.886 70.4647C174.886 71.6104 174.733 72.756 174.353 73.8252C172.906 78.3314 168.718 81.5392 163.844 81.5392C157.752 81.5392 152.803 76.5748 152.803 70.4647C152.803 64.3547 157.752 59.3139 163.844 59.3139ZM160.494 134.926C160.494 134.926 136.964 112.624 157.828 91.0097C165.596 92.1554 172.906 88.2602 176.561 81.8447C179.074 90.0932 182.805 99.2583 188.06 109.34C187.983 109.34 171.916 120.643 160.494 134.926ZM396.784 100.786C390.692 100.786 385.743 95.8214 385.743 89.7113C385.743 83.6013 390.692 78.6369 396.784 78.6369C402.876 78.6369 407.826 83.6013 407.826 89.7113C407.902 95.8214 402.952 100.786 396.784 100.786Z" fill="url(#paint4_linear_102_190)"></path><path d="M174.7 70.166C174.7 71.3088 174.548 72.4516 174.167 73.5182C172.719 78.0131 168.529 81.2128 163.652 81.2128C157.557 81.2128 152.604 76.2608 152.604 70.166C152.604 64.0713 157.557 59.1193 163.652 59.1193C167.309 59.1193 170.586 60.8715 172.567 63.6903C173.938 65.5188 174.7 67.7281 174.7 70.166Z" fill="#E6FAFF"></path><path d="M227.121 21.7887C227.121 27.8835 222.168 32.8355 216.072 32.8355C209.977 32.8355 205.024 27.8835 205.024 21.7887C205.024 15.694 209.977 10.7419 216.072 10.7419C222.168 10.7419 227.121 15.694 227.121 21.7887Z" fill="#E6FAFF"></path><path d="M333.868 16.3034C333.868 22.3982 328.915 27.3502 322.819 27.3502C316.724 27.3502 311.771 22.3982 311.771 16.3034C311.771 10.2087 316.724 5.25665 322.819 5.25665C328.915 5.25665 333.868 10.2087 333.868 16.3034Z" fill="#E6FAFF"></path><path d="M407.853 89.4408C407.853 95.5356 402.9 100.488 396.805 100.488C390.709 100.488 385.756 95.5356 385.756 89.4408C385.756 83.3461 390.709 78.394 396.805 78.394C402.9 78.394 407.853 83.3461 407.853 89.4408Z" fill="#E6FAFF"></path><path d="M347.125 115.42C347.125 115.42 358.783 91.8787 380.345 99.8781C380.345 99.8781 388.803 109.706 400.46 105.592C412.118 101.554 414.023 84.2602 404.346 76.1084C394.67 67.9567 384.231 74.4324 384.231 74.4324C384.231 74.4324 351.011 58.205 323.429 99.3448C323.429 99.3448 309.562 90.355 292.113 87.3076C292.113 87.3076 288.532 52.7959 313.143 35.3496C313.143 35.3496 330.21 39.9207 336.305 27.1978C342.401 14.475 334.782 4.19006 327.315 1.67596C319.848 -0.838132 309.714 -1.52379 301.79 11.3514C301.79 11.3514 263.845 31.5404 262.169 84.1078C262.169 84.1078 238.625 83.346 212.719 95.3832C212.719 95.3832 185.975 71.3088 205.1 36.4924C205.1 36.4924 219.958 45.3298 227.577 33.1403C235.197 20.9507 228.263 8.60877 220.644 6.39942C213.024 4.19006 206.395 4.4948 200.3 9.59918C200.3 9.59918 171.803 22.322 171.727 57.5956C167.156 54.9291 160.603 54.2434 152.222 57.2146C152.222 57.2146 141.936 60.262 140.564 73.9753C140.564 73.9753 95.8385 111.915 141.555 164.407C141.555 164.407 129.745 190.309 131.573 214.536C131.573 214.536 130.735 200.442 145.669 163.873C145.669 163.873 99.4196 119.381 143.993 75.1942C143.993 75.1942 144.831 60.262 159.917 59.2716C165.479 58.8907 169.518 60.6429 172.032 63.3094C175.613 67.1948 176.299 73.1372 174.546 77.9369C174.242 78.8511 173.785 79.7653 173.251 80.6033C168.146 88.7551 157.86 86.8505 157.86 86.8505C157.86 86.8505 126.544 109.706 161.213 139.189C161.213 139.189 174.927 122.429 192.681 110.392C192.681 110.392 183.69 96.7545 178.737 78.9273C180.871 72.9087 179.804 65.8235 175.689 61.0239C174.775 43.4252 180.566 24.8361 202.662 12.418C202.662 12.418 210.129 6.85653 219.577 9.90391C229.025 12.9513 228.034 27.5026 225.139 31.0833C222.32 34.283 216.91 38.8541 203.729 31.9213C203.729 31.9213 177.975 65.5949 212.034 100.183C212.034 100.183 231.463 88.9837 265.674 87.1552C265.674 87.1552 261.788 42.4348 304.304 13.8655C304.304 13.8655 308.342 5.56139 318.171 4.03769C328 2.514 338.515 12.3418 333.791 24.1505C328.991 35.9591 312.228 31.6166 312.228 31.6166C312.228 31.6166 283.427 50.2056 289.523 89.6693C289.523 89.6693 312.381 95.9165 324.724 104.068C324.724 104.068 348.954 61.7857 385.146 78.1654C385.146 78.1654 393.146 73.5943 401.07 79.0035C409.07 84.4126 407.166 96.7545 399.927 101.326C392.613 105.897 381.26 96.6021 381.26 96.6021C381.26 96.6021 356.878 85.6315 342.172 117.096C342.172 117.096 375.088 141.323 384.688 181.243C395.889 227.792 354.744 263.599 354.744 263.599C354.744 263.599 376.383 257.352 387.508 220.631C398.632 183.91 380.726 144.141 347.125 115.42ZM176.223 83.5745C178.813 91.5739 182.699 100.259 188.109 109.782C188.109 109.782 172.032 119.915 160.679 134.466C160.679 134.466 134.773 112.982 158.774 90.1264C158.851 90.1264 169.746 92.7167 176.223 83.5745Z" fill="url(#paint5_linear_102_190)"></path><path d="M176.147 286.378C176.147 286.378 210.434 302.377 240.987 299.406C271.541 296.359 279.999 288.664 287.313 295.063C287.313 295.063 271.693 294.911 257.369 305.653C243.045 316.395 207.843 355.173 208.758 385.571C209.672 415.892 227.196 415.511 233.063 410.102C238.93 404.617 246.473 387.856 249.293 373.915C249.293 373.915 246.245 416.273 225.901 418.026C205.176 419.778 176.452 370.486 255.312 302.529C255.312 302.377 220.034 311.443 176.147 286.378Z" fill="#161CC1"></path><path d="M220.948 332.318C220.948 332.318 177.289 341.612 159.003 339.479C140.716 337.422 133.173 329.118 135.84 317.843C138.507 306.567 153.517 302.453 168.451 302.987C168.451 302.987 128.525 295.749 132.259 326.299C135.916 355.935 206.776 341.917 220.948 332.318Z" fill="#161CC1"></path><path d="M297.522 286.378C297.522 286.378 297.675 286.074 298.056 285.617C299.96 283.026 307.046 275.179 321.447 278.455C338.591 282.417 364.192 311.595 374.554 338.184C384.916 364.772 355.582 373.838 338.286 352.735C338.286 352.735 350.477 364.544 363.658 359.973C376.84 355.478 372.497 336.584 355.201 313.805C337.829 291.102 320.685 268.856 297.522 286.378Z" fill="#161CC1"></path><path d="M339.353 275.027C339.353 275.027 358.096 257.961 376.688 253.771C396.574 249.276 408.079 253.771 417.146 260.171C426.213 266.57 441.3 288.664 437.49 315.786C433.68 342.907 409.756 333.08 406.022 313.652C402.289 294.225 407.546 278.76 375.164 276.931C375.164 276.931 384.536 275.484 396.65 279.598C408.689 283.712 409.451 308.777 409.451 308.777C409.451 308.777 411.356 327.442 424.309 326.452C437.262 325.461 435.204 296.663 428.652 282.188C422.023 267.713 411.661 259.028 395.66 257.657C379.659 256.285 368.535 254.305 339.353 275.027Z" fill="#161CC1"></path><path d="M413.033 248.286C413.033 248.286 442.062 238.153 452.425 211.565C452.425 211.565 460.73 194.042 446.939 186.348C433.148 178.653 422.252 186.652 411.89 198.309C401.527 209.965 394.899 221.469 385.222 227.64L383.774 231.144C383.774 231.144 386.974 230.002 394.137 225.126C401.299 220.25 408.08 209.508 416.157 200.594C424.233 191.757 434.824 182.538 445.72 190.995C456.615 199.451 445.339 217.964 436.5 228.097C427.738 238.306 418.29 246.229 413.033 248.286Z" fill="#161CC1"></path><path d="M340.115 176.749C340.115 176.749 337.905 184.9 332.191 189.243C332.191 189.243 287.313 188.557 268.874 210.955C268.874 210.955 243.654 213.851 232.987 209.279C232.987 209.279 232.987 178.425 232.987 175.225C232.987 174.387 233.063 171.187 233.673 166.845C235.349 154.579 241.444 132.638 263.159 124.791C278.551 119.229 292.494 123.114 302.856 128.828C312.381 134.009 318.857 140.713 320.533 142.923C323.962 147.494 333.791 159.455 340.115 176.749Z" fill="#4061F0"></path><path d="M340.115 176.749C340.115 176.749 337.905 184.9 332.191 189.243C332.191 189.243 287.313 188.557 268.874 210.955C268.874 210.955 243.654 213.851 232.987 209.279C232.987 209.279 232.987 178.425 232.987 175.225C232.987 174.387 233.063 171.187 233.673 166.845C235.349 154.579 241.444 132.638 263.159 124.791C278.551 119.229 292.494 123.114 302.856 128.828C312.381 134.009 318.857 140.713 320.533 142.923C323.962 147.494 333.791 159.455 340.115 176.749Z" fill="white"></path><path d="M338.363 189.624C343.468 185.357 345.297 176.748 345.297 176.748C331.505 140.942 311.848 123.8 290.97 119.305C280.837 117.096 270.322 117.858 260.188 120.905C243.502 125.857 235.578 140.637 231.768 153.207C228.492 164.178 228.339 173.549 228.339 173.549V211.87C233.597 219.336 266.97 216.212 266.97 216.212C265.446 218.879 265.293 223.145 265.293 223.145C284.418 201.28 306.59 198.08 312.686 197.547C318.781 197.014 333.867 196.557 340.115 194.652C346.363 192.823 338.363 189.624 338.363 189.624ZM332.115 189.243C332.115 189.243 287.237 188.557 268.798 210.955C268.798 210.955 243.578 213.85 232.911 209.279C232.911 209.279 232.911 178.425 232.911 175.225C232.911 174.387 232.987 171.187 233.597 166.844C235.273 154.579 241.368 132.638 263.084 124.791C278.475 119.229 292.418 123.114 302.781 128.828C312.305 134.009 318.781 140.713 320.457 142.922C324.039 147.494 333.867 159.531 340.115 176.748C340.115 176.748 337.906 184.9 332.115 189.243Z" fill="#1B2EBC"></path><path d="M312.229 157.55C310.705 179.72 291.504 196.557 269.332 195.033C252.264 193.89 238.397 182.234 233.597 166.845C235.273 154.579 241.369 132.638 263.084 124.791C278.475 119.229 292.419 123.114 302.781 128.828C309.257 136.523 312.915 146.656 312.229 157.55Z" fill="#33D7FB"></path><path d="M271.998 178.044C282.139 178.044 290.36 169.823 290.36 159.683C290.36 149.543 282.139 141.323 271.998 141.323C261.856 141.323 253.635 149.543 253.635 159.683C253.635 169.823 261.856 178.044 271.998 178.044Z" fill="#0057BF"></path><path d="M250.269 150.275C251.627 146.203 249.849 141.942 246.296 140.757C242.743 139.572 238.762 141.911 237.404 145.983C236.045 150.054 237.824 154.315 241.377 155.5C244.929 156.685 248.91 154.346 250.269 150.275Z" fill="white"></path><path d="M294.708 171.074C296.37 168.195 294.557 164.037 290.658 161.786C286.758 159.535 282.25 160.043 280.588 162.922C278.925 165.8 280.739 169.959 284.638 172.21C288.538 174.461 293.046 173.952 294.708 171.074Z" fill="white"></path><path d="M243.807 163.34C243.807 163.34 241.978 171.492 250.665 176.748C259.351 182.005 268.418 177.739 268.418 177.739C268.418 177.739 258.741 176.52 252.646 172.635C246.626 168.749 243.807 163.34 243.807 163.34Z" fill="white"></path><path d="M352.153 217.888L341.943 230.611C341.943 230.611 338.895 234.649 338.057 238.763C337.753 240.134 336.914 242.572 335.162 245.391C302.399 228.021 277.331 255.828 277.331 255.828L277.712 257.352C275.883 256.666 273.978 255.904 272.074 254.99C272.074 254.99 262.778 252.629 244.568 251.257C244.568 251.257 258.664 250.952 263.769 249.734C268.874 248.591 276.493 236.706 298.97 228.097C321.523 219.488 333.181 227.107 339.276 225.735C345.372 224.288 352.153 217.888 352.153 217.888Z" fill="#FF9BD0"></path><path d="M335.162 245.315C331.886 250.572 325.486 257.047 314.361 259.485C299.808 262.685 288.913 261.542 277.636 257.276L277.255 255.752C277.331 255.752 302.399 227.945 335.162 245.315Z" fill="#FF73C7"></path><path d="M142.698 328.051C142.698 328.051 137.669 322.795 140.489 315.024C143.308 307.253 154.584 308.777 154.584 308.777C154.584 308.777 139.498 310.529 142.698 328.051Z" fill="#FDFEFE"></path><path d="M235.806 336.279C235.806 336.279 214.472 354.945 214.929 381.076C214.853 381.076 219.12 360.201 235.806 336.279Z" fill="#FDFEFE"></path><path d="M214.852 388.314C214.852 388.314 211.043 397.379 218.51 403.017C218.51 403.017 214.852 395.551 214.852 388.314Z" fill="#FDFEFE"></path><path d="M304.533 287.064C304.533 287.064 313.981 278.988 325.639 287.064C337.296 295.14 341.715 304.739 341.715 307.939C341.715 307.939 336.077 295.521 323.124 288.816C310.171 282.112 304.533 287.064 304.533 287.064Z" fill="#FDFEFE"></path><path d="M360.534 333.689C360.534 333.689 363.963 339.327 363.125 346.564C362.287 353.802 353.906 356.621 353.906 356.621C353.906 356.621 365.106 357.763 366.782 347.783C368.611 337.117 360.534 333.689 360.534 333.689Z" fill="#FDFEFE"></path><path d="M394.974 260.933C394.974 260.933 405.641 259.714 416.308 269.77C426.975 279.826 425.985 294.302 425.985 294.302C425.985 294.302 421.642 268.399 394.974 260.933Z" fill="#FDFEFE"></path><path d="M437.49 193.433C437.49 193.433 421.032 189.014 414.404 212.708C414.404 212.708 416.994 200.671 437.49 193.433Z" fill="#FDFEFE"></path><path d="M412.195 214.46C412.195 214.46 408.004 221.698 400.156 224.516C400.156 224.516 411.433 224.516 412.195 214.46Z" fill="#FDFEFE"></path><path d="M139.726 213.47C139.726 213.47 134.468 192.976 148.793 168.673C148.717 168.673 139.269 199.223 139.726 213.47Z" fill="#FDFEFE"></path><path d="M151.384 136.752C151.384 136.752 157.175 143.151 160.603 144.827C160.603 144.827 174.699 125.324 189.938 120.143C189.938 120.143 170.28 133.78 162.584 150.465C162.584 150.389 153.593 145.741 151.384 136.752Z" fill="#FDFEFE"></path><path d="M128.678 108.563C128.678 108.563 128.678 94.6976 142.545 81.67C142.545 81.67 131.04 98.5068 128.678 108.563Z" fill="#FDFEFE"></path><path d="M197.785 19.1985C197.785 19.1985 180.489 26.436 179.727 46.9297C179.727 46.9297 184.299 30.0167 197.785 19.1985Z" fill="#FDFEFE"></path><path d="M303.923 19.1985C303.923 19.1985 288.456 22.6268 283.199 41.673C283.199 41.673 293.561 27.3503 303.923 19.1985Z" fill="#FDFEFE"></path><path d="M202.434 95.1547L211.272 104.373C211.272 104.373 224.911 96.1451 244.645 93.3263C244.645 93.3263 217.139 102.545 210.662 110.392C210.662 110.392 203.043 101.783 202.434 95.1547Z" fill="#FDFEFE"></path><path d="M284.418 80.4509V93.3261C284.418 93.3261 297.447 94.926 310.781 103.154C310.781 103.154 296.685 97.5163 281.218 97.1354C281.218 97.1354 281.218 87.3076 284.418 80.4509Z" fill="#FDFEFE"></path><path d="M349.715 84.2603C349.715 84.2603 358.782 72.147 378.059 78.3941C378.059 78.3941 358.934 79.4607 349.715 84.2603Z" fill="#FDFEFE"></path><path d="M424.689 344.583C424.537 340.165 423.547 335.441 424.461 331.251C428.575 312.891 433.299 294.606 437.871 276.322C438.633 273.275 441.376 271.675 444.5 272.437C447.852 273.275 449.3 275.484 448.538 278.684C443.89 296.968 439.547 315.252 434.366 333.384C433.147 337.651 429.337 341.231 426.671 345.117C425.909 344.964 425.299 344.736 424.689 344.583Z" fill="#101C7F"></path><path d="M447.472 209.279C441.453 194.271 435.357 179.263 429.338 164.254C423.928 150.77 418.595 137.209 413.185 123.724C415.013 119.686 420.576 117.172 426.976 117.629C438.633 145.741 450.291 173.854 461.949 201.966C462.101 202.347 462.101 202.728 462.177 203.108C456.006 202.042 451.358 204.861 447.472 209.279Z" fill="#FEB700"></path><path d="M447.472 209.279C451.358 204.861 455.929 202.042 462.177 203.108C463.015 205.013 463.93 206.918 464.768 208.899C466.52 213.089 465.53 215.527 461.187 217.584C456.006 220.021 451.51 219.183 449.682 215.298C448.767 213.393 448.234 211.26 447.472 209.279Z" fill="#FE5D78"></path><path d="M426.976 117.705C420.652 117.248 415.014 119.762 413.185 123.8C413.033 119.381 412.804 115.039 412.652 110.62C414.785 109.935 416.995 109.173 419.128 108.487C421.795 111.534 424.386 114.582 426.976 117.705Z" fill="#FCDBB9"></path><path d="M419.204 108.487C417.071 109.173 414.861 109.934 412.728 110.62C413.033 108.639 413.337 106.735 413.795 103.535C416.233 105.744 417.68 107.116 419.204 108.487Z" fill="#1C1C1B"></path></g><defs><linearGradient id="paint0_linear_102_190" x1="274.875" y1="612.445" x2="274.875" y2="662.763" gradientUnits="userSpaceOnUse"><stop stop-color="#10EBD1"></stop><stop offset="1" stop-color="#5865F2"></stop></linearGradient><linearGradient id="paint1_linear_102_190" x1="280.752" y1="241.441" x2="315.031" y2="375.528" gradientUnits="userSpaceOnUse"><stop stop-color="#D7FF85"></stop><stop offset="0.9888" stop-color="#30EDB0"></stop></linearGradient><linearGradient id="paint2_linear_102_190" x1="254.921" y1="307.582" x2="131.87" y2="328.593" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint3_linear_102_190" x1="364.331" y1="241.276" x2="457.741" y2="200.755" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint4_linear_102_190" x1="235.657" y1="-6.43315" x2="291.571" y2="240.237" gradientUnits="userSpaceOnUse"><stop offset="0.1922" stop-color="#FF78B1"></stop><stop offset="0.4324" stop-color="#FDBA85"></stop><stop offset="0.8121" stop-color="#FAEC63"></stop><stop offset="1" stop-color="#F9FF56"></stop></linearGradient><linearGradient id="paint5_linear_102_190" x1="236.177" y1="0.738284" x2="302.528" y2="286.591" gradientUnits="userSpaceOnUse"><stop offset="0.0195531" stop-color="#E86C78"></stop><stop offset="0.2989" stop-color="#FF989C"></stop><stop offset="0.8045" stop-color="#F9D956"></stop></linearGradient><clipPath id="clip0_102_190"><rect width="432.018" height="422.063" fill="white" transform="translate(120.982)"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "mascot-xl") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "601",
          height: "1302",
          viewBox: "0 0 801 1302",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M572.768 1246.21C572.81 1249.91 571.912 1251.83 568.32 1253.44C533.343 1269.01 499.278 1284.85 464.426 1300.68C461.069 1302.21 458.527 1302.61 455.046 1300.4C422.859 1279.93 390.562 1259.63 358.155 1239.53C353.914 1236.9 352.519 1234.1 352.353 1229.15C351.303 1196.51 349.963 1163.88 348.402 1131.27C348.181 1126.53 349.714 1124.51 353.872 1122.66C388.684 1107.15 423.343 1091.33 458.182 1075.89C460.53 1074.85 464.522 1075.14 466.705 1076.51C500.038 1097.31 533.233 1118.35 566.317 1139.54C568.389 1140.87 570.531 1143.95 570.586 1146.27C570.945 1163.04 571.373 1179.77 571.373 1196.55L572.768 1246.21ZM358.044 1128.92C357.133 1130.7 355.447 1132.5 355.461 1134.28C355.503 1139.76 356.442 1145.22 356.608 1150.7C357.202 1169.99 357.547 1189.28 358.141 1208.57C358.348 1215.2 358.666 1221.87 359.619 1228.43C359.937 1230.67 361.857 1233.34 363.819 1234.59C387.385 1249.71 411.09 1264.6 434.781 1279.5C441.453 1283.7 448.236 1287.71 456.635 1292.82C455.916 1284.12 455.06 1277.35 454.866 1270.55C454.231 1247.81 453.665 1225.06 453.513 1202.33C453.485 1197.48 451.786 1194.81 447.904 1192.41C440.306 1187.7 432.847 1182.72 425.581 1177.49C424.13 1176.44 423.854 1173.77 423.039 1171.85C425.277 1171.95 427.971 1171.26 429.67 1172.27C436.383 1176.24 443.193 1180.26 449.161 1185.22C454.673 1189.81 459.384 1189.27 465.351 1186.52C485.133 1177.42 505.121 1168.77 525 1159.9C536.465 1154.79 547.89 1149.58 559.618 1144.29C558.706 1143.09 558.43 1142.4 557.932 1142.08C527.251 1122.67 496.598 1103.24 465.793 1084.04C463.887 1082.85 460.392 1082.52 458.361 1083.43C424.862 1098.46 391.46 1113.72 358.044 1128.92ZM563.637 1151.09C561.648 1151.41 560.695 1151.38 559.935 1151.72C527.915 1166.05 495.88 1180.35 463.97 1194.92C462.188 1195.74 460.447 1198.94 460.447 1201.03C460.489 1210.41 461.414 1219.77 461.58 1229.14C461.815 1242.01 461.4 1254.9 461.732 1267.76C461.939 1276.08 462.975 1284.38 463.693 1293.28C470.006 1290.5 475.656 1288.1 481.265 1285.57C508.23 1273.41 535.139 1261.12 562.187 1249.14C565.862 1247.51 566.801 1245.41 566.677 1241.79C566.124 1225.52 565.765 1209.25 565.24 1192.99C564.798 1179.28 564.204 1165.58 563.637 1151.09Z" fill="#F7A901"></path><path d="M358.043 1128.92C391.473 1113.71 424.861 1098.44 458.374 1083.44C460.405 1082.53 463.886 1082.86 465.806 1084.05C496.611 1103.25 527.278 1122.69 557.945 1142.1C558.456 1142.41 558.732 1143.11 559.63 1144.31C547.902 1149.6 536.478 1154.81 525.013 1159.92C505.12 1168.79 485.132 1177.43 465.364 1186.54C459.396 1189.29 454.686 1189.82 449.174 1185.24C443.206 1180.26 436.382 1176.26 429.682 1172.28C427.983 1171.27 425.29 1171.95 423.052 1171.87C410.592 1163.81 398.076 1155.84 385.685 1147.68C376.374 1141.56 367.243 1135.19 358.043 1128.92Z" fill="#FEE65C"></path><path d="M563.638 1151.09C564.19 1165.58 564.784 1179.28 565.226 1192.99C565.751 1209.26 566.111 1225.53 566.663 1241.79C566.787 1245.4 565.862 1247.51 562.174 1249.14C535.126 1261.12 508.216 1273.41 481.251 1285.57C475.657 1288.1 470.007 1290.51 463.68 1293.28C462.962 1284.38 461.926 1276.08 461.719 1267.76C461.387 1254.89 461.787 1242.01 461.566 1229.14C461.401 1219.76 460.475 1210.39 460.434 1201.03C460.42 1198.94 462.161 1195.74 463.956 1194.92C495.867 1180.35 527.901 1166.05 559.922 1151.72C560.709 1151.38 561.649 1151.41 563.638 1151.09Z" fill="#FECB00"></path><path d="M358.045 1128.92C367.259 1135.18 376.39 1141.54 385.687 1147.68C398.078 1155.84 410.593 1163.81 423.053 1171.87C423.868 1173.79 424.145 1176.45 425.595 1177.5C432.847 1182.72 440.307 1187.7 447.918 1192.42C451.786 1194.82 453.485 1197.49 453.527 1202.34C453.679 1225.09 454.245 1247.83 454.881 1270.57C455.074 1277.36 455.931 1284.13 456.649 1292.83C448.25 1287.72 441.467 1283.72 434.795 1279.52C411.09 1264.61 387.399 1249.71 363.833 1234.61C361.871 1233.35 359.951 1230.69 359.633 1228.45C358.694 1221.89 358.363 1215.23 358.155 1208.58C357.561 1189.3 357.216 1170 356.622 1150.72C356.456 1145.23 355.517 1139.76 355.475 1134.29C355.434 1132.5 357.133 1130.71 358.045 1128.92Z" fill="#FED531"></path><path d="M534.42 561.316C397.676 607.661 260.738 654.062 123.22 700.671C123.22 697.286 123.22 694.758 123.22 692.244C123.22 623.879 123.759 555.514 122.889 487.176C122.626 467.201 130.127 452.033 143.264 438.648C163.005 418.548 187.856 407.414 214.351 399.457C247.643 389.456 281.901 385.616 316.436 384.732C367.313 383.433 418.176 384.511 468.514 392.882C484.262 395.507 499.692 400.452 514.956 405.301C520.634 407.11 525.856 411.213 530.442 415.233C532.859 417.346 534.641 421.546 534.669 424.82C534.931 469.467 534.835 514.127 534.821 558.774C534.807 559.437 534.614 560.114 534.42 561.316Z" fill="#1A1E7E"></path><path d="M581.829 1116.54C581.829 1107.88 579.495 1097.34 583.376 1091.08C587.092 1085.09 597.95 1083.5 605.686 1080C614.043 1076.23 622.318 1072.21 630.869 1068.91C633.314 1067.97 637.127 1068.22 639.364 1069.55C653.607 1077.94 667.641 1086.69 681.552 1095.63C683.417 1096.83 685.199 1099.74 685.254 1101.91C685.586 1115.93 685.558 1129.97 685.254 1143.99C685.213 1145.87 683.39 1148.6 681.663 1149.43C665.942 1156.99 650.125 1164.32 634.17 1171.35C632.195 1172.22 628.811 1171.77 626.89 1170.59C613.007 1162.04 599.235 1153.3 585.683 1144.24C583.708 1142.92 582.161 1139.69 581.981 1137.23C581.498 1130.35 581.829 1123.43 581.829 1116.54C581.594 1116.54 582.05 1116.54 581.829 1116.54ZM674.41 1099.34C661.439 1091.22 649.297 1083.58 637.085 1076.07C636.077 1075.44 634.295 1075.21 633.245 1075.66C619.9 1081.41 606.625 1087.31 591.872 1093.82C605.741 1102.73 618.008 1110.68 630.413 1118.43C631.463 1119.08 633.576 1118.76 634.861 1118.17C647.736 1112.15 660.555 1105.97 674.41 1099.34ZM678.513 1106.64C677.408 1106.64 676.662 1106.41 676.123 1106.66C663.014 1112.74 649.891 1118.83 636.85 1125.06C635.787 1125.57 634.557 1127.11 634.543 1128.17C634.378 1139.72 634.433 1151.28 634.433 1163.63C648.855 1157.07 662.033 1151.21 675.046 1145.01C676.662 1144.24 678.306 1141.64 678.347 1139.83C678.665 1128.82 678.513 1117.8 678.513 1106.64Z" fill="#273CD9"></path><path d="M674.41 1099.34C660.554 1105.97 647.735 1112.15 634.86 1118.16C633.576 1118.75 631.462 1119.07 630.412 1118.42C618.007 1110.67 605.741 1102.71 591.871 1093.8C606.625 1087.3 619.9 1081.4 633.244 1075.65C634.294 1075.2 636.076 1075.44 637.084 1076.05C649.296 1083.58 661.438 1091.22 674.41 1099.34Z" fill="#33D7FB"></path><path d="M678.513 1106.64C678.513 1117.81 678.665 1128.82 678.361 1139.83C678.305 1141.63 676.661 1144.24 675.059 1145.01C662.046 1151.23 648.882 1157.08 634.446 1163.63C634.446 1151.28 634.377 1139.72 634.557 1128.17C634.57 1127.09 635.814 1125.56 636.863 1125.06C649.904 1118.83 663.013 1112.74 676.137 1106.66C676.662 1106.41 677.407 1106.64 678.513 1106.64Z" fill="#33D7FB"></path><path d="M586.235 1098.1L628.63 1124.98V1164.46L586.235 1137.28V1098.1Z" fill="#33D7FB"></path><path d="M810.615 317.527C810.615 419.708 810.615 521.877 810.615 624.058C805.338 626.186 799.964 628.106 794.784 630.454C715.437 666.232 636.117 702.066 556.797 737.885C510.755 758.675 464.686 779.41 418.699 800.338C414.9 802.065 412.082 801.941 408.56 799.717C374.232 777.918 339.822 756.244 305.411 734.584C258.554 705.091 211.642 675.667 164.771 646.188C152.38 638.397 140.044 630.523 127.045 622.29C130.029 620.812 132.032 619.735 134.09 618.823C170.38 602.66 206.696 586.54 242.972 570.377C303.588 543.357 364.189 516.296 424.805 489.276C504.304 453.843 583.804 418.424 663.303 383.032C712.398 361.165 761.506 339.353 810.615 317.527Z" fill="#8BD8FE"></path><path d="M810.614 630.966C810.614 726.241 810.614 821.516 810.614 916.79C736.447 948.521 662.294 980.266 586.648 1012.63C584.756 966.286 582.905 921.156 581.012 874.851C526.489 897.851 473.001 920.423 417.262 943.935C417.262 919.056 417.276 896.125 417.262 873.194C417.248 853.412 417.303 833.63 417.11 813.849C417.068 810.133 418.104 808.24 421.655 806.638C453.689 792.258 485.599 777.629 517.565 763.096C547.237 749.614 576.896 736.159 606.596 722.746C648.204 703.945 689.839 685.186 731.474 666.454C757.845 654.588 784.23 642.791 810.614 630.966Z" fill="#1E82F9"></path><path d="M810.617 630.965C784.246 642.79 757.847 654.587 731.49 666.453C689.855 685.185 648.22 703.944 606.612 722.745C576.912 736.159 547.24 749.627 517.581 763.096C485.616 777.614 453.692 792.257 421.671 806.637C418.121 808.226 417.085 810.132 417.126 813.848C417.319 833.63 417.264 853.411 417.278 873.193C417.292 896.124 417.278 919.055 417.278 943.934C473.017 920.423 526.505 897.851 581.029 874.851C582.921 921.155 584.772 966.285 586.665 1012.63C662.31 980.251 736.477 948.521 810.63 916.79C810.63 919.553 810.63 922.315 810.63 925.078C808.254 925.783 805.782 926.239 803.53 927.206C731.186 958.218 658.87 989.299 586.499 1020.24C584.606 1021.06 582.148 1020.52 579.937 1020.62C579.067 1000.72 578.059 980.831 577.354 960.939C576.705 942.608 576.512 924.263 575.848 905.932C575.614 899.357 574.605 892.809 573.901 885.667C571.469 886.537 569.093 887.256 566.828 888.223C549.74 895.447 532.652 902.7 515.578 909.966C492.813 919.649 470.061 929.361 447.296 939.058C439.021 942.47 430.733 945.799 422.514 949.336C420.98 949.999 419.944 952.181 418.452 952.444C416.256 952.83 413.631 952.679 411.614 951.781C408.258 950.289 405.232 948.037 402.083 946.103C400.425 944.597 398.947 942.843 397.096 941.627C360.931 917.881 324.738 894.163 288.504 870.513C283.407 867.184 278.102 864.186 271.624 860.263C272.342 870.679 273.309 879.755 273.53 888.844C274.179 915.892 274.497 942.954 275.036 970.015C275.105 973.413 276.099 976.812 276.03 980.196C275.878 987.158 275.298 994.12 274.898 1001.08C235.03 975.112 195.163 949.142 155.31 923.172C147.989 918.406 140.819 913.392 133.332 908.888C129.713 906.72 128.608 904.081 128.414 900.006C125.265 831.986 121.991 763.98 118.689 695.974C117.557 672.545 116.369 649.103 114.932 625.688C114.656 621.282 116.079 619.21 120.043 617.455C348.319 515.84 576.539 414.114 804.787 312.429C806.638 311.6 808.669 311.214 810.617 310.62C810.617 312.927 810.617 315.22 810.617 317.527C761.522 339.353 712.399 361.151 663.318 383.005C583.805 418.396 504.306 453.815 424.82 489.248C364.205 516.268 303.603 543.33 242.987 570.35C206.698 586.526 170.395 602.647 134.106 618.795C132.034 619.721 130.031 620.798 127.061 622.262C140.059 630.496 152.409 638.37 164.786 646.161C211.657 675.64 258.556 705.063 305.426 734.556C339.851 756.216 374.247 777.891 408.575 799.689C412.084 801.927 414.916 802.037 418.715 800.311C464.701 779.396 510.771 758.648 556.813 737.858C636.133 702.038 715.452 666.205 794.8 630.427C799.98 628.092 805.354 626.158 810.63 624.031C810.617 626.365 810.617 628.672 810.617 630.965ZM121.728 627.318C122.309 632.043 122.847 634.93 122.985 637.845C124.422 666.716 125.776 695.601 127.171 724.472C128.539 752.652 129.92 780.847 131.288 809.027C132.683 837.898 134.23 866.77 135.294 895.655C135.487 900.752 137.435 903.376 141.427 905.974C179.554 930.783 217.542 955.773 255.599 980.666C259.73 983.373 264.054 985.791 269.013 988.774C267.673 941.406 266.361 895.088 264.993 847.25C314.571 879.465 362.506 910.629 411.628 942.553C411.628 937.939 411.656 935.19 411.628 932.455C411.186 897.754 410.744 863.04 410.316 828.339C410.247 823.283 410.647 818.172 410.122 813.171C409.874 810.851 408.465 807.922 406.628 806.637C398.919 801.25 390.866 796.346 382.895 791.332C310.759 745.98 238.608 700.657 166.472 655.319C152.119 646.326 137.739 637.361 121.728 627.318Z" fill="#161CC1"></path><path d="M279.644 1000.63C277.208 1001.16 275.018 998.794 275.18 996.306C275.531 990.94 275.909 985.576 276.015 980.196C276.085 976.812 275.09 973.413 275.021 970.015C274.482 942.954 274.164 915.906 273.515 888.844C273.35 882.059 272.77 875.282 272.187 867.949C271.93 864.718 275.439 862.563 278.225 864.217C281.899 866.399 285.236 868.389 288.49 870.513C324.724 894.163 360.916 917.881 397.081 941.628C397.253 941.74 397.421 941.858 397.587 941.979C399.91 943.68 399.137 947.427 396.514 948.613C376.251 957.771 355.994 966.964 335.692 976.052C317.485 984.202 299.237 992.256 280.947 1000.21C280.533 1000.4 280.096 1000.53 279.644 1000.63Z" fill="#0057BF"></path><path d="M453.887 943.112C451.121 941.411 451.427 937.298 454.414 936.025C474.804 927.336 495.185 918.64 515.577 909.966C532.651 902.7 549.725 895.434 566.827 888.223C567.56 887.914 568.305 887.629 569.06 887.354C571.506 886.465 574.154 888.177 574.45 890.763C575.047 895.984 575.669 900.95 575.847 905.932C576.51 924.263 576.703 942.608 577.353 960.94C577.968 978.32 578.805 995.7 579.597 1013.08C579.742 1016.29 576.243 1018.35 573.51 1016.67C533.632 992.148 493.754 967.63 453.887 943.112Z" fill="#0057BF"></path><path d="M121.727 627.319C137.752 637.348 152.118 646.327 166.471 655.347C238.621 700.671 310.758 746.008 382.894 791.359C390.865 796.374 398.918 801.278 406.627 806.665C408.464 807.95 409.873 810.879 410.121 813.199C410.646 818.2 410.246 823.311 410.315 828.367C410.743 863.068 411.199 897.782 411.627 932.483C411.655 935.218 411.627 937.967 411.627 942.581C362.505 910.657 314.556 879.493 264.992 847.278C266.346 895.116 267.658 941.434 269.012 988.802C264.053 985.819 259.729 983.401 255.599 980.694C217.541 955.801 179.539 930.798 141.426 906.002C137.434 903.404 135.486 900.78 135.293 895.683C134.229 866.798 132.682 837.926 131.287 809.055C129.919 780.875 128.538 752.68 127.17 724.5C125.775 695.629 124.421 666.744 122.985 637.873C122.833 634.944 122.308 632.057 121.727 627.319Z" fill="#1E82F9"></path><path d="M0.00608016 1050.96C37.6254 1035.06 74.7534 1019.35 111.902 1003.64C129.136 996.355 146.42 989.15 163.593 981.71C166.397 980.492 168.402 980.533 171.022 982.201C216.245 1011.08 261.56 1039.83 306.753 1068.76C308.37 1069.79 309.915 1072.35 309.946 1074.22C310.478 1103.89 310.693 1133.57 311.174 1163.24C311.235 1166.81 310.181 1168.53 306.845 1169.96C248.543 1195.03 190.282 1220.22 132.073 1245.5C129.228 1246.73 127.334 1246.72 124.776 1244.82C84.3015 1214.7 43.7349 1184.71 3.27065 1154.57C1.75605 1153.44 0.159601 1151.18 0.149368 1149.44C-0.0450736 1116.72 0.00608016 1083.99 0.00608016 1050.96ZM301.861 1073.28C302.485 1074.64 303.12 1076 303.877 1077.66C272.879 1090.58 242.167 1103.39 211.435 1116.16C186.782 1126.41 162.139 1136.64 137.425 1146.72C133.434 1148.35 131.848 1150.45 131.888 1155C132.134 1181.43 132.011 1207.87 132.011 1234.31C132.011 1235.93 132.011 1237.54 132.011 1239.71C135.828 1238.13 138.96 1236.87 142.061 1235.53C168.269 1224.17 194.468 1212.77 220.687 1201.42C247.683 1189.73 274.66 1178.01 301.748 1166.54C305.228 1165.07 306.108 1163.25 306.047 1159.74C305.586 1132.15 305.299 1104.55 304.951 1076.96C304.941 1076.11 305.105 1075.14 304.767 1074.44C304.368 1073.6 303.508 1072.96 302.853 1072.25C258.449 1043.99 214.076 1015.71 169.569 987.605C168.003 986.612 164.964 986.858 163.081 987.646C123.834 1004.09 84.6597 1020.7 45.4644 1037.28C33.2555 1042.45 21.0569 1047.63 8.53081 1052.94C9.81003 1054.04 10.6492 1054.88 11.5805 1055.58C50.3459 1084.44 89.1011 1113.32 127.979 1142.02C129.463 1143.12 132.564 1143.24 134.375 1142.49C171.677 1127.14 208.887 1111.56 246.148 1096.1C264.692 1088.42 283.287 1080.89 301.861 1073.28ZM5.55276 1057.55C5.31738 1059.17 5.14344 1059.82 5.14344 1060.47C5.12298 1089.1 5.06157 1117.74 5.26624 1146.36C5.27648 1148.28 6.85248 1150.8 8.46941 1152.02C34.2789 1171.38 60.2112 1190.6 86.1333 1209.81C99.4577 1219.69 112.833 1229.49 126.894 1239.86C126.894 1237.44 126.894 1235.8 126.894 1234.18C126.894 1207.42 126.782 1180.66 127.007 1153.9C127.048 1149.32 125.625 1146.54 121.941 1143.82C95.6712 1124.5 69.5853 1104.93 43.4176 1085.48C31.045 1076.31 18.6213 1067.19 5.55276 1057.55Z" fill="#161CC1"></path><path d="M301.861 1073.28C283.287 1080.89 264.682 1088.42 246.149 1096.1C208.888 1111.56 171.678 1127.14 134.376 1142.49C132.574 1143.24 129.463 1143.12 127.98 1142.02C89.0913 1113.33 50.3463 1084.44 11.5808 1055.58C10.6393 1054.88 9.80017 1054.04 8.53119 1052.94C21.0573 1047.63 33.2559 1042.45 45.4648 1037.28C84.6498 1020.7 123.835 1004.09 163.081 987.646C164.964 986.858 168.004 986.612 169.57 987.605C214.066 1015.71 258.45 1043.99 302.854 1072.25C302.516 1072.6 302.189 1072.93 301.861 1073.28Z" fill="#66BBFE"></path><path d="M302.09 1073.78C301.951 1073.48 302.01 1073.12 302.239 1072.88V1072.88C302.566 1072.54 303.121 1072.54 303.462 1072.87C303.967 1073.36 304.476 1073.85 304.757 1074.44C305.095 1075.14 304.931 1076.11 304.941 1076.96C305.289 1104.56 305.576 1132.15 306.036 1159.74C306.098 1163.24 305.217 1165.07 301.738 1166.54C274.649 1178.01 247.673 1189.74 220.676 1201.42C194.458 1212.77 168.259 1224.17 142.051 1235.53C140.41 1236.24 138.758 1236.93 136.997 1237.65C134.618 1238.64 132.001 1236.88 132.001 1234.31V1234.31C132.001 1207.88 132.124 1181.43 131.878 1155C131.837 1150.45 133.424 1148.35 137.415 1146.72C162.129 1136.64 186.782 1126.4 211.425 1116.16C241.268 1103.76 271.093 1091.32 301.178 1078.78C302.65 1078.17 303.325 1076.46 302.658 1075.01C302.464 1074.59 302.276 1074.18 302.09 1073.78Z" fill="#1E82F9"></path><path d="M5.14401 1060.49C5.12335 1059.15 6.86134 1058.52 7.94241 1059.31C20.1403 1068.31 31.8018 1076.86 43.4182 1085.5C69.5859 1104.96 95.6717 1124.52 121.942 1143.84C125.626 1146.56 127.048 1149.34 127.007 1153.92C126.782 1180.68 126.895 1207.44 126.895 1234.2V1234.2C126.895 1236.55 124.217 1237.9 122.321 1236.51C109.911 1227.37 97.9978 1218.63 86.1339 1209.83C60.2118 1190.61 34.2795 1171.4 8.46998 1152.04C6.85305 1150.82 5.27705 1148.31 5.26681 1146.38C5.06214 1117.75 5.13378 1089.11 5.14401 1060.49V1060.49Z" fill="#1E82F9"></path><path d="M575.681 1116.46L414.376 1186.15L263.486 1092.82L258.278 947.457L342.999 909.552L345.582 909.731L351.563 913.71L360.556 919.691L365.35 922.882L370.972 926.612L376.429 930.245V930.259L411.143 953.342L471.358 928.698L476.732 926.502L482.423 924.167L490.504 920.852L570.307 970.333L575.681 1116.46Z" fill="#CC27C5"></path><path d="M560.334 974.022L406.239 1038.19L268.404 950.69L349.132 913.544L351.564 913.71L360.557 919.691L365.35 922.882L370.972 926.612L376.429 930.245V930.259L411.143 953.342L471.358 928.698L476.732 926.502L482.423 924.167L560.334 974.022Z" fill="#FF98FB"></path><path d="M487.133 951.67C487.133 984.851 454.214 1004.61 413.601 1004.61C372.988 1004.61 340.401 991.924 340.401 955.621C340.401 943.092 347.653 929.803 360.555 919.691L365.349 922.882L370.971 926.612L376.428 930.245V930.259L411.142 953.342L471.357 928.698L476.731 926.501C483.251 933.643 487.133 942.139 487.133 951.67Z" fill="#273CD9"></path><path d="M481.524 951.657C481.524 981.149 451.189 998.707 413.753 998.707C376.317 998.707 346.272 987.435 346.272 955.179C346.272 943.893 353.137 931.903 365.349 922.882L370.971 926.612L376.428 930.245V930.259L411.142 953.342L471.357 928.698C477.712 935.149 481.524 942.912 481.524 951.657Z" fill="url(#paint0_linear_102_190)"></path><path d="M387.334 963.046C387.824 955.738 385.587 949.637 382.337 949.419C379.086 949.2 376.053 954.948 375.562 962.256C375.072 969.564 377.309 975.665 380.559 975.883C383.81 976.101 386.843 970.354 387.334 963.046Z" fill="#191055"></path><path d="M429.704 965.886C430.194 958.578 427.957 952.477 424.707 952.259C421.456 952.041 418.423 957.788 417.932 965.096C417.442 972.404 419.679 978.505 422.929 978.723C426.18 978.942 429.213 973.194 429.704 965.886Z" fill="#191055"></path><path d="M376.538 930.95C376.538 930.95 365.832 937.58 361.301 949.502C361.301 949.502 359.975 955.801 356.88 956.022C356.88 956.022 350.471 955.359 355.996 944.639C360.624 935.688 367.241 929.347 370.971 926.612L376.427 930.245V930.259C376.51 930.687 376.538 930.95 376.538 930.95Z" fill="white"></path><path d="M469.631 952.154C469.631 952.154 471.62 967.833 455.941 976.011C455.941 976.011 450.747 977.448 452.183 982.2C452.183 982.2 453.952 985.626 459.035 982.863C464.119 980.1 476.482 970.347 476.372 953.743C476.372 953.743 476.372 948.618 473.388 947.623C470.404 946.629 469.548 950.386 469.631 952.154Z" fill="white"></path><path d="M359.41 973.218C361.41 972.663 362.25 969.4 361.286 965.93C360.323 962.461 357.921 960.098 355.922 960.653C353.923 961.208 353.083 964.471 354.046 967.94C355.009 971.41 357.411 973.773 359.41 973.218Z" fill="white"></path><path d="M265.02 957.749L270.242 1088.83L409.611 1176.63L403.478 1043.09L265.02 957.749Z" fill="#EA46E3"></path><path d="M412.22 1044.62L417.745 1176.63L570.307 1110.63L564.781 980.777L412.22 1044.62Z" fill="#EA46E3"></path><g clip-path="url(#clip0_102_190)"><path d="M811.875 466.668C811.875 469.308 811.875 472.063 811.875 474.704C810.153 475.393 808.316 475.852 806.594 476.656C721.516 515.803 636.438 555.065 551.245 594.097C548.49 595.36 544.586 595.475 541.716 594.557C509.912 584.224 478.338 573.548 446.649 562.986C444.927 562.412 443.205 561.723 440.679 560.69C442.631 559.772 443.779 559.083 444.927 558.624C524.379 525.676 603.945 492.728 683.397 459.895C685.464 459.091 687.875 458.632 690.056 458.746C703.605 459.55 717.153 460.583 730.701 461.502C757.682 463.224 784.779 464.946 811.875 466.668Z" fill="#E7FAFE"></path><path d="M811.875 466.668C784.779 464.946 757.682 463.339 730.586 461.502C717.038 460.583 703.49 459.55 689.942 458.747C687.76 458.632 685.349 459.091 683.282 459.895C603.716 492.728 524.264 525.676 444.812 558.624C443.664 559.083 442.516 559.772 440.564 560.69C443.205 561.723 444.812 562.412 446.534 562.986C478.223 573.548 509.797 584.224 541.601 594.557C544.471 595.475 548.375 595.36 551.131 594.097C636.323 555.065 721.401 515.803 806.479 476.656C808.201 475.852 810.038 475.393 811.76 474.704C811.76 480.788 811.76 486.988 811.76 493.072C798.786 499.042 785.697 504.897 772.723 510.866C742.068 525.102 711.527 539.452 680.986 553.917C636.094 575.04 591.201 596.164 546.194 617.058C543.782 618.206 540.223 618.55 537.697 617.746C491.082 602.019 444.582 586.061 398.082 570.104C396.475 569.53 395.097 568.497 393.605 567.693C394.294 567.349 394.868 566.889 395.556 566.545C424.834 554.032 454.112 541.289 483.505 529.12C547.571 502.601 611.638 476.426 675.819 450.251C681.905 447.726 688.564 445.43 694.994 445.2C706.59 444.741 718.301 445.774 729.897 446.233C757.108 447.266 784.434 448.414 811.645 449.562C811.875 455.188 811.875 460.928 811.875 466.668Z" fill="#1B2EBC"></path><path d="M811.874 449.448C784.663 448.3 757.337 447.266 730.126 446.118C718.53 445.659 706.819 444.626 695.223 445.085C688.793 445.315 682.134 447.726 676.049 450.136C611.867 476.311 547.8 502.486 483.734 529.005C454.341 541.174 425.063 553.917 395.786 566.43C395.097 566.775 394.523 567.234 393.834 567.578C392.686 568.841 390.504 570.563 390.734 571.367C391.308 573.089 392.915 574.926 394.638 575.614C409.678 581.584 424.834 587.209 439.989 592.949C471.449 605.004 503.023 617.058 534.367 629.227C539.763 631.293 544.7 630.949 549.867 628.538C575.012 616.484 600.156 604.544 625.3 592.49C651.478 579.977 677.656 567.463 703.834 554.95C739.771 537.73 775.823 520.51 811.76 503.289C811.76 505.585 811.76 507.881 811.76 510.177C804.297 513.507 796.834 516.721 789.486 520.165C779.956 524.642 770.656 529.12 759.978 534.286C764.571 536.123 768.13 537.5 771.689 538.878C776.971 540.944 780.53 544.733 780.645 550.358C780.76 556.328 776.167 558.853 771.23 560.575C763.882 563.101 756.534 561.838 749.3 559.427C748.612 559.198 747.923 558.739 747.234 558.509C740.804 555.639 734.489 550.473 728.06 550.473C721.86 550.473 715.66 555.639 709.46 558.624C680.067 572.744 650.675 586.865 621.282 600.871C619.56 601.674 617.837 602.593 615.426 603.741C621.626 606.611 627.138 609.366 632.763 611.662C636.897 613.384 639.537 615.795 639.537 620.502C639.537 625.438 637.012 628.882 632.649 630.834C624.956 634.278 617.034 634.048 609.226 631.063C601.419 628.079 593.841 624.29 586.034 621.42C583.737 620.616 580.408 620.731 578.226 621.65C569.615 625.323 561.349 629.571 552.852 633.704C546.423 636.804 539.763 637.607 532.875 634.967C485.686 616.828 438.497 598.804 391.308 580.895C387.634 579.518 385.797 577.451 385.108 573.777C384.075 568.611 385.108 565.053 390.389 562.757C411.745 553.687 432.986 544.044 454.456 535.089C527.708 504.782 601.189 474.704 674.441 444.511C684.545 440.378 694.763 439.001 705.786 439.575C740.345 441.411 774.904 442.674 809.463 444.052C810.152 444.052 810.956 443.822 811.76 443.707C811.875 445.659 811.874 447.496 811.874 449.448ZM589.249 616.254C598.434 620.272 606.126 624.405 614.278 626.701C619.675 628.193 626.104 628.997 631.271 624.864C635.06 621.879 634.83 619.124 630.697 617.058C624.152 613.843 617.608 610.858 610.949 607.988C609.686 607.414 607.963 607.3 606.7 607.874C601.419 610.284 596.138 612.925 589.249 616.254ZM736.441 545.651C736.441 546.225 736.441 546.684 736.441 547.258C742.526 549.899 748.382 553.113 754.697 554.95C758.945 556.213 763.767 556.213 768.13 555.409C770.656 554.95 772.723 552.08 775.019 550.243C773.067 548.177 771.345 545.422 768.934 544.159C764.571 541.863 759.749 540.37 755.156 538.878C753.893 538.419 752.171 538.419 750.908 538.993C745.971 541.059 741.263 543.355 736.441 545.651Z" fill="#1B0660"></path><path d="M811.873 503.404C775.936 520.625 739.885 537.845 703.947 555.065C677.77 567.578 651.592 580.092 625.414 592.605C600.27 604.659 575.125 616.599 549.981 628.653C544.929 631.064 539.877 631.408 534.481 629.342C503.022 617.173 471.562 605.118 440.103 593.064C424.947 587.324 409.792 581.584 394.751 575.729C393.144 575.04 391.422 573.204 390.847 571.482C390.618 570.678 392.799 568.956 393.947 567.693C395.44 568.497 396.818 569.53 398.425 570.104C444.925 586.061 491.425 602.019 538.04 617.747C540.566 618.55 544.125 618.206 546.536 617.058C591.544 596.164 636.436 574.926 681.329 553.917C711.87 539.567 742.41 525.217 773.066 510.866C786.04 504.782 799.014 498.927 812.103 493.072C811.873 496.516 811.873 499.96 811.873 503.404Z" fill="#101C80"></path><path d="M589.247 616.254C596.136 612.925 601.303 610.17 606.699 607.759C607.847 607.185 609.684 607.414 610.947 607.874C617.607 610.744 624.151 613.843 630.695 616.943C634.829 619.009 635.058 621.65 631.27 624.749C626.103 628.882 619.673 628.193 614.277 626.586C606.125 624.405 598.547 620.272 589.247 616.254Z" fill="#1B2EBC"></path><path d="M736.442 545.651C741.264 543.355 745.971 541.059 750.794 538.993C752.057 538.419 753.779 538.419 755.042 538.878C759.749 540.485 764.457 541.863 768.82 544.159C771.231 545.422 772.838 548.177 774.905 550.243C772.608 552.08 770.542 554.95 768.016 555.409C763.653 556.098 758.831 556.098 754.582 554.95C748.268 553.113 742.412 549.899 736.327 547.258C736.442 546.684 736.442 546.225 736.442 545.651Z" fill="#1B2EBC"></path><path d="M620.824 386.996C614.279 383.437 607.505 381.37 600.616 380.452C576.046 377.238 550.786 388.603 534.483 398.246C548.146 387.57 566.516 369.546 578.112 344.289C581.672 336.598 584.542 328.217 586.379 319.263C591.431 295.384 586.838 271.505 577.768 249.693C577.424 252.334 576.964 255.089 576.39 257.959C567.435 302.961 547.457 330.054 461.69 363.806C375.924 397.557 210.016 365.298 210.016 365.298L208.064 363.806C208.294 364.38 208.524 365.069 208.753 365.643C225.286 411.908 272.82 443.248 321.961 452.662C350.205 458.058 378.909 456.221 402.675 445.889C402.675 445.889 407.498 444.282 413.124 443.134C415.879 442.445 418.29 442.1 420.357 441.986C417.946 442.215 415.42 442.674 413.124 443.134C399.116 446.578 376.153 458.861 344.235 497.09C343.546 497.894 342.857 498.812 342.053 499.616C283.957 570.219 308.298 643.806 350.09 626.242C350.09 626.242 363.638 625.094 373.857 570.334C384.075 515.458 409.449 470.341 452.964 455.532C452.964 455.532 469.957 456.106 482.931 488.939C495.905 521.658 527.02 561.838 555.264 544.848C583.509 527.857 552.394 483.773 532.646 460.009C512.898 436.245 516.227 439.69 516.227 439.69C516.227 439.69 541.716 414.778 577.309 417.074C612.901 419.37 609.572 453.81 610.031 458.861C610.605 463.913 609.457 498.468 640.572 499.042C671.686 499.616 665.946 411.908 620.824 386.996ZM420.357 441.871C423.916 441.526 427.246 441.756 429.198 443.019C428.738 442.789 425.868 441.526 420.357 441.871Z" fill="url(#paint1_linear_102_190)"></path><path d="M262.947 105.732C262.947 107.454 262.717 109.176 262.143 110.783C259.962 117.557 253.647 122.378 246.299 122.378C237.113 122.378 229.65 114.916 229.65 105.732C229.65 96.5478 237.113 89.0858 246.299 89.0858C251.81 89.0858 256.747 91.7262 259.732 95.9738C261.799 98.7291 262.947 102.058 262.947 105.732Z" fill="#E6FAFF"></path><path d="M341.938 32.833C341.938 42.0172 334.475 49.4792 325.29 49.4792C316.105 49.4792 308.642 42.0172 308.642 32.833C308.642 23.6489 316.105 16.1868 325.29 16.1868C334.475 16.1868 341.938 23.6489 341.938 32.833Z" fill="#E6FAFF"></path><path d="M502.793 24.5674C502.793 33.7515 495.33 41.2136 486.145 41.2136C476.96 41.2136 469.497 33.7515 469.497 24.5674C469.497 15.3833 476.96 7.9212 486.145 7.9212C495.33 7.9212 502.793 15.3833 502.793 24.5674Z" fill="#E6FAFF"></path><path d="M614.28 134.777C614.28 143.961 606.817 151.423 597.632 151.423C588.447 151.423 580.984 143.961 580.984 134.777C580.984 125.593 588.447 118.131 597.632 118.131C606.817 118.131 614.28 125.593 614.28 134.777Z" fill="#E6FAFF"></path><path d="M413.009 443.019C399.001 446.463 376.038 458.746 344.12 496.975C331.261 501.453 315.301 506.504 297.62 511.096C253.301 522.691 204.85 519.591 199.798 491.35C194.746 463.109 218.972 451.17 258.583 457.484C297.39 463.568 320.927 453.121 321.846 452.662C350.09 458.058 378.794 456.221 402.561 445.889C402.561 445.774 407.383 444.167 413.009 443.019Z" fill="url(#paint2_linear_102_190)"></path><path d="M600.5 380.452C575.93 377.237 550.671 388.603 534.367 398.246C548.03 387.569 566.4 369.546 577.997 344.289C577.997 344.289 593.267 335.909 608.537 313.867C623.808 291.825 650.904 264.732 674.671 281.608C698.437 298.484 676.737 364.035 600.5 380.452Z" fill="url(#paint3_linear_102_190)"></path><path d="M597.716 108.484C591.52 107.563 585.553 109.174 580.734 112.627C580.734 112.627 525.425 89.1489 488.706 151.872C488.706 151.872 468.969 140.363 439.594 130.696C439.594 130.696 432.594 85.8113 469.658 52.7808C471.723 53.7015 474.018 54.3921 476.428 54.7373C491.46 56.924 505.344 46.566 507.524 31.4894C509.705 16.4128 499.377 2.487 484.345 0.300315C471.953 -1.54111 460.248 5.24914 455.429 16.1826C454.511 16.758 397.137 50.9394 395.416 128.394C395.416 128.394 362.942 124.481 322.092 144.852C322.092 144.852 278.717 111.361 308.896 53.9317C311.765 55.7731 314.978 57.0391 318.535 57.4995C332.075 59.456 344.697 50.0187 346.648 36.5533C348.599 22.9728 339.304 10.313 325.649 8.35653C317.846 7.20565 310.502 9.85269 305.109 14.8015C304.191 15.1468 257.489 30.6838 259.44 88.2282C255.653 85.0057 250.834 82.7039 245.44 81.8983C230.294 79.7116 216.18 90.1847 213.885 105.492C213.54 107.908 213.54 110.325 213.77 112.627C212.622 113.548 143.889 169.366 216.18 248.547C216.18 248.547 183.362 292.511 208.147 364.557L210.098 366.053C210.098 366.053 375.909 398.393 461.625 364.557C547.342 330.72 567.308 303.559 576.258 258.445C576.832 255.567 577.291 252.92 577.635 250.158C563.521 216.092 538.392 187.435 521.753 172.588C521.753 172.588 536.211 135.53 574.767 151.757C578.439 156.476 583.717 159.698 589.799 160.619C603.224 162.576 615.846 152.448 617.912 138.062C620.322 123.791 611.142 110.44 597.716 108.484ZM486.296 8.01127C495.476 8.01127 502.934 15.492 502.934 24.6992C502.934 33.9063 495.476 41.387 486.296 41.387C477.116 41.387 469.658 33.9063 469.658 24.6992C469.658 15.492 477.116 8.01127 486.296 8.01127ZM325.534 16.2977C334.714 16.2977 342.173 23.7784 342.173 32.9856C342.173 42.1927 334.714 49.6734 325.534 49.6734C316.355 49.6734 308.896 42.1927 308.896 32.9856C308.896 23.7784 316.355 16.2977 325.534 16.2977ZM246.588 89.3791C252.096 89.3791 257.03 92.0261 260.013 96.2844C262.079 99.0466 263.226 102.499 263.226 106.182C263.226 107.908 262.997 109.635 262.423 111.246C260.243 118.036 253.932 122.87 246.588 122.87C237.408 122.87 229.949 115.389 229.949 106.182C229.949 96.975 237.408 89.3791 246.588 89.3791ZM241.539 203.317C241.539 203.317 206.082 169.711 237.523 137.141C249.227 138.867 260.243 132.998 265.751 123.33C269.537 135.76 275.16 149.571 283.078 164.762C282.963 164.762 258.751 181.795 241.539 203.317ZM597.601 151.872C588.422 151.872 580.963 144.392 580.963 135.184C580.963 125.977 588.422 118.497 597.601 118.497C606.781 118.497 614.24 125.977 614.24 135.184C614.355 144.392 606.896 151.872 597.601 151.872Z" fill="url(#paint4_linear_102_190)"></path><path d="M262.947 105.732C262.947 107.454 262.717 109.176 262.143 110.783C259.962 117.557 253.647 122.378 246.299 122.378C237.113 122.378 229.65 114.916 229.65 105.732C229.65 96.5478 237.113 89.0858 246.299 89.0858C251.81 89.0858 256.747 91.7262 259.732 95.9738C261.799 98.7291 262.947 102.058 262.947 105.732Z" fill="#E6FAFF"></path><path d="M341.938 32.833C341.938 42.0172 334.475 49.4792 325.29 49.4792C316.105 49.4792 308.642 42.0172 308.642 32.833C308.642 23.6489 316.105 16.1868 325.29 16.1868C334.475 16.1868 341.938 23.6489 341.938 32.833Z" fill="#E6FAFF"></path><path d="M502.793 24.5674C502.793 33.7515 495.33 41.2136 486.145 41.2136C476.96 41.2136 469.497 33.7515 469.497 24.5674C469.497 15.3833 476.96 7.9212 486.145 7.9212C495.33 7.9212 502.793 15.3833 502.793 24.5674Z" fill="#E6FAFF"></path><path d="M614.28 134.777C614.28 143.961 606.817 151.423 597.632 151.423C588.447 151.423 580.984 143.961 580.984 134.777C580.984 125.593 588.447 118.131 597.632 118.131C606.817 118.131 614.28 125.593 614.28 134.777Z" fill="#E6FAFF"></path><path d="M522.771 173.924C522.771 173.924 540.337 138.45 572.83 150.505C572.83 150.505 585.574 165.314 603.141 159.115C620.708 153.03 623.578 126.97 608.996 114.687C594.415 102.403 578.685 112.161 578.685 112.161C578.685 112.161 528.626 87.7082 487.063 149.701C487.063 149.701 466.167 136.154 439.874 131.562C439.874 131.562 434.478 79.5573 471.563 53.2677C471.563 53.2677 497.282 60.1558 506.467 40.984C515.652 21.8121 504.171 6.31395 492.919 2.5255C481.667 -1.26295 466.396 -2.29616 454.456 17.1053C454.456 17.1053 397.278 47.5277 394.752 126.741C394.752 126.741 359.274 125.593 320.237 143.731C320.237 143.731 279.937 107.454 308.756 54.9898C308.756 54.9898 331.145 68.3067 342.626 49.9385C354.108 31.5703 343.659 12.9724 332.178 9.64319C320.696 6.31395 310.708 6.77315 301.522 14.4648C301.522 14.4648 258.582 33.6367 258.467 86.7898C251.578 82.7717 241.704 81.7385 229.074 86.2158C229.074 86.2158 213.574 90.8078 211.508 111.472C211.508 111.472 144.111 168.643 213 247.741C213 247.741 195.204 286.774 197.959 323.281C197.959 323.281 196.696 302.042 219.2 246.938C219.2 246.938 149.508 179.894 216.674 113.309C216.674 113.309 217.937 90.8078 240.67 89.3154C249.052 88.7414 255.137 91.3818 258.926 95.3999C264.322 101.255 265.356 110.209 262.715 117.442C262.256 118.819 261.567 120.197 260.763 121.46C253.07 133.744 237.571 130.874 237.571 130.874C237.571 130.874 190.382 165.314 242.622 209.742C242.622 209.742 263.289 184.486 290.041 166.347C290.041 166.347 276.493 145.798 269.03 118.934C272.245 109.865 270.637 99.1883 264.437 91.9558C263.059 65.4367 271.785 37.4251 305.082 18.7125C305.082 18.7125 316.333 10.332 330.571 14.9241C344.808 19.5161 343.315 41.4432 338.952 46.8389C334.704 51.6605 326.552 58.5486 306.689 48.1017C306.689 48.1017 267.882 98.8439 319.204 150.964C319.204 150.964 348.482 134.088 400.033 131.333C400.033 131.333 394.178 63.9443 458.245 20.8937C458.245 20.8937 464.33 8.38037 479.141 6.08434C493.952 3.78831 509.796 18.5977 502.678 36.3919C495.445 54.1861 470.185 47.6425 470.185 47.6425C470.185 47.6425 426.785 75.654 435.971 135.121C435.971 135.121 470.415 144.535 489.015 156.819C489.015 156.819 525.526 93.1038 580.063 117.786C580.063 117.786 592.119 110.898 604.059 119.049C616.115 127.2 613.245 145.798 602.337 152.686C591.315 159.574 574.208 145.568 574.208 145.568C574.208 145.568 537.467 129.037 515.308 176.45C515.308 176.45 564.908 212.957 579.374 273.112C596.252 343.256 534.252 397.213 534.252 397.213C534.252 397.213 566.859 387.799 583.622 332.465C600.385 277.131 573.404 217.204 522.771 173.924ZM265.241 125.937C269.145 137.991 275 151.079 283.152 165.429C283.152 165.429 258.926 180.697 241.819 202.624C241.819 202.624 202.782 170.25 238.948 135.81C239.063 135.81 255.482 139.713 265.241 125.937Z" fill="url(#paint5_linear_102_190)"></path><path d="M265.126 431.539C265.126 431.539 316.793 455.647 362.834 451.17C408.875 446.578 421.619 434.983 432.641 444.626C432.641 444.626 409.104 444.396 387.519 460.583C365.934 476.77 312.889 535.204 314.267 581.01C315.645 626.701 342.052 626.127 350.893 617.976C359.734 609.71 371.1 584.454 375.349 563.445C375.349 563.445 370.756 627.275 340.1 629.915C308.871 632.556 265.586 558.279 384.419 455.876C384.419 455.647 331.26 469.308 265.126 431.539Z" fill="#161CC1"></path><path d="M332.637 500.764C332.637 500.764 266.848 514.77 239.293 511.555C211.737 508.455 200.37 495.942 204.389 478.952C208.407 461.961 231.026 455.762 253.53 456.565C253.53 456.565 193.367 445.659 198.993 491.694C204.504 536.352 311.281 515.229 332.637 500.764Z" fill="#161CC1"></path><path d="M448.025 431.539C448.025 431.539 448.255 431.079 448.829 430.391C451.699 426.487 462.377 414.663 484.077 419.599C509.91 425.569 548.488 469.538 564.103 509.604C579.718 549.669 535.514 563.331 509.451 531.531C509.451 531.531 527.821 549.325 547.684 542.437C567.547 535.664 561.003 507.193 534.94 472.867C508.762 438.656 482.929 405.134 448.025 431.539Z" fill="#161CC1"></path><path d="M511.059 414.433C511.059 414.433 539.303 388.718 567.318 382.404C597.285 375.63 614.622 382.404 628.285 392.047C641.948 401.69 664.681 434.983 658.94 475.852C653.2 516.721 617.148 501.912 611.522 472.637C605.896 443.363 613.818 420.058 565.022 417.303C565.022 417.303 579.144 415.122 597.4 421.321C615.54 427.52 616.688 465.29 616.688 465.29C616.688 465.29 619.559 493.417 639.077 491.924C658.596 490.432 655.496 447.037 645.622 425.224C635.633 403.412 620.018 390.325 595.907 388.258C571.796 386.192 555.033 383.207 511.059 414.433Z" fill="#161CC1"></path><path d="M622.086 374.138C622.086 374.138 665.83 358.869 681.445 318.803C681.445 318.803 693.96 292.399 673.178 280.804C652.397 269.209 635.978 281.263 620.363 298.828C604.749 316.393 594.76 333.728 580.178 343.027L577.997 348.307C577.997 348.307 582.819 346.585 593.612 339.238C604.404 331.891 614.623 315.704 626.793 302.272C638.963 288.955 654.923 275.064 671.341 287.807C687.76 300.55 670.767 328.447 657.449 343.715C644.245 359.099 630.008 371.038 622.086 374.138Z" fill="#161CC1"></path><path d="M512.207 266.339C512.207 266.339 508.878 278.623 500.267 285.167C500.267 285.167 432.641 284.134 404.856 317.885C404.856 317.885 366.852 322.248 350.778 315.36C350.778 315.36 350.778 268.865 350.778 264.043C350.778 262.781 350.893 257.959 351.811 251.415C354.337 232.932 363.522 199.869 396.244 188.045C419.437 179.664 440.448 185.519 456.063 194.129C470.415 201.936 480.174 212.038 482.7 215.368C487.867 222.256 502.678 240.279 512.207 266.339Z" fill="#4061F0"></path><path d="M512.207 266.339C512.207 266.339 508.878 278.623 500.267 285.167C500.267 285.167 432.641 284.134 404.856 317.885C404.856 317.885 366.852 322.248 350.778 315.36C350.778 315.36 350.778 268.865 350.778 264.043C350.778 262.781 350.893 257.959 351.811 251.415C354.337 232.932 363.522 199.869 396.244 188.045C419.437 179.664 440.448 185.519 456.063 194.129C470.415 201.936 480.174 212.038 482.7 215.368C487.867 222.256 502.678 240.279 512.207 266.339Z" fill="white"></path><path d="M509.567 285.741C517.26 279.312 520.015 266.339 520.015 266.339C499.234 212.383 469.612 186.552 438.152 179.779C422.882 176.45 407.038 177.598 391.767 182.19C366.623 189.652 354.682 211.923 348.941 230.866C344.004 247.397 343.775 261.518 343.775 261.518V319.263C351.697 330.513 401.986 325.806 401.986 325.806C399.689 329.824 399.46 336.253 399.46 336.253C428.278 303.305 461.689 298.484 470.875 297.68C480.06 296.876 502.793 296.188 512.208 293.318C521.623 290.562 509.567 285.741 509.567 285.741ZM500.152 285.167C500.152 285.167 432.526 284.134 404.741 317.885C404.741 317.885 366.737 322.248 350.663 315.36C350.663 315.36 350.663 268.865 350.663 264.043C350.663 262.78 350.778 257.959 351.697 251.415C354.223 232.932 363.408 199.869 396.13 188.045C419.323 179.664 440.334 185.519 455.949 194.129C470.3 201.936 480.06 212.038 482.586 215.367C487.982 222.256 502.793 240.394 512.208 266.339C512.208 266.339 508.878 278.623 500.152 285.167Z" fill="#1B2EBC"></path><path d="M470.186 237.409C467.89 270.817 438.956 296.188 405.545 293.892C379.827 292.17 358.931 274.605 351.697 251.415C354.223 232.932 363.408 199.869 396.131 188.045C419.323 179.664 440.334 185.519 455.949 194.129C465.708 205.724 471.219 220.993 470.186 237.409Z" fill="#33D7FB"></path><path d="M409.563 268.291C424.844 268.291 437.233 255.904 437.233 240.624C437.233 225.344 424.844 212.957 409.563 212.957C394.281 212.957 381.892 225.344 381.892 240.624C381.892 255.904 394.281 268.291 409.563 268.291Z" fill="#0057BF"></path><path d="M376.82 226.446C378.867 220.311 376.187 213.89 370.833 212.104C365.48 210.319 359.48 213.844 357.433 219.979C355.386 226.113 358.067 232.534 363.42 234.32C368.773 236.106 374.773 232.581 376.82 226.446Z" fill="white"></path><path d="M443.785 257.788C446.289 253.45 443.557 247.184 437.681 243.792C431.805 240.4 425.011 241.167 422.507 245.504C420.002 249.842 422.735 256.108 428.61 259.5C434.486 262.892 441.28 262.126 443.785 257.788Z" fill="white"></path><path d="M367.083 246.134C367.083 246.134 364.327 258.418 377.416 266.339C390.505 274.261 404.168 267.832 404.168 267.832C404.168 267.832 389.586 265.995 380.401 260.14C371.331 254.285 367.083 246.134 367.083 246.134Z" fill="white"></path><path d="M530.347 328.332L514.962 347.504C514.962 347.504 510.37 353.588 509.107 359.788C508.647 361.854 507.384 365.528 504.744 369.775C455.373 343.601 417.599 385.503 417.599 385.503L418.173 387.799C415.418 386.766 412.547 385.618 409.677 384.24C409.677 384.24 395.67 380.682 368.229 378.615C368.229 378.615 389.469 378.156 397.162 376.319C404.855 374.597 416.336 356.688 450.207 343.716C484.192 330.743 501.758 342.223 510.944 340.157C520.129 337.975 530.347 328.332 530.347 328.332Z" fill="#FF9BD0"></path><path d="M504.744 369.661C499.807 377.582 490.163 387.34 473.4 391.014C451.47 395.836 435.051 394.113 418.059 387.685L417.485 385.389C417.6 385.389 455.374 343.486 504.744 369.661Z" fill="#FF73C7"></path><path d="M214.723 494.335C214.723 494.335 207.146 486.414 211.394 474.704C215.642 462.994 232.634 465.29 232.634 465.29C232.634 465.29 209.901 467.93 214.723 494.335Z" fill="#FDFEFE"></path><path d="M355.027 506.733C355.027 506.733 322.878 534.86 323.567 574.237C323.452 574.237 329.882 542.781 355.027 506.733Z" fill="#FDFEFE"></path><path d="M323.451 585.143C323.451 585.143 317.71 598.804 328.962 607.3C328.962 607.3 323.451 596.049 323.451 585.143Z" fill="#FDFEFE"></path><path d="M458.589 432.572C458.589 432.572 472.826 420.403 490.393 432.572C507.96 444.741 514.619 459.206 514.619 464.027C514.619 464.027 506.123 445.315 486.604 435.212C467.086 425.11 458.589 432.572 458.589 432.572Z" fill="#FDFEFE"></path><path d="M542.977 502.83C542.977 502.83 548.144 511.326 546.881 522.232C545.618 533.138 532.988 537.386 532.988 537.386C532.988 537.386 549.866 539.108 552.392 524.069C555.147 507.996 542.977 502.83 542.977 502.83Z" fill="#FDFEFE"></path><path d="M594.874 393.195C594.874 393.195 610.948 391.358 627.022 406.512C643.096 421.666 641.603 443.478 641.603 443.478C641.603 443.478 635.059 404.445 594.874 393.195Z" fill="#FDFEFE"></path><path d="M658.94 291.481C658.94 291.481 634.14 284.822 624.151 320.526C624.151 320.526 628.055 302.387 658.94 291.481Z" fill="#FDFEFE"></path><path d="M620.823 323.166C620.823 323.166 614.508 334.072 602.682 338.32C602.682 338.32 619.674 338.32 620.823 323.166Z" fill="#FDFEFE"></path><path d="M210.244 321.674C210.244 321.674 202.322 290.792 223.907 254.17C223.792 254.17 209.555 300.206 210.244 321.674Z" fill="#FDFEFE"></path><path d="M227.812 206.069C227.812 206.069 236.538 215.712 241.704 218.237C241.704 218.237 262.945 188.848 285.908 181.042C285.908 181.042 256.286 201.591 244.689 226.733C244.689 226.618 231.141 219.615 227.812 206.069Z" fill="#FDFEFE"></path><path d="M193.596 163.592C193.596 163.592 193.596 142.698 214.492 123.067C214.492 123.067 197.155 148.438 193.596 163.592Z" fill="#FDFEFE"></path><path d="M297.733 28.9299C297.733 28.9299 271.67 39.8361 270.522 70.7177C270.522 70.7177 277.411 45.2317 297.733 28.9299Z" fill="#FDFEFE"></path><path d="M457.671 28.9299C457.671 28.9299 434.363 34.096 426.441 62.7964C426.441 62.7964 442.056 41.2137 457.671 28.9299Z" fill="#FDFEFE"></path><path d="M304.737 143.387L318.056 157.278C318.056 157.278 338.608 144.879 368.345 140.632C368.345 140.632 326.897 154.523 317.137 166.347C317.137 166.347 305.656 153.375 304.737 143.387Z" fill="#FDFEFE"></path><path d="M428.279 121.23V140.632C428.279 140.632 447.912 143.042 468.005 155.441C468.005 155.441 446.764 146.946 423.456 146.372C423.456 146.372 423.456 131.562 428.279 121.23Z" fill="#FDFEFE"></path><path d="M526.673 126.97C526.673 126.97 540.336 108.717 569.384 118.131C569.384 118.131 540.566 119.738 526.673 126.97Z" fill="#FDFEFE"></path><path d="M639.651 519.247C639.422 512.588 637.929 505.471 639.307 499.157C645.507 471.49 652.625 443.937 659.514 416.385C660.662 411.793 664.796 409.382 669.503 410.53C674.555 411.793 676.736 415.122 675.588 419.944C668.584 447.496 662.04 475.048 654.233 502.371C652.396 508.8 646.655 514.196 642.636 520.051C641.488 519.821 640.57 519.477 639.651 519.247Z" fill="#101C7F"></path><path d="M673.981 315.36C664.911 292.744 655.726 270.128 646.656 247.512C638.504 227.192 630.467 206.757 622.315 186.437C625.07 180.353 633.452 176.565 643.096 177.253C660.663 219.615 678.23 261.977 695.796 304.339C696.026 304.913 696.026 305.487 696.141 306.061C686.841 304.453 679.837 308.701 673.981 315.36Z" fill="#FEB700"></path><path d="M673.981 315.36C679.837 308.701 686.726 304.453 696.141 306.061C697.404 308.931 698.781 311.801 700.044 314.786C702.685 321.1 701.193 324.773 694.648 327.873C686.841 331.547 680.067 330.284 677.311 324.429C675.933 321.559 675.13 318.344 673.981 315.36Z" fill="#FE5D78"></path><path d="M643.097 177.368C633.568 176.679 625.071 180.468 622.316 186.552C622.086 179.894 621.742 173.35 621.512 166.692C624.727 165.658 628.056 164.51 631.271 163.477C635.29 168.069 639.193 172.661 643.097 177.368Z" fill="#FCDBB9"></path><path d="M631.386 163.477C628.171 164.51 624.841 165.658 621.626 166.692C622.086 163.707 622.545 160.837 623.234 156.015C626.908 159.344 629.089 161.411 631.386 163.477Z" fill="#1C1C1B"></path></g><defs><linearGradient id="paint0_linear_102_190" x1="413.898" y1="922.882" x2="413.898" y2="998.707" gradientUnits="userSpaceOnUse"><stop stop-color="#10EBD1"></stop><stop offset="1" stop-color="#5865F2"></stop></linearGradient><linearGradient id="paint1_linear_102_190" x1="422.754" y1="363.823" x2="474.409" y2="565.876" gradientUnits="userSpaceOnUse"><stop stop-color="#D7FF85"></stop><stop offset="0.9888" stop-color="#30EDB0"></stop></linearGradient><linearGradient id="paint2_linear_102_190" x1="383.829" y1="463.489" x2="198.407" y2="495.15" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint3_linear_102_190" x1="548.697" y1="363.574" x2="689.456" y2="302.515" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint4_linear_102_190" x1="354.801" y1="-9.694" x2="439.058" y2="362.01" gradientUnits="userSpaceOnUse"><stop offset="0.1922" stop-color="#FF78B1"></stop><stop offset="0.4324" stop-color="#FDBA85"></stop><stop offset="0.8121" stop-color="#FAEC63"></stop><stop offset="1" stop-color="#F9FF56"></stop></linearGradient><linearGradient id="paint5_linear_102_190" x1="355.585" y1="1.11252" x2="455.569" y2="431.859" gradientUnits="userSpaceOnUse"><stop offset="0.0195531" stop-color="#E86C78"></stop><stop offset="0.2989" stop-color="#FF989C"></stop><stop offset="0.8045" stop-color="#F9D956"></stop></linearGradient><clipPath id="clip0_102_190"><rect width="651" height="636" fill="white" transform="translate(182)"></rect></clipPath></defs></svg>`);
      } else if (__props.name === "mascot-md") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          class: __props.class,
          width: "299",
          height: "823",
          viewBox: "0 0 439 823",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _attrs))}><path d="M310.423 792.48C310.446 794.483 309.96 795.522 308.017 796.389C289.093 804.812 270.662 813.384 251.805 821.95C249.989 822.779 248.613 822.996 246.73 821.8C229.316 810.724 211.841 799.737 194.307 788.862C192.013 787.442 191.258 785.925 191.168 783.249C190.6 765.588 189.875 747.935 189.031 730.288C188.911 727.725 189.741 726.634 191.99 725.632C210.825 717.239 229.577 708.681 248.427 700.325C249.697 699.765 251.857 699.922 253.038 700.662C271.073 711.917 289.033 723.3 306.933 734.765C308.054 735.483 309.213 737.15 309.242 738.405C309.437 747.479 309.669 756.53 309.669 765.611L310.423 792.48ZM194.248 729.018C193.754 729.982 192.842 730.954 192.85 731.918C192.872 734.885 193.381 737.837 193.47 740.804C193.792 751.238 193.978 761.679 194.3 772.113C194.412 775.701 194.584 779.31 195.1 782.861C195.272 784.071 196.31 785.514 197.372 786.194C210.122 794.371 222.948 802.428 235.766 810.492C239.376 812.764 243.045 814.932 247.589 817.697C247.201 812.988 246.737 809.326 246.633 805.649C246.289 793.347 245.983 781.037 245.9 768.735C245.885 766.111 244.966 764.669 242.866 763.368C238.755 760.82 234.719 758.129 230.788 755.297C230.003 754.728 229.854 753.286 229.413 752.247C230.624 752.299 232.081 751.926 233 752.471C236.633 754.624 240.317 756.799 243.546 759.482C246.528 761.963 249.077 761.672 252.306 760.184C263.008 755.259 273.823 750.58 284.578 745.782C290.782 743.017 296.963 740.199 303.308 737.336C302.815 736.686 302.665 736.313 302.396 736.141C285.797 725.64 269.212 715.124 252.545 704.735C251.513 704.092 249.622 703.913 248.524 704.406C230.399 712.538 212.327 720.797 194.248 729.018ZM305.483 741.014C304.407 741.186 303.891 741.171 303.48 741.357C286.155 749.108 268.823 756.844 251.558 764.729C250.594 765.17 249.652 766.904 249.652 768.032C249.675 773.107 250.175 778.174 250.265 783.242C250.392 790.208 250.168 797.181 250.347 804.139C250.46 808.638 251.02 813.13 251.409 817.944C254.824 816.441 257.881 815.141 260.916 813.773C275.505 807.196 290.064 800.544 304.698 794.064C306.686 793.182 307.195 792.046 307.127 790.088C306.828 781.284 306.634 772.479 306.35 763.682C306.111 756.268 305.789 748.854 305.483 741.014Z" fill="#F7A901"></path><path d="M194.247 729.018C212.334 720.789 230.399 712.53 248.531 704.414C249.629 703.92 251.513 704.1 252.552 704.743C269.219 715.131 285.811 725.647 302.403 736.148C302.68 736.32 302.829 736.694 303.315 737.344C296.97 740.207 290.789 743.024 284.585 745.79C273.823 750.588 263.008 755.267 252.313 760.192C249.084 761.679 246.535 761.971 243.553 759.49C240.324 756.799 236.632 754.632 233.007 752.479C232.088 751.933 230.631 752.3 229.42 752.255C222.678 747.897 215.907 743.585 209.203 739.168C204.165 735.857 199.225 732.411 194.247 729.018Z" fill="#FEE65C"></path><path d="M305.483 741.013C305.782 748.854 306.103 756.268 306.342 763.682C306.626 772.486 306.821 781.291 307.12 790.088C307.187 792.038 306.686 793.182 304.691 794.064C290.056 800.544 275.497 807.196 260.908 813.773C257.881 815.141 254.824 816.448 251.401 817.943C251.012 813.13 250.452 808.638 250.34 804.139C250.16 797.173 250.377 790.207 250.257 783.242C250.168 778.167 249.667 773.099 249.645 768.032C249.637 766.903 250.579 765.169 251.55 764.728C268.815 756.843 286.148 749.108 303.472 741.357C303.898 741.17 304.407 741.185 305.483 741.013Z" fill="#FECB00"></path><path d="M194.248 729.018C199.233 732.404 204.173 735.849 209.203 739.167C215.908 743.585 222.679 747.897 229.421 752.254C229.862 753.293 230.011 754.736 230.796 755.304C234.72 758.129 238.756 760.82 242.874 763.376C244.967 764.676 245.886 766.119 245.908 768.742C245.99 781.052 246.297 793.354 246.641 805.656C246.745 809.333 247.209 812.996 247.597 817.704C243.053 814.939 239.383 812.771 235.774 810.499C222.948 802.435 210.13 794.37 197.38 786.201C196.318 785.521 195.279 784.079 195.108 782.868C194.599 779.318 194.42 775.715 194.308 772.12C193.986 761.687 193.8 751.246 193.478 740.812C193.388 737.845 192.88 734.885 192.858 731.925C192.835 730.954 193.755 729.989 194.248 729.018Z" fill="#FED531"></path><path d="M289.675 421.918C215.69 446.994 141.6 472.099 67.1966 497.316C67.1966 495.485 67.1966 494.117 67.1966 492.757C67.1966 455.768 67.4881 418.779 67.0173 381.806C66.8753 370.998 70.9337 362.792 78.0414 355.549C88.7218 344.675 102.167 338.651 116.503 334.346C134.515 328.934 153.05 326.857 171.735 326.378C199.262 325.676 226.781 326.259 254.017 330.788C262.537 332.208 270.885 334.884 279.144 337.507C282.216 338.486 285.041 340.706 287.523 342.881C288.831 344.024 289.795 346.297 289.81 348.068C289.952 372.224 289.899 396.387 289.892 420.543C289.884 420.902 289.78 421.268 289.675 421.918Z" fill="#1A1E7E"></path><path d="M315.326 722.321C315.326 717.635 314.063 711.932 316.163 708.547C318.173 705.303 324.048 704.443 328.233 702.552C332.755 700.512 337.232 698.337 341.859 696.551C343.181 696.043 345.244 696.177 346.455 696.895C354.161 701.439 361.754 706.17 369.281 711.006C370.29 711.656 371.254 713.233 371.284 714.406C371.463 721.992 371.448 729.586 371.284 737.172C371.261 738.188 370.275 739.668 369.34 740.117C360.835 744.205 352.277 748.174 343.645 751.978C342.576 752.449 340.745 752.202 339.706 751.567C332.195 746.941 324.743 742.209 317.411 737.306C316.342 736.596 315.505 734.848 315.408 733.517C315.146 729.795 315.326 726.051 315.326 722.321C315.445 722.321 315.199 722.321 315.326 722.321ZM365.417 713.016C358.398 708.621 351.829 704.488 345.222 700.422C344.676 700.086 343.712 699.959 343.144 700.206C335.924 703.315 328.742 706.506 320.759 710.026C328.263 714.847 334.9 719.152 341.612 723.345C342.18 723.696 343.323 723.524 344.019 723.203C350.984 719.944 357.92 716.604 365.417 713.016ZM367.636 716.962C367.038 716.962 366.635 716.843 366.343 716.977C359.251 720.266 352.15 723.562 345.095 726.933C344.519 727.209 343.854 728.039 343.847 728.614C343.757 734.862 343.787 741.118 343.787 747.8C351.59 744.25 358.72 741.081 365.76 737.725C366.635 737.307 367.524 735.901 367.547 734.922C367.719 728.966 367.636 723.001 367.636 716.962Z" fill="#273CD9"></path><path d="M365.417 713.016C357.92 716.604 350.985 719.944 344.019 723.196C343.324 723.517 342.18 723.689 341.612 723.338C334.901 719.145 328.264 714.84 320.76 710.019C328.742 706.499 335.924 703.307 343.144 700.198C343.712 699.952 344.677 700.086 345.222 700.415C351.829 704.488 358.399 708.621 365.417 713.016Z" fill="#33D7FB"></path><path d="M367.636 716.962C367.636 723.009 367.718 728.966 367.554 734.922C367.524 735.894 366.635 737.307 365.768 737.725C358.727 741.088 351.604 744.257 343.794 747.8C343.794 741.118 343.757 734.862 343.854 728.614C343.861 728.031 344.534 727.202 345.102 726.933C352.158 723.562 359.25 720.266 366.351 716.977C366.635 716.843 367.038 716.962 367.636 716.962Z" fill="#33D7FB"></path><path d="M317.71 712.344L340.648 726.888V748.249L317.71 733.54V712.344Z" fill="#33D7FB"></path><path d="M439.11 290.017C439.11 345.302 439.11 400.58 439.11 455.865C436.255 457.016 433.347 458.055 430.545 459.326C387.614 478.683 344.698 498.071 301.783 517.451C276.872 528.699 251.946 539.918 227.065 551.241C225.01 552.175 223.485 552.108 221.579 550.905C203.006 539.111 184.389 527.384 165.771 515.665C140.419 499.708 115.037 483.788 89.6781 467.839C82.9739 463.623 76.2996 459.363 69.2666 454.909C70.881 454.109 71.9647 453.526 73.0783 453.033C92.7125 444.288 112.362 435.566 131.988 426.821C164.784 412.202 197.573 397.561 230.369 382.942C273.381 363.771 316.394 344.607 359.407 325.459C385.97 313.628 412.54 301.826 439.11 290.017Z" fill="#8BD8FE"></path><path d="M439.109 459.603C439.109 511.151 439.109 562.699 439.109 614.247C398.981 631.415 358.861 648.59 317.933 666.102C316.909 641.026 315.908 616.609 314.884 591.556C285.384 604 256.445 616.213 226.287 628.933C226.287 615.473 226.294 603.066 226.287 590.659C226.279 579.956 226.309 569.254 226.205 558.551C226.182 556.54 226.743 555.516 228.664 554.649C245.996 546.869 263.261 538.954 280.556 531.091C296.61 523.797 312.657 516.517 328.726 509.26C351.237 499.088 373.764 488.938 396.29 478.803C410.558 472.383 424.834 466 439.109 459.603Z" fill="#1E82F9"></path><path d="M439.11 459.602C424.842 466 410.56 472.383 396.299 478.803C373.773 488.938 351.246 499.087 328.734 509.26C312.665 516.517 296.611 523.804 280.564 531.091C263.27 538.946 245.997 546.869 228.672 554.649C226.752 555.509 226.191 556.54 226.214 558.551C226.318 569.253 226.288 579.956 226.296 590.659C226.303 603.066 226.296 615.473 226.296 628.933C256.453 616.212 285.393 604 314.892 591.556C315.916 616.609 316.918 641.026 317.942 666.101C358.869 648.582 398.997 631.415 439.118 614.247C439.118 615.742 439.118 617.236 439.118 618.731C437.832 619.112 436.494 619.359 435.276 619.882C396.135 636.661 357.008 653.478 317.852 670.22C316.828 670.66 315.498 670.369 314.302 670.421C313.831 659.659 313.286 648.896 312.904 638.134C312.553 628.216 312.448 618.29 312.09 608.372C311.963 604.815 311.417 601.272 311.036 597.408C309.72 597.879 308.435 598.267 307.209 598.791C297.964 602.699 288.719 606.623 279.481 610.555C267.164 615.794 254.854 621.048 242.537 626.295C238.06 628.141 233.575 629.942 229.128 631.855C228.299 632.214 227.738 633.395 226.931 633.537C225.743 633.746 224.323 633.664 223.231 633.178C221.415 632.371 219.778 631.153 218.074 630.107C217.177 629.292 216.378 628.343 215.376 627.685C195.809 614.837 176.227 602.004 156.623 589.209C153.865 587.408 150.995 585.786 147.49 583.663C147.879 589.299 148.402 594.209 148.521 599.127C148.873 613.761 149.044 628.403 149.336 643.044C149.373 644.883 149.911 646.721 149.874 648.552C149.792 652.319 149.478 656.086 149.261 659.853C127.691 645.802 106.121 631.751 84.5588 617.7C80.5976 615.121 76.7186 612.408 72.6677 609.972C70.7095 608.798 70.1116 607.371 70.007 605.166C68.3029 568.364 66.5315 531.569 64.7452 494.775C64.1324 482.099 63.4896 469.416 62.7123 456.747C62.5628 454.363 63.3327 453.242 65.4777 452.293C188.986 397.314 312.463 342.275 435.956 287.259C436.958 286.811 438.056 286.602 439.11 286.28C439.11 287.528 439.11 288.769 439.11 290.017C412.548 301.826 385.97 313.62 359.415 325.444C316.395 344.592 273.382 363.756 230.376 382.927C197.581 397.546 164.792 412.187 131.996 426.806C112.362 435.558 92.7204 444.281 73.0862 453.018C71.9651 453.518 70.8814 454.101 69.2745 454.894C76.3075 459.348 82.9893 463.608 89.686 467.824C115.045 483.773 140.419 499.693 165.779 515.65C184.404 527.369 203.014 539.096 221.587 550.89C223.485 552.1 225.018 552.16 227.073 551.226C251.954 539.91 276.88 528.684 301.791 517.436C344.706 498.056 387.622 478.668 430.553 459.311C433.355 458.048 436.263 457.001 439.118 455.85C439.11 457.113 439.11 458.362 439.11 459.602ZM66.3895 457.629C66.7034 460.185 66.9949 461.747 67.0697 463.324C67.847 478.945 68.5794 494.573 69.3343 510.194C70.0742 525.441 70.8216 540.695 71.5615 555.942C72.3164 571.563 73.1535 587.183 73.729 602.812C73.8336 605.569 74.8875 606.99 77.0474 608.395C97.6757 621.818 118.229 635.338 138.82 648.807C141.055 650.271 143.394 651.579 146.077 653.194C145.352 627.565 144.642 602.505 143.902 576.623C170.727 594.052 196.661 610.913 223.239 628.186C223.239 625.689 223.254 624.202 223.239 622.722C223 603.948 222.76 585.165 222.529 566.391C222.491 563.655 222.708 560.89 222.424 558.184C222.29 556.929 221.527 555.344 220.533 554.649C216.363 551.734 212.005 549.081 207.693 546.368C168.664 521.831 129.627 497.309 90.5978 472.779C82.8323 467.913 75.0519 463.063 66.3895 457.629Z" fill="#161CC1"></path><path d="M152.535 659.382C150.954 660.1 149.349 658.26 149.463 656.528C149.638 653.872 149.814 651.216 149.867 648.553C149.904 646.721 149.366 644.883 149.329 643.044C149.037 628.403 148.865 613.769 148.514 599.127C148.452 596.566 148.28 594.008 148.075 591.348C147.826 588.117 151.33 585.932 154.096 587.622C154.955 588.147 155.79 588.67 156.616 589.209C176.22 602.005 195.802 614.837 215.369 627.685C216.802 628.627 216.321 630.895 214.758 631.602C203.896 636.512 193.038 641.439 182.154 646.31C172.304 650.72 162.43 655.077 152.535 659.382Z" fill="#0057BF"></path><path d="M249.128 630.349C246.362 628.648 246.668 624.534 249.655 623.261C259.597 619.024 269.536 614.784 279.479 610.555C288.717 606.623 297.955 602.692 307.208 598.791C309.113 597.989 311.244 599.4 311.481 601.453C311.753 603.813 312.007 606.089 312.088 608.372C312.447 618.29 312.552 628.216 312.903 638.134C313.195 646.384 313.58 654.635 313.959 662.886C314.106 666.091 310.608 668.151 307.875 666.471C288.29 654.43 268.707 642.39 249.128 630.349Z" fill="#0057BF"></path><path d="M66.3887 457.629C75.0585 463.056 82.8315 467.914 90.597 472.794C129.634 497.316 168.663 521.846 207.692 546.383C212.005 549.096 216.362 551.749 220.532 554.664C221.526 555.359 222.289 556.944 222.423 558.199C222.707 560.905 222.491 563.67 222.528 566.406C222.76 585.181 223.006 603.963 223.238 622.737C223.253 624.217 223.238 625.705 223.238 628.201C196.66 610.929 170.718 594.067 143.902 576.638C144.634 602.52 145.344 627.581 146.076 653.209C143.393 651.595 141.054 650.287 138.819 648.822C118.228 635.354 97.6674 621.826 77.0466 608.41C74.8866 607.005 73.8328 605.585 73.7281 602.827C73.1526 587.199 72.3155 571.578 71.5607 555.957C70.8207 540.71 70.0734 525.456 69.3334 510.209C68.5786 494.588 67.8461 478.96 67.0688 463.34C66.9866 461.755 66.7026 460.193 66.3887 457.629Z" fill="#1E82F9"></path><path d="M0.532587 686.84C20.8864 678.236 40.9744 669.737 61.0735 661.237C70.3977 657.295 79.7496 653.397 89.0405 649.372C90.5577 648.713 91.6429 648.735 93.0604 649.637C117.528 665.263 142.046 680.816 166.497 696.469C167.372 697.028 168.208 698.412 168.224 699.426C168.512 715.477 168.628 731.534 168.889 747.586C168.922 749.518 168.352 750.449 166.547 751.224C135.003 764.789 103.481 778.416 71.9868 792.092C70.4475 792.762 69.4232 792.756 68.0389 791.726C46.1403 775.431 24.1919 759.202 2.29887 742.896C1.4794 742.287 0.615649 741.063 0.610112 740.122C0.50491 722.421 0.532587 704.708 0.532587 686.84ZM163.85 698.916C164.188 699.653 164.531 700.389 164.941 701.286C148.169 708.274 131.553 715.206 114.926 722.116C101.587 727.658 88.2543 733.195 74.8826 738.649C72.7232 739.53 71.865 740.67 71.8871 743.129C72.02 757.431 71.9536 771.732 71.9536 786.04C71.9536 786.915 71.9536 787.79 71.9536 788.963C74.0188 788.105 75.7131 787.424 77.3908 786.699C91.5709 780.553 105.746 774.385 119.931 768.244C134.538 761.921 149.133 755.581 163.789 749.374C165.672 748.577 166.148 747.591 166.115 745.692C165.866 730.765 165.711 715.832 165.522 700.904C165.517 700.444 165.605 699.924 165.423 699.542C165.207 699.088 164.742 698.745 164.387 698.357C140.362 683.069 116.354 667.765 92.2741 652.561C91.427 652.024 89.7825 652.157 88.7637 652.583C67.5295 661.481 46.3341 670.467 25.1277 679.437C18.5221 682.233 11.9221 685.035 5.14487 687.909C5.83698 688.507 6.291 688.961 6.79486 689.337C27.7688 704.951 48.7372 720.577 69.772 736.108C70.5749 736.7 72.2525 736.767 73.2326 736.363C93.4147 728.057 113.547 719.624 133.707 711.264C143.74 707.105 153.801 703.03 163.85 698.916ZM3.5336 690.406C3.40625 691.281 3.31214 691.635 3.31214 691.984C3.30107 707.476 3.26784 722.969 3.37858 738.456C3.38412 739.496 4.23681 740.859 5.11165 741.517C19.0758 751.993 33.1064 762.392 47.1315 772.785C54.3405 778.128 61.5773 783.432 69.1851 789.041C69.1851 787.734 69.1851 786.848 69.1851 785.968C69.1851 771.489 69.1242 757.015 69.246 742.536C69.2681 740.056 68.4985 738.55 66.5052 737.082C52.2919 726.629 38.1782 716.042 24.0203 705.516C17.3261 700.555 10.6043 695.622 3.5336 690.406Z" fill="#161CC1"></path><path d="M163.851 698.916C153.801 703.03 143.735 707.105 133.708 711.264C113.548 719.624 93.4154 728.057 73.2332 736.363C72.2587 736.767 70.5755 736.7 69.7727 736.108C48.7323 720.582 27.7694 704.952 6.7955 689.337C6.28611 688.961 5.83209 688.507 5.14551 687.909C11.9227 685.035 18.5227 682.233 25.1283 679.437C46.3292 670.467 67.5302 661.481 88.7643 652.583C89.7831 652.157 91.4276 652.024 92.2748 652.561C116.349 667.765 140.363 683.07 164.388 698.357C164.205 698.545 164.028 698.728 163.851 698.916Z" fill="#66BBFE"></path><path d="M163.974 699.185C163.899 699.023 163.93 698.83 164.054 698.701C164.231 698.515 164.532 698.515 164.716 698.694C164.989 698.957 165.265 699.222 165.417 699.542C165.6 699.924 165.511 700.444 165.516 700.904C165.705 715.837 165.86 730.764 166.109 745.692C166.142 747.586 165.666 748.577 163.783 749.374C149.127 755.581 134.532 761.926 119.925 768.244C105.74 774.384 91.5651 780.553 77.385 786.699C76.4975 787.084 75.6037 787.456 74.6507 787.849C73.3639 788.38 71.9477 787.432 71.9477 786.04C71.9477 771.738 72.0142 757.43 71.8813 743.128C71.8591 740.67 72.7174 739.529 74.8768 738.649C88.2485 733.195 101.587 727.658 114.92 722.116C131.067 715.405 147.203 708.674 163.481 701.892C164.277 701.56 164.642 700.636 164.281 699.852C164.176 699.626 164.074 699.405 163.974 699.185Z" fill="#1E82F9"></path><path d="M3.3128 691.995C3.30163 691.269 4.24196 690.928 4.82687 691.359C11.4265 696.224 17.7359 700.854 24.0209 705.527C38.1789 716.053 52.2925 726.64 66.5059 737.093C68.4991 738.561 69.2688 740.067 69.2466 742.547C69.1248 757.021 69.1857 771.5 69.1857 785.979C69.1857 787.253 67.7367 787.985 66.711 787.23C59.9964 782.287 53.5511 777.557 47.1321 772.796C33.107 762.397 19.0765 752.004 5.11231 741.529C4.23747 740.87 3.38478 739.508 3.37924 738.467C3.26851 722.974 3.30727 707.482 3.3128 691.995Z" fill="#1E82F9"></path><path d="M312 722.276L224.726 759.983L143.087 709.488L140.27 630.839L186.108 610.331L187.505 610.428L190.741 612.58L195.607 615.817L198.2 617.543L201.242 619.561L204.195 621.527V621.534L222.977 634.023L255.556 620.69L258.463 619.501L261.543 618.238L265.915 616.445L309.092 643.216L312 722.276Z" fill="#CC27C5"></path><path d="M303.696 645.212L220.324 679.929L145.748 632.589L189.426 612.491L190.742 612.581L195.607 615.817L198.201 617.543L201.242 619.561L204.195 621.527V621.534L222.977 634.024L255.556 620.69L258.463 619.502L261.543 618.238L303.696 645.212Z" fill="#FF98FB"></path><path d="M264.091 633.119C264.091 651.071 246.28 661.759 224.307 661.759C202.333 661.759 184.702 654.898 184.702 635.256C184.702 628.478 188.626 621.288 195.607 615.817L198.2 617.543L201.242 619.561L204.194 621.527V621.534L222.976 634.023L255.556 620.69L258.463 619.501C261.991 623.365 264.091 627.962 264.091 633.119Z" fill="#273CD9"></path><path d="M261.056 633.112C261.056 649.068 244.643 658.568 224.388 658.568C204.134 658.568 187.878 652.469 187.878 635.017C187.878 628.911 191.593 622.424 198.2 617.543L201.241 619.561L204.194 621.527V621.534L222.976 634.023L255.555 620.69C258.993 624.18 261.056 628.38 261.056 633.112Z" fill="url(#paint0_linear_1357_955)"></path><path d="M210.095 639.274C210.36 635.32 209.15 632.019 207.391 631.901C205.632 631.783 203.991 634.892 203.726 638.846C203.46 642.8 204.671 646.101 206.43 646.219C208.188 646.337 209.829 643.228 210.095 639.274Z" fill="#191055"></path><path d="M233.019 640.81C233.285 636.856 232.074 633.555 230.316 633.437C228.557 633.319 226.916 636.429 226.651 640.383C226.385 644.337 227.596 647.638 229.354 647.756C231.113 647.874 232.754 644.764 233.019 640.81Z" fill="#191055"></path><path d="M204.254 621.908C204.254 621.908 198.461 625.496 196.01 631.946C196.01 631.946 195.292 635.354 193.618 635.473C193.618 635.473 190.15 635.115 193.14 629.315C195.644 624.472 199.224 621.041 201.242 619.561L204.194 621.527V621.534C204.239 621.766 204.254 621.908 204.254 621.908Z" fill="white"></path><path d="M254.621 633.381C254.621 633.381 255.698 641.864 247.215 646.289C247.215 646.289 244.405 647.066 245.182 649.637C245.182 649.637 246.138 651.491 248.889 649.996C251.639 648.501 258.329 643.224 258.269 634.241C258.269 634.241 258.269 631.468 256.654 630.93C255.04 630.391 254.577 632.424 254.621 633.381Z" fill="white"></path><path d="M194.988 644.777C196.069 644.476 196.524 642.711 196.003 640.834C195.482 638.957 194.182 637.679 193.1 637.979C192.019 638.279 191.564 640.044 192.085 641.922C192.606 643.799 193.906 645.077 194.988 644.777Z" fill="white"></path><path d="M143.918 636.408L146.743 707.328L222.148 754.833L218.83 682.582L143.918 636.408Z" fill="#EA46E3"></path><path d="M223.56 683.411L226.549 754.833L309.092 719.122L306.102 648.867L223.56 683.411Z" fill="#EA46E3"></path><path d="M503.171 341.048C503.171 342.973 503.171 344.982 503.171 346.907C501.915 347.409 500.576 347.744 499.32 348.33C437.297 376.872 375.274 405.498 313.167 433.957C311.159 434.877 308.313 434.961 306.22 434.292C283.035 426.758 260.017 418.974 236.915 411.273C235.659 410.855 234.404 410.353 232.562 409.599C233.985 408.93 234.822 408.428 235.659 408.093C293.581 384.07 351.587 360.048 409.508 336.109C411.015 335.523 412.773 335.189 414.363 335.272C424.24 335.858 434.117 336.611 443.993 337.281C463.663 338.537 483.417 339.792 503.171 341.048Z" fill="#E7FAFE"></path><path d="M503.17 341.048C483.416 339.792 463.663 338.62 443.909 337.281C434.032 336.611 424.155 335.858 414.279 335.272C412.688 335.189 410.93 335.523 409.424 336.109C351.418 360.048 293.497 384.07 235.575 408.093C234.738 408.428 233.901 408.93 232.478 409.599C234.403 410.353 235.575 410.855 236.831 411.273C259.932 418.974 282.95 426.758 306.136 434.292C308.228 434.961 311.074 434.877 313.083 433.957C375.19 405.498 437.213 376.872 499.236 348.33C500.491 347.744 501.831 347.409 503.086 346.907C503.086 351.343 503.086 355.863 503.086 360.299C493.628 364.652 484.086 368.92 474.628 373.273C452.279 383.652 430.015 394.115 407.75 404.661C375.022 420.062 342.295 435.463 309.484 450.697C307.726 451.534 305.131 451.785 303.29 451.199C269.307 439.732 235.408 428.098 201.509 416.463C200.337 416.044 199.332 415.291 198.244 414.705C198.746 414.454 199.165 414.119 199.667 413.868C221.011 404.745 242.355 395.454 263.783 386.581C310.488 367.246 357.194 348.162 403.983 329.078C408.419 327.237 413.274 325.563 417.961 325.395C426.415 325.061 434.953 325.814 443.407 326.149C463.244 326.902 483.165 327.739 503.003 328.576C503.17 332.677 503.17 336.863 503.17 341.048Z" fill="#1B2EBC"></path><path d="M503.169 328.493C483.332 327.655 463.411 326.902 443.574 326.065C435.12 325.73 426.582 324.977 418.128 325.312C413.441 325.479 408.586 327.237 404.15 328.995C357.361 348.079 310.655 367.163 263.95 386.498C242.522 395.37 221.178 404.661 199.834 413.785C199.332 414.036 198.913 414.371 198.411 414.622C197.574 415.542 195.984 416.798 196.151 417.384C196.57 418.639 197.741 419.979 198.997 420.481C209.962 424.833 221.01 428.935 232.059 433.12C254.993 441.909 278.011 450.697 300.862 459.57C304.796 461.076 308.395 460.825 312.162 459.067C330.492 450.279 348.823 441.574 367.154 432.785C386.238 423.661 405.322 414.538 424.406 405.414C450.605 392.859 476.887 380.304 503.086 367.749C503.086 369.423 503.086 371.097 503.086 372.771C497.645 375.198 492.204 377.542 486.847 380.053C479.9 383.317 473.12 386.582 465.336 390.348C468.684 391.687 471.279 392.692 473.874 393.696C477.724 395.203 480.319 397.965 480.402 402.066C480.486 406.419 477.138 408.26 473.539 409.516C468.182 411.357 462.825 410.437 457.552 408.679C457.05 408.511 456.547 408.177 456.045 408.009C451.358 405.917 446.754 402.15 442.067 402.15C437.547 402.15 433.027 405.917 428.507 408.093C407.08 418.388 385.652 428.684 364.224 438.895C362.969 439.481 361.713 440.151 359.956 440.988C364.475 443.08 368.493 445.089 372.594 446.763C375.608 448.019 377.533 449.776 377.533 453.208C377.533 456.807 375.691 459.318 372.511 460.741C366.903 463.252 361.127 463.085 355.436 460.909C349.744 458.733 344.22 455.97 338.528 453.878C336.854 453.292 334.426 453.376 332.836 454.045C326.558 456.724 320.532 459.821 314.338 462.834C309.651 465.094 304.796 465.68 299.774 463.755C265.372 450.53 230.971 437.389 196.57 424.331C193.891 423.327 192.552 421.82 192.05 419.142C191.296 415.375 192.05 412.78 195.9 411.106C211.468 404.494 226.953 397.463 242.606 390.934C296.007 368.837 349.576 346.907 402.978 324.893C410.344 321.88 417.793 320.876 425.829 321.294C451.023 322.633 476.217 323.554 501.412 324.559C501.914 324.559 502.5 324.391 503.086 324.307C503.169 325.73 503.169 327.07 503.169 328.493ZM340.872 450.111C347.568 453.041 353.176 456.054 359.118 457.728C363.052 458.816 367.74 459.402 371.506 456.389C374.269 454.213 374.101 452.204 371.088 450.697C366.317 448.354 361.546 446.177 356.691 444.085C355.77 443.666 354.515 443.583 353.594 444.001C349.744 445.759 345.894 447.684 340.872 450.111ZM448.177 398.635C448.177 399.053 448.177 399.388 448.177 399.806C452.613 401.732 456.882 404.075 461.486 405.414C464.583 406.335 468.098 406.335 471.279 405.749C473.12 405.414 474.627 403.322 476.301 401.983C474.878 400.476 473.623 398.467 471.865 397.547C468.684 395.872 465.169 394.784 461.821 393.696C460.9 393.361 459.644 393.361 458.724 393.78C455.124 395.287 451.693 396.961 448.177 398.635Z" fill="#1B0660"></path><path d="M503.168 367.832C476.97 380.388 450.687 392.943 424.489 405.498C405.405 414.622 386.321 423.745 367.237 432.869C348.906 441.658 330.575 450.362 312.245 459.151C308.562 460.909 304.879 461.16 300.945 459.653C278.011 450.781 255.076 441.992 232.142 433.204C221.093 429.018 210.045 424.833 199.08 420.565C197.908 420.062 196.652 418.723 196.234 417.468C196.067 416.882 197.657 415.626 198.494 414.706C199.582 415.291 200.586 416.045 201.758 416.463C235.657 428.098 269.557 439.732 303.54 451.199C305.381 451.785 307.976 451.534 309.734 450.697C342.545 435.464 375.272 419.979 408 404.661C430.264 394.199 452.529 383.736 474.877 373.273C484.336 368.837 493.794 364.568 503.336 360.299C503.169 362.81 503.168 365.321 503.168 367.832Z" fill="#101C80"></path><path d="M340.871 450.111C345.893 447.684 349.66 445.675 353.594 443.917C354.431 443.499 355.77 443.666 356.691 444.001C361.545 446.093 366.316 448.353 371.087 450.613C374.101 452.12 374.268 454.045 371.506 456.305C367.739 459.318 363.052 458.816 359.118 457.644C353.175 456.054 347.651 453.041 340.871 450.111Z" fill="#1B2EBC"></path><path d="M363.891 282.959C359.12 280.364 354.181 278.858 349.159 278.188C331.247 275.844 312.832 284.131 300.947 291.162C310.907 283.377 324.3 270.236 332.753 251.822C335.348 246.214 337.441 240.104 338.78 233.575C342.463 216.165 339.115 198.755 332.502 182.852C332.251 184.777 331.916 186.786 331.498 188.878C324.969 221.689 310.405 241.443 247.88 266.051C185.355 290.66 64.4054 267.139 64.4054 267.139L62.9824 266.051C63.1498 266.47 63.3172 266.972 63.4846 267.39C75.5377 301.122 110.19 323.973 146.015 330.836C166.605 334.77 187.531 333.431 204.857 325.898C204.857 325.898 208.373 324.726 212.474 323.889C214.483 323.387 216.24 323.136 217.747 323.052C215.989 323.22 214.148 323.554 212.474 323.889C202.262 326.4 185.522 335.356 162.253 363.229C161.751 363.815 161.248 364.485 160.662 365.07C118.309 416.547 136.054 470.2 166.522 457.394C166.522 457.394 176.398 456.557 183.848 416.631C191.297 376.621 209.795 343.726 241.518 332.929C241.518 332.929 253.906 333.347 263.365 357.286C272.823 381.141 295.506 410.437 316.097 398.049C336.687 385.661 314.004 353.52 299.607 336.193C285.211 318.867 287.638 321.378 287.638 321.378C287.638 321.378 306.22 303.215 332.167 304.889C358.115 306.563 355.688 331.673 356.023 335.356C356.441 339.039 355.604 364.233 378.287 364.652C400.97 365.07 396.785 301.122 363.891 282.959ZM217.747 322.968C220.342 322.717 222.769 322.885 224.192 323.805C223.857 323.638 221.765 322.717 217.747 322.968Z" fill="url(#paint1_linear_1357_955)"></path><path d="M102.992 77.8892C102.992 79.1447 102.825 80.4003 102.406 81.5721C100.816 86.5105 96.2124 90.026 90.8555 90.026C84.1594 90.026 78.7188 84.5854 78.7188 77.8892C78.7188 71.1931 84.1594 65.7524 90.8555 65.7524C94.8732 65.7524 98.4724 67.6776 100.649 70.7746C102.155 72.7834 102.992 75.2107 102.992 77.8892Z" fill="#E6FAFF"></path><path d="M160.578 24.7386C160.578 31.4347 155.138 36.8753 148.441 36.8753C141.745 36.8753 136.305 31.4347 136.305 24.7386C136.305 18.0424 141.745 12.6018 148.441 12.6018C155.138 12.6018 160.578 18.0424 160.578 24.7386Z" fill="#E6FAFF"></path><path d="M277.845 18.7122C277.845 25.4083 272.404 30.849 265.708 30.849C259.012 30.849 253.571 25.4083 253.571 18.7122C253.571 12.0161 259.012 6.57544 265.708 6.57544C272.404 6.57544 277.845 12.0161 277.845 18.7122Z" fill="#E6FAFF"></path><path d="M359.12 99.066C359.12 105.762 353.68 111.203 346.983 111.203C340.287 111.203 334.847 105.762 334.847 99.066C334.847 92.3698 340.287 86.9292 346.983 86.9292C353.68 86.9292 359.12 92.3698 359.12 99.066Z" fill="#E6FAFF"></path><path d="M212.39 323.805C202.179 326.316 185.438 335.272 162.169 363.145C152.795 366.409 141.16 370.092 128.27 373.44C95.961 381.894 60.6389 379.634 56.956 359.044C53.2731 338.453 70.9342 329.748 99.8113 334.352C128.103 338.788 145.261 331.171 145.931 330.836C166.522 334.77 187.447 333.431 204.773 325.898C204.773 325.814 208.289 324.642 212.39 323.805Z" fill="url(#paint2_linear_1357_955)"></path><path d="M349.075 278.188C331.162 275.844 312.748 284.13 300.862 291.161C310.823 283.377 324.215 270.236 332.669 251.822C332.669 251.822 343.801 245.711 354.934 229.641C366.066 213.57 385.82 193.816 403.146 206.12C420.472 218.425 404.653 266.218 349.075 278.188Z" fill="url(#paint3_linear_1357_955)"></path><path d="M347.045 79.8957C342.528 79.2244 338.178 80.3992 334.664 82.9165C334.664 82.9165 294.344 65.7986 267.575 111.53C267.575 111.53 253.186 103.139 231.771 96.0906C231.771 96.0906 226.668 63.3652 253.688 39.2826C255.194 39.9539 256.867 40.4574 258.624 40.7091C269.582 42.3034 279.704 34.7514 281.294 23.759C282.883 12.7666 275.354 2.61332 264.396 1.01901C255.361 -0.323573 246.829 4.6272 243.315 12.5988C242.646 13.0183 200.82 37.94 199.565 94.4124C199.565 94.4124 175.891 91.5594 146.111 106.412C146.111 106.412 114.49 81.9935 136.49 40.1217C138.582 41.4643 140.924 42.3873 143.517 42.723C153.388 44.1495 162.59 37.2687 164.012 27.4511C165.434 17.5496 158.659 8.3193 148.704 6.89281C143.015 6.05369 137.662 7.98365 133.73 11.5918C133.061 11.8436 99.0139 23.1716 100.436 65.1273C97.6755 62.7778 94.1621 61.0996 90.2304 60.5122C79.1882 58.9179 68.8989 66.5538 67.2258 77.714C66.9748 79.4762 66.9748 81.2383 67.1421 82.9165C66.3056 83.5878 16.1975 124.285 68.8989 182.016C68.8989 182.016 44.9741 214.07 63.0431 266.599L64.4653 267.689C64.4653 267.689 185.344 291.268 247.833 266.599C310.321 241.929 324.877 222.126 331.402 189.232C331.82 187.134 332.155 185.204 332.406 183.191C322.116 158.353 303.796 137.459 291.667 126.634C291.667 126.634 302.207 99.6149 330.314 111.446C332.991 114.887 336.839 117.236 341.273 117.908C351.06 119.334 360.262 111.95 361.768 101.461C363.525 91.0559 356.832 81.3222 347.045 79.8957ZM265.818 6.64107C272.51 6.64107 277.948 12.0953 277.948 18.8082C277.948 25.5211 272.51 30.9754 265.818 30.9754C259.126 30.9754 253.688 25.5211 253.688 18.8082C253.688 12.0953 259.126 6.64107 265.818 6.64107ZM148.62 12.6827C155.312 12.6827 160.75 18.1369 160.75 24.8498C160.75 31.5628 155.312 37.017 148.62 37.017C141.928 37.017 136.49 31.5628 136.49 24.8498C136.49 18.1369 141.928 12.6827 148.62 12.6827ZM91.0669 65.9664C95.0822 65.9664 98.6793 67.8964 100.854 71.0011C102.36 73.015 103.197 75.5323 103.197 78.2175C103.197 79.4762 103.029 80.7348 102.611 81.9096C101.022 86.8604 96.4207 90.3846 91.0669 90.3846C84.3747 90.3846 78.9372 84.9304 78.9372 78.2175C78.9372 71.5046 84.3747 65.9664 91.0669 65.9664ZM87.3862 149.039C87.3862 149.039 61.5374 124.537 84.4583 100.79C92.9909 102.048 101.022 97.7688 105.037 90.7203C107.798 99.7827 111.896 109.852 117.669 120.928C117.585 120.928 99.9341 133.347 87.3862 149.039ZM346.961 111.53C340.269 111.53 334.832 106.076 334.832 99.3632C334.832 92.6502 340.269 87.196 346.961 87.196C353.654 87.196 359.091 92.6502 359.091 99.3632C359.175 106.076 353.737 111.53 346.961 111.53Z" fill="url(#paint4_linear_1357_955)"></path><path d="M102.992 77.8892C102.992 79.1447 102.825 80.4003 102.406 81.5721C100.816 86.5105 96.2124 90.026 90.8555 90.026C84.1594 90.026 78.7188 84.5854 78.7188 77.8892C78.7188 71.1931 84.1594 65.7524 90.8555 65.7524C94.8732 65.7524 98.4724 67.6776 100.649 70.7746C102.155 72.7834 102.992 75.2107 102.992 77.8892Z" fill="#E6FAFF"></path><path d="M160.578 24.7386C160.578 31.4347 155.138 36.8753 148.441 36.8753C141.745 36.8753 136.305 31.4347 136.305 24.7386C136.305 18.0424 141.745 12.6018 148.441 12.6018C155.138 12.6018 160.578 18.0424 160.578 24.7386Z" fill="#E6FAFF"></path><path d="M277.845 18.7122C277.845 25.4083 272.404 30.849 265.708 30.849C259.012 30.849 253.571 25.4083 253.571 18.7122C253.571 12.0161 259.012 6.57544 265.708 6.57544C272.404 6.57544 277.845 12.0161 277.845 18.7122Z" fill="#E6FAFF"></path><path d="M359.12 99.066C359.12 105.762 353.68 111.203 346.983 111.203C340.287 111.203 334.847 105.762 334.847 99.066C334.847 92.3698 340.287 86.9292 346.983 86.9292C353.68 86.9292 359.12 92.3698 359.12 99.066Z" fill="#E6FAFF"></path><path d="M292.408 127.608C292.408 127.608 305.215 101.744 328.902 110.533C328.902 110.533 338.193 121.33 351 116.811C363.806 112.374 365.898 93.3741 355.268 84.418C344.638 75.4619 333.171 82.5765 333.171 82.5765C333.171 82.5765 296.677 64.748 266.377 109.947C266.377 109.947 251.143 100.07 231.976 96.7221C231.976 96.7221 228.042 58.8052 255.077 39.6375C255.077 39.6375 273.826 44.6596 280.523 30.6814C287.219 16.7032 278.849 5.40343 270.646 2.64127C262.443 -0.120892 251.311 -0.874208 242.606 13.2714C242.606 13.2714 200.922 35.4524 199.081 93.2066C199.081 93.2066 173.217 92.3696 144.758 105.595C144.758 105.595 115.379 79.1447 136.388 40.893C136.388 40.893 152.71 50.6024 161.08 37.2101C169.45 23.8178 161.833 10.2581 153.463 7.83078C145.093 5.40343 137.811 5.73824 131.115 11.3463C131.115 11.3463 99.8104 25.3245 99.7267 64.0784C94.7045 61.1488 87.5062 60.3955 78.299 63.6599C78.299 63.6599 66.9992 67.008 65.4926 82.0743C65.4926 82.0743 16.3596 123.758 66.5807 181.428C66.5807 181.428 53.607 209.887 55.6158 236.504C55.6158 236.504 54.6951 221.019 71.1006 180.842C71.1006 180.842 20.2936 131.961 69.2592 83.4135C69.2592 83.4135 70.1799 67.008 86.7529 65.9199C92.8631 65.5013 97.2993 67.4265 100.061 70.356C103.995 74.6248 104.749 81.1536 102.824 86.4268C102.489 87.4312 101.987 88.4356 101.401 89.3564C95.7927 98.3125 84.4929 96.2199 84.4929 96.2199C84.4929 96.2199 50.0915 121.33 88.1758 153.723C88.1758 153.723 103.242 135.309 122.745 122.084C122.745 122.084 112.868 107.101 107.427 87.5149C109.771 80.9025 108.599 73.1182 104.079 67.845C103.075 48.5099 109.436 28.0866 133.71 14.4432C133.71 14.4432 141.912 8.33299 152.291 11.6811C162.67 15.0291 161.582 31.0162 158.402 34.9502C155.305 38.4656 149.362 43.4878 134.881 35.8709C134.881 35.8709 106.59 72.8671 144.005 110.868C144.005 110.868 165.349 98.5636 202.931 96.5547C202.931 96.5547 198.662 47.4217 245.368 16.0336C245.368 16.0336 249.804 6.91006 260.602 5.23603C271.399 3.56199 282.95 14.3595 277.76 27.3333C272.487 40.3071 254.073 35.5361 254.073 35.5361C254.073 35.5361 222.434 55.9593 229.13 99.3169C229.13 99.3169 254.24 106.18 267.8 115.137C267.8 115.137 294.417 68.682 334.175 86.6779C334.175 86.6779 342.964 81.6558 351.669 87.5986C360.458 93.5415 358.365 107.101 350.414 112.123C342.378 117.145 329.907 106.934 329.907 106.934C329.907 106.934 303.122 94.8807 286.968 129.45C286.968 129.45 323.127 156.067 333.673 199.926C345.977 251.068 300.778 290.408 300.778 290.408C300.778 290.408 324.55 283.545 336.77 243.2C348.991 202.856 329.321 159.164 292.408 127.608ZM104.665 92.6207C107.511 101.409 111.78 110.951 117.723 121.414C117.723 121.414 100.061 132.547 87.5899 148.534C87.5899 148.534 59.1313 124.93 85.4973 99.8191C85.5811 99.8191 97.5504 102.665 104.665 92.6207Z" fill="url(#paint5_linear_1357_955)"></path><path d="M104.582 315.435C104.582 315.435 142.248 333.012 175.812 329.748C209.377 326.4 218.668 317.946 226.703 324.977C226.703 324.977 209.544 324.81 193.808 336.612C178.072 348.414 139.402 391.018 140.406 424.415C141.411 457.728 160.662 457.31 167.107 451.367C173.552 445.34 181.839 426.926 184.936 411.608C184.936 411.608 181.588 458.147 159.239 460.072C136.472 461.997 104.917 407.842 191.548 333.18C191.548 333.012 152.794 342.973 104.582 315.435Z" fill="#161CC1"></path><path d="M153.798 365.907C153.798 365.907 105.837 376.119 85.7487 373.775C65.6602 371.515 57.3738 362.392 60.3033 350.004C63.2329 337.616 79.7221 333.096 96.1277 333.682C96.1277 333.682 52.2679 325.73 56.3693 359.295C60.387 391.855 138.23 376.454 153.798 365.907Z" fill="#161CC1"></path><path d="M237.918 315.435C237.918 315.435 238.085 315.1 238.504 314.598C240.596 311.752 248.381 303.131 264.2 306.73C283.033 311.083 311.157 343.14 322.541 372.352C333.924 401.564 301.699 411.525 282.698 388.339C282.698 388.339 296.091 401.313 310.571 396.291C325.052 391.353 320.281 370.595 301.28 345.568C282.196 320.625 263.363 296.184 237.918 315.435Z" fill="#161CC1"></path><path d="M283.87 302.963C283.87 302.963 304.461 284.214 324.884 279.611C346.73 274.672 359.369 279.611 369.33 286.642C379.29 293.673 395.863 317.946 391.678 347.744C387.493 377.542 361.211 366.744 357.109 345.4C353.008 324.056 358.783 307.065 323.21 305.056C323.21 305.056 333.505 303.466 346.814 307.986C360.039 312.505 360.876 340.043 360.876 340.043C360.876 340.043 362.968 360.55 377.198 359.462C391.427 358.374 389.167 326.735 381.969 310.831C374.687 294.928 363.303 285.386 345.726 283.879C328.148 282.373 315.928 280.197 283.87 302.963Z" fill="#161CC1"></path><path d="M364.81 273.584C364.81 273.584 396.701 262.452 408.084 233.24C408.084 233.24 417.208 213.988 402.058 205.534C386.908 197.081 374.938 205.869 363.555 218.676C352.171 231.482 344.889 244.121 334.259 250.901L332.669 254.751C332.669 254.751 336.184 253.496 344.052 248.139C351.92 242.782 359.37 230.98 368.242 221.187C377.115 211.477 388.749 201.349 400.719 210.64C412.688 219.931 400.3 240.271 390.591 251.403C380.965 262.619 370.586 271.324 364.81 273.584Z" fill="#161CC1"></path><path d="M284.708 194.988C284.708 194.988 282.281 203.944 276.003 208.715C276.003 208.715 226.703 207.962 206.447 232.57C206.447 232.57 178.742 235.751 167.023 230.729C167.023 230.729 167.023 196.83 167.023 193.314C167.023 192.394 167.107 188.878 167.777 184.107C169.618 170.631 176.314 146.525 200.169 137.904C217.077 131.793 232.395 136.062 243.778 142.34C254.241 148.032 261.355 155.397 263.197 157.825C266.963 162.847 277.761 175.988 284.708 194.988Z" fill="#4061F0"></path><path d="M284.708 194.988C284.708 194.988 282.281 203.944 276.003 208.715C276.003 208.715 226.703 207.962 206.447 232.57C206.447 232.57 178.742 235.751 167.023 230.729C167.023 230.729 167.023 196.83 167.023 193.314C167.023 192.394 167.107 188.878 167.777 184.107C169.618 170.631 176.314 146.525 200.169 137.904C217.077 131.793 232.395 136.062 243.778 142.34C254.241 148.032 261.355 155.397 263.197 157.825C266.963 162.847 277.761 175.988 284.708 194.988Z" fill="white"></path><path d="M282.783 209.134C288.391 204.447 290.4 194.988 290.4 194.988C275.25 155.648 253.655 136.816 230.721 131.877C219.589 129.45 208.038 130.287 196.905 133.635C178.575 139.075 169.87 155.314 165.685 169.124C162.085 181.177 161.918 191.473 161.918 191.473V233.575C167.693 241.778 204.355 238.346 204.355 238.346C202.681 241.275 202.513 245.963 202.513 245.963C223.523 221.94 247.88 218.425 254.576 217.839C261.272 217.253 277.845 216.751 284.709 214.658C291.572 212.649 282.783 209.134 282.783 209.134ZM275.92 208.715C275.92 208.715 226.619 207.962 206.364 232.57C206.364 232.57 178.658 235.751 166.94 230.729C166.94 230.729 166.94 196.83 166.94 193.314C166.94 192.394 167.024 188.878 167.693 184.107C169.535 170.631 176.231 146.525 200.086 137.904C216.994 131.793 232.311 136.062 243.695 142.34C254.157 148.032 261.272 155.397 263.113 157.825C267.047 162.847 277.845 176.072 284.709 194.988C284.709 194.988 282.281 203.944 275.92 208.715Z" fill="#1B2EBC"></path><path d="M254.074 173.895C252.4 198.253 231.307 216.751 206.95 215.077C188.2 213.821 172.967 201.015 167.693 184.107C169.535 170.631 176.231 146.525 200.086 137.904C216.994 131.793 232.311 136.062 243.695 142.34C250.809 150.794 254.827 161.926 254.074 173.895Z" fill="#33D7FB"></path><path d="M209.878 196.411C221.019 196.411 230.05 187.38 230.05 176.239C230.05 165.098 221.019 156.067 209.878 156.067C198.737 156.067 189.706 165.098 189.706 176.239C189.706 187.38 198.737 196.411 209.878 196.411Z" fill="#0057BF"></path><path d="M186.008 165.902C187.5 161.429 185.546 156.748 181.644 155.445C177.741 154.143 173.367 156.714 171.875 161.186C170.383 165.659 172.337 170.341 176.239 171.643C180.142 172.945 184.516 170.375 186.008 165.902Z" fill="white"></path><path d="M234.826 188.753C236.652 185.591 234.66 181.022 230.376 178.549C226.093 176.076 221.14 176.635 219.314 179.797C217.488 182.96 219.48 187.529 223.764 190.002C228.047 192.475 233 191.916 234.826 188.753Z" fill="white"></path><path d="M178.91 180.257C178.91 180.257 176.901 189.213 186.443 194.988C195.985 200.764 205.945 196.076 205.945 196.076C205.945 196.076 195.315 194.737 188.619 190.468C182.007 186.199 178.91 180.257 178.91 180.257Z" fill="white"></path><path d="M297.931 240.187L286.715 254.165C286.715 254.165 283.367 258.601 282.446 263.121C282.111 264.628 281.191 267.306 279.266 270.403C243.274 251.319 215.736 281.871 215.736 281.871L216.154 283.545C214.146 282.791 212.053 281.954 209.961 280.95C209.961 280.95 199.749 278.355 179.744 276.848C179.744 276.848 195.229 276.514 200.837 275.174C206.445 273.919 214.815 260.861 239.507 251.403C264.283 241.945 277.089 250.315 283.786 248.808C290.482 247.218 297.931 240.187 297.931 240.187Z" fill="#FF9BD0"></path><path d="M279.266 270.32C275.667 276.095 268.636 283.21 256.415 285.888C240.428 289.404 228.459 288.148 216.071 283.461L215.652 281.787C215.736 281.787 243.274 251.236 279.266 270.32Z" fill="#FF73C7"></path><path d="M67.837 361.22C67.837 361.22 62.3127 355.444 65.4096 346.907C68.5066 338.369 80.8945 340.043 80.8945 340.043C80.8945 340.043 64.3215 341.968 67.837 361.22Z" fill="#FDFEFE"></path><path d="M170.12 370.26C170.12 370.26 146.683 390.767 147.186 419.476C147.102 419.476 151.789 396.542 170.12 370.26Z" fill="#FDFEFE"></path><path d="M147.101 427.428C147.101 427.428 142.916 437.389 151.118 443.583C151.118 443.583 147.101 435.38 147.101 427.428Z" fill="#FDFEFE"></path><path d="M245.619 316.188C245.619 316.188 255.998 307.316 268.805 316.188C281.611 325.061 286.466 335.607 286.466 339.123C286.466 339.123 280.272 325.479 266.042 318.114C251.813 310.748 245.619 316.188 245.619 316.188Z" fill="#FDFEFE"></path><path d="M307.139 367.414C307.139 367.414 310.906 373.608 309.985 381.559C309.065 389.511 299.857 392.608 299.857 392.608C299.857 392.608 312.162 393.864 314.003 382.899C316.012 371.18 307.139 367.414 307.139 367.414Z" fill="#FDFEFE"></path><path d="M344.973 287.478C344.973 287.478 356.691 286.139 368.409 297.188C380.127 308.237 379.039 324.14 379.039 324.14C379.039 324.14 374.268 295.681 344.973 287.478Z" fill="#FDFEFE"></path><path d="M391.678 213.319C391.678 213.319 373.598 208.464 366.316 234.495C366.316 234.495 369.162 221.27 391.678 213.319Z" fill="#FDFEFE"></path><path d="M363.89 236.421C363.89 236.421 359.286 244.372 350.665 247.469C350.665 247.469 363.053 247.469 363.89 236.421Z" fill="#FDFEFE"></path><path d="M64.572 235.332C64.572 235.332 58.7966 212.817 74.5325 186.116C74.4488 186.116 64.0698 219.68 64.572 235.332Z" fill="#FDFEFE"></path><path d="M77.3789 151.045C77.3789 151.045 83.7402 158.076 87.5068 159.917C87.5068 159.917 102.992 138.489 119.732 132.798C119.732 132.798 98.137 147.78 89.6831 166.111C89.6831 166.027 79.8063 160.921 77.3789 151.045Z" fill="#FDFEFE"></path><path d="M52.4346 120.075C52.4346 120.075 52.4346 104.841 67.6683 90.5283C67.6683 90.5283 55.0293 109.026 52.4346 120.075Z" fill="#FDFEFE"></path><path d="M128.352 21.8928C128.352 21.8928 109.352 29.8445 108.515 52.3603C108.515 52.3603 113.537 33.7785 128.352 21.8928Z" fill="#FDFEFE"></path><path d="M244.95 21.8928C244.95 21.8928 227.958 25.6594 222.183 46.5849C222.183 46.5849 233.566 30.8489 244.95 21.8928Z" fill="#FDFEFE"></path><path d="M133.459 105.344L143.168 115.471C143.168 115.471 158.151 106.432 179.83 103.335C179.83 103.335 149.613 113.463 142.499 122.084C142.499 122.084 134.129 112.626 133.459 105.344Z" fill="#FDFEFE"></path><path d="M223.522 89.189V103.335C223.522 103.335 237.835 105.092 252.483 114.132C252.483 114.132 236.998 107.938 220.007 107.52C220.007 107.52 220.007 96.7221 223.522 89.189Z" fill="#FDFEFE"></path><path d="M295.253 93.3742C295.253 93.3742 305.213 80.0657 326.39 86.9292C326.39 86.9292 305.381 88.101 295.253 93.3742Z" fill="#FDFEFE"></path><path d="M377.616 379.383C377.449 374.528 376.361 369.339 377.365 364.735C381.885 344.563 387.074 324.475 392.096 304.386C392.933 301.038 395.947 299.281 399.379 300.118C403.061 301.038 404.652 303.466 403.815 306.981C398.709 327.07 393.938 347.158 388.246 367.079C386.907 371.766 382.722 375.7 379.792 379.969C378.955 379.802 378.286 379.551 377.616 379.383Z" fill="#101C7F"></path><path d="M402.643 230.729C396.031 214.24 389.335 197.75 382.722 181.261C376.78 166.446 370.92 151.547 364.978 136.732C366.986 132.295 373.097 129.533 380.128 130.035C392.934 160.921 405.74 191.807 418.547 222.693C418.714 223.112 418.714 223.53 418.798 223.949C412.018 222.777 406.912 225.874 402.643 230.729Z" fill="#FEB700"></path><path d="M402.644 230.729C406.912 225.874 411.934 222.777 418.798 223.949C419.719 226.041 420.723 228.134 421.644 230.31C423.569 234.914 422.481 237.592 417.71 239.852C412.018 242.531 407.08 241.61 405.071 237.341C404.066 235.249 403.481 232.905 402.644 230.729Z" fill="#FE5D78"></path><path d="M380.129 130.119C373.181 129.617 366.987 132.379 364.979 136.815C364.811 131.961 364.56 127.19 364.393 122.335C366.736 121.582 369.164 120.745 371.507 119.991C374.437 123.339 377.283 126.687 380.129 130.119Z" fill="#FCDBB9"></path><path d="M371.59 119.991C369.247 120.744 366.819 121.581 364.476 122.335C364.81 120.159 365.145 118.066 365.647 114.551C368.326 116.978 369.916 118.485 371.59 119.991Z" fill="#1C1C1B"></path><defs><linearGradient id="paint0_linear_1357_955" x1="224.467" y1="617.543" x2="224.467" y2="658.568" gradientUnits="userSpaceOnUse"><stop stop-color="#10EBD1"></stop><stop offset="1" stop-color="#5865F2"></stop></linearGradient><linearGradient id="paint1_linear_1357_955" x1="219.494" y1="266.064" x2="257.16" y2="413.379" gradientUnits="userSpaceOnUse"><stop stop-color="#D7FF85"></stop><stop offset="0.9888" stop-color="#30EDB0"></stop></linearGradient><linearGradient id="paint2_linear_1357_955" x1="191.118" y1="338.73" x2="55.9413" y2="361.809" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint3_linear_1357_955" x1="311.309" y1="265.882" x2="413.928" y2="221.372" gradientUnits="userSpaceOnUse"><stop stop-color="#D7E385"></stop><stop offset="0.9888" stop-color="#6EF2B0"></stop></linearGradient><linearGradient id="paint4_linear_1357_955" x1="169.956" y1="-6.26785" x2="231.394" y2="264.738" gradientUnits="userSpaceOnUse"><stop offset="0.1922" stop-color="#FF78B1"></stop><stop offset="0.4324" stop-color="#FDBA85"></stop><stop offset="0.8121" stop-color="#FAEC63"></stop><stop offset="1" stop-color="#F9FF56"></stop></linearGradient><linearGradient id="paint5_linear_1357_955" x1="170.528" y1="1.61107" x2="243.433" y2="315.665" gradientUnits="userSpaceOnUse"><stop offset="0.0195531" stop-color="#E86C78"></stop><stop offset="0.2989" stop-color="#FF989C"></stop><stop offset="0.8045" stop-color="#F9D956"></stop></linearGradient></defs></svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/svg/Vectors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var $$Astro$3 = createAstro();
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Home" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$3, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${maybeRenderHead($$result)}<section>
        <div class="bg-gradient-to-r from-brand-primary-blue via-brand-primary-blue to-brand-primary-blue-lighter py-8 lg:py-24 md:py-12">
            <div class="text-white">
                <div class="max-w-5xl mx-auto px-3 space-y-6">
                    <h1 class="lg:text-7xl font-sans font-medium max-w-md md:text-6xl text-5xl">
                        We Tell <br> Great Stories
                    </h1>
                    <p class="md:w-96 text-lg">
                        We are a small company with big dreams and ambitions and
                        an even bigger passion for creativity.
                    </p>
                </div>
                <img class="w-full md:hidden" src="/illustrations.png" alt="illustrations">

                <div class="flex justify-between md:-mt-20 xl:mt-0">
                    <div class="flex justify-between ml-12 3xl:ml-64 3xl:w-2/4 xl:w-3/5 lg:w-7/12 md:w-8/12 md:ml-2">
                        <!-- MD Screen -->
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "absolute right-0 top-0 lg:hidden md:block hidden", "name": "mascot-md" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-24 h-96 lg:hidden md:block hidden", "name": "crown-slime-md" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-36 h-96 lg:hidden md:block hidden", "name": "angel-slime-md" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-44 h-96 lg:hidden md:block hidden", "name": "gameboy-md" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-20 h-96 lg:hidden md:block hidden", "name": "controller-md" })}

                        <!-- XL Screen -->
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "lg:w-36 lg:block md:hidden xl:w-[250px] hidden", "name": "crown-slime" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-28 lg:w-36 lg:block md:hidden xl:w-[250px] hidden", "name": "angel-slime" })}
                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "mt-40 lg:w-36 lg:block md:hidden xl:w-[250px] hidden", "name": "gameboy" })}

                        ${renderComponent($$result, "Vectors", _sfc_main, { "class": "lg:w-36 lg:block md:hidden xl:w-[250px] hidden", "name": "controller" })}
                    </div>

                    ${renderComponent($$result, "Vectors", _sfc_main, { "class": "absolute right-0 lg:top-4 xl:top-28 lg:w-[400px] xl:w-[550px] lg:block md:hidden hidden", "name": "mascot-lg" })}
                </div>
                <div class="md:flex md:justify-between md:items-center 3xl:-mt-64">
                    ${renderComponent($$result, "Vectors", _sfc_main, { "class": "lg:-mt-72 3xl:ml-64 md:-mt-72 md:block hidden", "name": "computer" })}
                    ${renderComponent($$result, "Vectors", _sfc_main, { "class": "-ml-16 md:-mt-[550px] md:block hidden", "name": "pirate-slime" })}

                    <div class="md:w-2/4 md:px-12 lg:space-y-4 space-y-2 xl:mt-48 px-3 pt-8">
                        <span class="uppercase text-xl lg:text-4xl text-indigo-300">We Are</span>
                        <h1 class="uppercase font-bold lg:text-7xl text-4xl">
                            CodeBold
                        </h1>
                        <div class="max-w-md text-justify space-y-6 text-sm lg:text-base">
                            <p>
                                A group of passionate, creative people working
                                together and creating things and overcoming
                                challenges together. We work as a team
                                fearlessly experimenting and moving forward in
                                our endeavors to create things that spark wonder
                                in the world.
                            </p>

                            <p class="text-indigo-300">
                                Our Mission is to tell stories like no one else
                                does. We aim to inspire people to tell their
                                story with the experiences we create while
                                having fun along the way.
                            </p>
                        </div>

                        <a href="#" class="uppercase text-sm text-indigo-300 flex items-center underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold">
                            Learn more about us
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section><section>
        <!-- Mobile View -->
        <div class="bg-[url('./img/cat-image-center.png')] bg-no-repeat w-full h-screen bg-center bg-cover mr-12 relative md:hidden">
            <div class="bg-black bg-opacity-50 absolute h-36 w-full bottom-0 px-3">
                <div class="text-white space-y-1 py-3">
                    <span class="uppercase text-gray-500 font-semibold">Our Work</span>
                    <h1 class="font-semibold text-4xl">Concept Art</h1>
                    <a href="#" class="underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold uppercase w-full pb-1 flex items-center text-white text-xs">
                        See portfolio
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 ml-3 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Desktop View -->
        <div class="bg-[url('./img/cat-image.png')] bg-no-repeat w-full h-screen bg-center bg-cover mr-12 md:block hidden px-3">
            <div class="max-w-5xl mx-auto pt-20">
                <div class="text-white space-y-4 py-3">
                    <span class="uppercase font-semibold text-xl opacity-80">Our Work</span>
                    <h1 class="font-semibold text-7xl">Concept Art</h1>
                    <a href="#" class="underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold uppercase w-full pb-1 flex items-center text-white text-xl">
                        See portfolio
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 ml-3 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>${renderComponent($$result, "Section", _sfc_main$3, { "variant": "white" }, { "default": () => renderTemplate`<div class="max-w-4xl mx-auto py-12 md:py-24 px-3">
            <span class="text-gray-400 uppercase font-medium">Our Services</span>
            <h1 class="md:text-7xl text-gray-600 font-semibold text-4xl">
                What We Do
            </h1>

            <div class="md:flex md:flex-row-reverse justify-between mt-8 items-center">
                <div class="text-brand-primary-blue font-bold text-xl">
                    <p>Comic Art</p>
                    <p>Book Illustration</p>
                    <p>Concept Art</p>
                    <p>Character Design</p>
                    <p>Environment Art</p>
                    <p>Game Assets</p>
                </div>
                <div class="text-gray-500 md:w-[500px] space-y-4 mt-5">
                    <p class="font-light">
                        We develop creative projects like webcomics, game
                        development and also offer game hosting services. We
                        dedicate ourselves to creating and working on projects
                        that we are passionate about and that bring enjoyment
                        not just to ourselves but also to our audiences.
                    </p>
                    <p class="text-sm font-light">
                        We value quality in all that we do. And we aim to
                        provide meaningful solutions and insights to all our
                        clients and partners.
                    </p>
                </div>
            </div>
        </div>` })}` })}`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/index.astro");
var $$file$3 = "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/index.astro";
var $$url$3 = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro$2 = createAstro();
var $$Careers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Careers;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Careers" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$3, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$3, { "variant": "blue" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}` })}`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/careers.astro");
var $$file$2 = "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/careers.astro";
var $$url$2 = "/careers";
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro$1 = createAstro();
var $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "About Us" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$3, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$3, { "variant": "blue" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}` })}`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/about.astro");
var $$file$1 = "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/about.astro";
var $$url$1 = "/about";
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro = createAstro();
var $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Our Work" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$3, { "variant": "White" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$3, { "variant": "white" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}` })}`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/work.astro");
var $$file = "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/pages/work.astro";
var $$url = "/work";
var _page3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));

// .netlify/edge-functions/entry.js
var clientAddressSymbol2 = Symbol.for("astro.clientAddress");
function createExports(manifest) {
  const app = new App(manifest);
  const handler = async (request) => {
    const url = new URL(request.url);
    if (manifest.assets.has(url.pathname)) {
      return;
    }
    if (app.match(request)) {
      const ip = request.headers.get("x-nf-client-connection-ip");
      Reflect.set(request, clientAddressSymbol2, ip);
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { default: handler };
}
var adapter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));
var setup = () => {
};
var StaticHtml = defineComponent({
  props: {
    value: String,
    name: String
  },
  setup({ name, value }) {
    if (!value)
      return () => null;
    return () => h("astro-slot", { name, innerHTML: value });
  }
});
function check2(Component) {
  return !!Component["ssrRender"] || !!Component["__ssrInlineRender"];
}
async function renderToStaticMarkup2(Component, props, slotted) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    slots[key] = () => h(StaticHtml, { value, name: key === "default" ? void 0 : key });
  }
  const app = createSSRApp({ render: () => h(Component, props, slots) });
  await setup();
  const html = await renderToString2(app);
  return { html };
}
var _renderer1 = {
  check: check2,
  renderToStaticMarkup: renderToStaticMarkup2
};
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/careers.astro", _page1], ["src/pages/about.astro", _page2], ["src/pages/work.astro", _page3]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default }), Object.assign({ "name": "@astrojs/vue", "clientEntrypoint": "@astrojs/vue/client.js", "serverEntrypoint": "@astrojs/vue/server.js" }, { ssr: _renderer1 })];
var _manifest2 = Object.assign(deserializeManifest({ "adapterName": "@astrojs/netlify/edge-functions", "routes": [{ "file": "", "links": ["_astro/about.ca335fa7.css"], "scripts": [], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.ca335fa7.css"], "scripts": [], "routeData": { "route": "/careers", "type": "page", "pattern": "^\\/careers\\/?$", "segments": [[{ "content": "careers", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/careers.astro", "pathname": "/careers", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.ca335fa7.css"], "scripts": [], "routeData": { "route": "/about", "type": "page", "pattern": "^\\/about\\/?$", "segments": [[{ "content": "about", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/about.astro", "pathname": "/about", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.ca335fa7.css"], "scripts": [], "routeData": { "route": "/work", "type": "page", "pattern": "^\\/work\\/?$", "segments": [[{ "content": "work", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/work.astro", "pathname": "/work", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "gfm": true, "smartypants": true, "contentDir": "file:///Users/abetsunggo/Desktop/CodeBold/CodeBold/src/content/" }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs", "@astrojs/vue/client.js": "_astro/client.f73aaf30.js", "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue": "_astro/NavBar.e1ec4b07.js", "astro:scripts/before-hydration.js": "" }, "assets": ["/_astro/about.ca335fa7.css", "/android-chrome-192x192.png", "/android-chrome-512x512.png", "/apple-touch-icon.png", "/favicon-16x16.png", "/favicon-32x32.png", "/favicon.ico", "/illustrations.png", "/placeholder-social.jpg", "/site.webmanifest", "/_astro/NavBar.e1ec4b07.js", "/_astro/client.f73aaf30.js", "/_astro/runtime-core.esm-bundler.4445b3a6.js", "/img/cat-image-center.png", "/img/cat-image.png"] }), {
  pageMap,
  renderers
});
var _args = void 0;
var _exports = createExports(_manifest2);
var _default = _exports["default"];
var _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest2, _args);
}
export {
  _default as default,
  pageMap,
  renderers
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
