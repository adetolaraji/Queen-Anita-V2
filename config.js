//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "smithssan6@gmail.com";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d8f7c18771d634b714976.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUR4cVk0bXZmZ3pOUDAvdDZzNU5jb25FVWpaNitIclBRY25FVWRzN2YwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURSWXBYamFrRmd3WS91STUrYUpqOGhCNERkQkpnV0FMaHIybmFaSFZ6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRllHV0ZGYnA4bGNybElUMENzYy83S3NVYlY0Q1ZiYldFNkJrWjRZQzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNVo3SGJmU2RlZzNxSHJmVk1sZ0ZFT3hRRlJZYytZaktMYkJDSjFjVjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBbkpmU0lBZEFkYWZkQkJXcGtGWmExM2xCMmpiY0VHNUY0TU95UmlXMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtSDZ1RWN3cFdkbEJkdDRrc0x0dXB5Qko2NHNGdW1qUjluUmdhRnR6SGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUoxelpiakdxT0lRMi8yeEtxNTN0bGpocWcrZjR0TjQzNnZDdGpSYmRuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGx5WUZuS2VYYitwNytDUDNUTmJycWVwM2lkb2NzSzAzckhWRGxnczNnaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Xd01jV0V2RzRyUnRDT054cmpTWUg1WWxsN3NBZnk1ci9UWGF4djFUNGZKbEVqRXNjVTVlb0U4eUVUN2tiYjZQVkhXcVpVczVzU1ZmWlZub1hLWUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJkQVNMNURHdlJHcEJwQUF2NitzSTFBajRBMHdrTzBRUE1hOTlGWVRhd1hvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkS3RQa3lTeFJTVzBXS0pkRENaS213IiwicGhvbmVJZCI6IjczNjVjZjBhLWQ4MzUtNDYxMi05NGY4LTJhYjY4Mjk2MjU1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3REIwemM5TXVrNDhwRjlzVDg0enhZNkRDejA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjV4RTUyNWtWV1BUR0lpTWs0Y0lGMzJLd3o4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNHNFRBM0dEIiwibWUiOnsiaWQiOiIyMzQ4MTM2ODc2MzU3OjcwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZU5tdFFDRVBuUm03Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuOTIrbXd0RHlZcDFGRVJzVUp0RkVMd2wzNy9RRGU0TTg4ZWlKeVJMM2lnPSIsImFjY291bnRTaWduYXR1cmUiOiJmK2F6WmZuMGVoUGM3M2lESGs2L25URnVnK0syVHcrZTAyMmVRVUJ5dFpiRlJIb3NSMzc5bm5SV01XUkc3NERIRFRSeWxZeEZRcnA1V3YzbEhoVDRCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieFNaUmhaS244RjVoWUpWL21lZmFFQXR4R2lCQ2VNVDlCS3FHdTVNTzFvVXgrUFNaVXp6QkhQZjR0RDkxajR2ZFYranNJdFJ2WWlmamkxdS83dXFuQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM2ODc2MzU3OjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlovZHZwc0xROG1LZFJSRWJGQ2JSUkM4SmQrLzBBM3VEUFBIb2lja1M5NG8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0MDg5NjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWpBIn0="
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
