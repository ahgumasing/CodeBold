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

// .netlify/edge-functions/chunks/pages/all.3842dd61.mjs
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
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

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
var SITE_TITLE = "CodeBold";
var SITE_DESCRIPTION = "Welcome to CodeBold!";
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
    </body></html>`;
}, "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/layouts/Layout.astro");
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/svg/Logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Link.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-brand-secondary-gray md:text-sm lg:text-base" }, _attrs))}><div class="max-w-5xl mx-auto py-8"><div class="md:flex items-center border-t-2 pt-8 px-2">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "w-28 h-full md:block hidden",
        name: "vertical-gradient"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "w-32 h-full md:hidden",
        name: "horizontal-gradient"
      }, null, _parent));
      _push(`<div class="md:flex w-full justify-end md:space-x-10 pr-12 pt-8 md:pt-0"><div><h3 class="uppercase text-gray-500 font-semibold"> Site Map </h3><ul class="py-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
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
      _push(ssrRenderComponent(_sfc_main$3, { class: "underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold uppercase w-24 pb-1 flex items-center text-brand-primary-light-blue mt-7" }, {
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
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ButtonLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var _sfc_main = /* @__PURE__ */ defineComponent({
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
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "py-3 lg:px-3 flex justify-between items-center border-b border-gray-200 border-opacity-30" }, _attrs))}>`);
      if (unref(hide)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$4, {
          name: "dark-horizontal-gradient-large",
          class: "md:block hidden"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, {
          name: "dark-horizontal-gradient-small",
          class: "md:hidden block"
        }, null, _parent));
        _push(`<div class="space-x-8 hidden md:block">`);
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$1, { class: "w-48 font-medium text-sm" }, {
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
        _push(ssrRenderComponent(_sfc_main$4, {
          name: "white-large",
          class: "md:block hidden"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, {
          name: "white-small",
          class: "md:hidden block"
        }, null, _parent));
        _push(`<div class="space-x-8 hidden md:block">`);
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$1, { class: "w-48 font-medium text-sm" }, {
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
        _push(ssrRenderComponent(_sfc_main$4, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
          _push(ssrRenderComponent(_sfc_main$3, { variant: "white" }, {
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
        _push(ssrRenderComponent(_sfc_main$1, { class: "w-full py-3 font-medium text-sm" }, {
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
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var $$Astro$3 = createAstro();
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Home" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">
                We Tell Great Stories
            </h1>
            <p>
                We are a small company with big dreams and ambitions and an even
                bigger passion for creativity.
            </p>
        </div>` })}${renderComponent($$result, "Footer", _sfc_main$2, {})}` })}`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Careers" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}${renderComponent($$result, "Footer", _sfc_main$2, {})}` })}`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "About Us" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$5, { "variant": "blue" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}${renderComponent($$result, "Footer", _sfc_main$2, {})}` })}`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Our Work" }, { "default": () => renderTemplate`${renderComponent($$result, "Section", _sfc_main$5, { "variant": "White" }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", _sfc_main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue", "client:component-export": "default" })}` })}${renderComponent($$result, "Section", _sfc_main$5, { "variant": "white" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="text-white py-12">
            <h1 class="text-5xl font-sans font-medium">we are bold codebold</h1>
        </div>` })}${renderComponent($$result, "Footer", _sfc_main$2, {})}` })}`;
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
var _manifest2 = Object.assign(deserializeManifest({ "adapterName": "@astrojs/netlify/edge-functions", "routes": [{ "file": "", "links": ["_astro/about.dcc2bd96.css"], "scripts": [], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.dcc2bd96.css"], "scripts": [], "routeData": { "route": "/careers", "type": "page", "pattern": "^\\/careers\\/?$", "segments": [[{ "content": "careers", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/careers.astro", "pathname": "/careers", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.dcc2bd96.css"], "scripts": [], "routeData": { "route": "/about", "type": "page", "pattern": "^\\/about\\/?$", "segments": [[{ "content": "about", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/about.astro", "pathname": "/about", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/about.dcc2bd96.css"], "scripts": [], "routeData": { "route": "/work", "type": "page", "pattern": "^\\/work\\/?$", "segments": [[{ "content": "work", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/work.astro", "pathname": "/work", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "gfm": true, "smartypants": true, "contentDir": "file:///Users/abetsunggo/Desktop/CodeBold/CodeBold/src/content/" }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs", "@astrojs/vue/client.js": "_astro/client.f73aaf30.js", "/Users/abetsunggo/Desktop/CodeBold/CodeBold/src/components/NavBar.vue": "_astro/NavBar.2af30dea.js", "astro:scripts/before-hydration.js": "" }, "assets": ["/_astro/about.dcc2bd96.css", "/android-chrome-192x192.png", "/android-chrome-512x512.png", "/apple-touch-icon.png", "/favicon-16x16.png", "/favicon-32x32.png", "/favicon.ico", "/placeholder-social.jpg", "/site.webmanifest", "/_astro/NavBar.2af30dea.js", "/_astro/client.f73aaf30.js", "/_astro/runtime-core.esm-bundler.4445b3a6.js"] }), {
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
