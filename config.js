/**
   * Recode By RAFF4YOU
   * Contact Me on wa.me/6283823397743
   * Follow https://github.com/RAFF4YOU
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
    zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
    'https://zenzapis.xyz': '0e92565522',
}

// Apikeyyy
bear = 'FreeApikey'

// Other
global.owner = ['6283823397743']
global.ownernomer = "6283823397743"
global.premium = ['6283823397743']
global.packname = '𝐑𝐀𝐅𝐅𝐀 𝐁𝐎𝐓𝐙'
global.author = '𝐑𝐀𝐅𝐅𝟒𝐘𝐎𝐔'
global.sessionName = 'KingOfBear'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done✅',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
