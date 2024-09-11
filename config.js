//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adetolaraji610@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d8f7c18771d634b714976.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348136876357"
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlpYlZvbUN2Y0RmS2RwNFo0aWVvSElsRHdIOGt6ZldJejg0a0x5ZE1XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRThjbWZSNDFkVUdYaWlqb0o3dEc2MSthWkRuR1d3c2kyd090b0RqcWhqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RXhQV29CamZBZkdmMGtYSHo3WFpkMTRTbXZwN1prUU05YjExZzJKdGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsWXl6OFV1T1FTMVFXcmFLRDR0aGdBR2oyZVJtTGRWQXlzMHcyWG9Kd2s4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFa3NDeE1pQUk5enVPMHBPVGVTUXBSTUg3NUR0TmN6eUN0U3BHMEJ0Mnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlduMmNTK1JGN0J3Tkc1Q3pDdTlGKzQ0cFpWRUgrL0pHbEZJemQyRzhzUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hQMVYxb2ZlL0Y4UGFVRlZ2VWZLYTl1WE5FY0h5cGU4Y2JUL1dWS2NGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE4zRnI0MzNtaDZIOU93SlNOZENuazlnYXAvdTRGdEpsS3lhM01VMXNrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFYYkxNQmxvWU1TOXNFRms5WmNqMmNjTmpNVTMyY0M0WTY1T2JpSURHRGJjaXo5QTVTM0F0WG1xY3hCMm0vaWdnOVIwU1k3d0swdm9LazJxTnVMdUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IjVHV0N2VzhQY0VmWCtpa1R1L2piUmRJWTdCN25McmxOTkw1OThGUlozU0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpGM3UxbzRlUWNTZF9JcjZWT3I3WWciLCJwaG9uZUlkIjoiMDg0MzJmZGUtNjg0OC00ZjllLWJmODQtZGM3MjM3NWEyNGM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhJZ2hoc2psb1FNYTY3YytlS0NNV0hKWGN3Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONk5rYkpFenlvWkRrMGpxTThDc1NGRm5TMEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjRNQVJURzUiLCJtZSI6eyJpZCI6IjIzNDgxMzY4NzYzNTc6NjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PTm10UUNFTkRJaGJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im45Mittd3REeVlwMUZFUnNVSnRGRUx3bDM3L1FEZTRNODhlaUp5UkwzaWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkN3a2FpVlkwbjJDK1VmQmZxUjA1UlFlRTZQbjEwcDlyNVJNT0QzN1d2Y2M5TWdGRk5YVDhZalY0RGMzMmRFbDNvTlVrTmdwdGVsb2d0TXBuRnp0d0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiWk01aGxEQUtlaTI4K0tWMUtkdzFkZHBxLzJEMEdsNVBnV29BaEc0aHRkVzZQaTRMQWprUllmT2pEV0ptb21hZkExYTBRbjFPN1ZjNE1lc1V3SHZDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzY4NzYzNTc6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWi9kdnBzTFE4bUtkUlJFYkZDYlJSQzhKZCsvMEEzdURQUEhvaWNrUzk0byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjA0NzMyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFaTMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  author: process.env.PACK_AUTHER || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  packname: process.env.PACK_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  botname: process.env.BOT_NAME || "🅲🅴🅽🆃",
  ownername: process.env.OWNER_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
