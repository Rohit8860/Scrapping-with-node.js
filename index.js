import { error } from "console";
import express from "express";
var app = express();
import mongoose from "mongoose";
import path from "path";
import chalk from "chalk";

const __dirname = path.resolve();

// const cookies = {
//     bm_mi: 'E0864313EEB3DB1C00F72DE0570E0623~YAAQFdjIFzzu/qWPAQAAexUfyRfNAS7CDWdLEBE2ZWBVE0zc+PY62wWITBaxUIJochEepS6Yn3MLi9Xc4ukpUbLD1nHYXKd7Yhlt8oNlbdoQhZjEjbm5AIvNGXlhExAclTD3lu74uSaqCQNHeznPMoITUp6kVmCo6Ezq6gFJcDdR08gb51gBZ0w03g+pIORikSbzxuy7dm4+bqe0pro1I3K9SKeJ1PvEjKbiK0c2BfSirdT9MlJlUJye4WH/ih9ybvtcqWpUnQtwyhsjKwt9a3naFcDTkzb39cj4AlCPqxwq8iZDtTs17qakDKH/OjLTnNfj/LLw7yG2Gig=~1',
//     akavpau_chelseafcwr1: '1717066508~id=0f1bf56cce2cbae70f6f7d0ba17ea8aa',
//     _abck: '70F4CA3FDB25FCDF378606D243954802~-1~YAAQFdjIFzru/qWPAQAAexUfyQu+duqnJMUA433CAc11Qm6Vk8TfVeEBSVyVryfY6B7OyJGgwbGZYxexmxj+sMGxc42l0HWrcWi9+iSPHFRtgreEIbS7F/+r7ydym6TKd+Vly8j64vZQm8JxsDogCQtBxNXyBDJ568NEo8wZJUeig7Bbh9SE0eDRCP9KeTijCiPRUsKZdKfzpcImy06LzC+YpWfok976KJWrxOjk8q58UQHGjBox6Osyqrocc1WZt3IPFMHbGgiZ1+Pz1sSAZI3VQMYuTye2Ej90A4qA/W9zfetTl/dZBH5UbzyF4P8HrFj4Z8bKLDyyst8nWNGoQE0HTBZb6yxoBn06JD44CE2eEoBsHhf6f7noJxSsmXOLTORawlKeCGwcznDKgVZS~-1~-1~-1',
//     ak_bmsc: 'DF0C5BC883C15D2AAEA81845DD0BA448~000000000000000000000000000000~YAAQFdjIFzvu/qWPAQAAexUfyRdDX43qq/5LVIT2mABCHc4OOs8UKftoXeNQV2L3ntazNGhRLSl6RuCgsJgqHhO//76pbeG/EqzCZ1GuF3MO3eDqN6DUN3McbK0n9dTZE3DgxCrp8pwfZnhjfI+JnnnF0b8muv/yHsaLhIex1ZZ8mc3O9hGuN0cFAd7YoG6zBaHZY7WHIu1TTD4EYSh6SEjimpbrRsqbvydMdMfLnpKseGbCX1rCRoE/HXjRMhiZxFPiUBT09AnjXBTDwTIqmej4vKDTcxsaG01z6UdRZD4aZ9Dwo8Xr+fSNUWUDD+QjcNz1rHtkwaGWVIc6PcQdximFEy+y1VUugrQ8+GL9/rb6QnSBzE8tHqlorUF71U68FcXVL5iCMveswQiVHIsv7LIi1MVFmfQMNzzQRsIH',
//     bm_sz: '121CF1B558E5712CD89A733A447B4A83~YAAQFdjIFz3u/qWPAQAAexUfyRcqNq4b081mOvmi2pl2vkBMeWmcFrl87K2ENyIep2J5tgRs0Xgm2xxBnvSreGv+FSMN7mI84Ukv5GCwS1sw4XIX/wV224QupY4aqgyofOJJq6Y747Nh2b1C2V0ufv6bOFutL3cvA1STXDG6IwFaNTzYGPYSf7xDHoFY/UNpRvhKKEhXhI0ZwSaZz1VgB4rHXORW8kkWPcuK7ad0n50spHe7XgqvCQ5ikGspBxaOBN8NpbIFSyIRfRIgiNh3vcVq4Idz9qRSeL005FMXlKgyaZ8YMzeZDFxSJqa0/yShoTUqpOCPW48ljjS18x6vFOmJnfNUpwDsyUrS1InaBHwHusbzTzBDqIhvcGdRKmJpAh+fKtg2eT1AvmUGh765YOuKI1u3giz2jneNqS6l6f+2VUECjuM=~3294265~4273730'
//   }
// const list = [];
// for (const key in cookies){
//     if (cookies.hasOwnProperty(key)){
//         var final = `${key}=${cookies[key]}`
//     }   list.push(final)
// }
// console.log(list.join(";"))


// console.log(chalk.red.bgGreen.bold('This is a red message with a green background and bold text'));

// console.log(chalk.yellow.dim('This is a dimmed yellow message'));

// console.log(chalk.blue.italic('This is a blue italic message'));

// console.log(chalk.green.underline('This is a green underlined message'));

// console.log(chalk.inverse('This is an inverted message'));

// console.log(chalk.strikethrough('This is a strikethrough message'));

class Chelseafc{
    constructor(){
        console.log("START BOT");
        this.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-User': '?1',
            'Priority': 'u=1'
        };
        this.cookies = {}
    };

    async cookie_funtion(){
        const list = []
        for (const key in this.cookies){
            if (this.cookies.hasOwnProperty(key)){
                var final = `${key}=${this.cookies[key]}`
                   list.push(final)
            }
        };
        this.headers['Cookie'] = list.join(";")
    }    
    
    async filter_cookie(response_headers){
        try{
            const _sessionid= response_headers.match(/sessionid=([^;]*)/)[1];
            // console.log("sessionid==-",_sessionid)
            Object.assign(this.cookies,{sessionid:_sessionid})
        }catch{
            console.log("No sessionid found")
        }
        try {
            const bm_mi_ = response_headers.match(/bm_mi=([^;]*)/)[1];
            // console.log("bm_mi_", bm_mi_);
            Object.assign(this.cookies, {bm_mi:bm_mi_});
        } catch (error) {
            console.error("bm_mi not found cookie");
            };
        try {
            const akavpau = response_headers.match(/akavpwr_chelseafcwr1=([^;]*)/)[1];
            // console.log("akavpau", akavpau);
            Object.assign(this.cookies, {akavpwr_chelseafcwr1:akavpau});
        } catch (error) {
            console.error("akavpau not found cookie");
            };
        try{
            const akavpau_chelseafcwr1_= response_headers.match(/akavpau_chelseafcwr1=([^;]*)/)[1];
            // console.log("akavpau_chelseafcwr1=",akavpau_chelseafcwr1_);
            Object.assign(this.cookies,{akavpau_chelseafcwr1:akavpau_chelseafcwr1_});
        }catch(error){
            console.error("NOT");
        }
        try {
            const bm_sv_ = response_headers.match(/bm_sv=([^;]*)/)[1];
            // console.log("bm_sv", bm_sv_);
            Object.assign(this.cookies, {bm_sv:bm_sv_});
        } catch (error) {
            console.error("bm_sv not found cookie");
        };
        try {
            const _abck_ = response_headers.match(/_abck=([^;]*)/)[1];
            // console.log("abck : ", _abck_);
            Object.assign(this.cookies, {_abck:_abck_});
        } catch (error) {
            console.error("abck :");
            };
        try {
            const ak_bmsc_ = response_headers.match(/ak_bmsc=([^;]*)/)[1];
            // console.log("ak_bmsc : ", ak_bmsc_);
            Object.assign(this.cookies, {ak_bmsc:ak_bmsc_});
        } catch (error) {
            console.error("ak_bmsc :");
            };  
        try {  
            const bm_sz_ = response_headers.match(/bm_sz=([^;]*)/)[1];
            // console.log("bm_sz : ", bm_sz_);
            Object.assign(this.cookies,{bm_sz:bm_sz_});
        } catch (error) {  
            console.error("bm_sz :");
        };
        this.cookie_funtion()
    }


    async first_request(){
        const response = await fetch('https://chelseafc.3ddigitalvenue.com/login',{
            headers:this.headers
        });
        if(response.ok){
            console.log(chalk.green("Response code",response.status));
            const response_headers = response.headers.get('set-cookie');
            this.filter_cookie(response_headers)
            console.log(chalk.red.bgGreen.bold('This is a red message with a green background and bold text'));
            this.logged();
        }else{
            console.error("Error : ",error);
        };
    };

    async logged(){
        const response = await fetch('https://chelseafc.3ddigitalvenue.com/friends-family/auth/logged/',{
            headers:this.headers
        });
        if(response.ok){
            console.log(chalk.green("Response code",response.status))
            const js = await response.json();
            const response_headers = response.headers.get('set-cookie')
            console.log(js.csrf)
            this.filter_cookie(response_headers)

        }else{
            console.log("RESPONSE BAD")
        }
        console.log(this.cookies)
    }

}


const bot = new Chelseafc();
bot.first_request()