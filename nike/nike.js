import axios  from "axios";
import cheerio from "cheerio";
import xlsx from 'xlsx';



const workbook = xlsx.utils.book_new();
const product = [];


const cookies = {
    'AnalysisUserId': '104.90.5.71.29001716544297501',
    'anonymousId': '4D9D44B77FDD27A1B6DDCCC790735BCF',
    '_abck': 'E42D504E497B010E5E20037AC1498643~-1~YAAQ3AVaaJ7M2KmPAQAACSFQuQso8th2gEZCkJ4AFv+fms6wEAK08BWCQc6YS448O+6b561BPSqnTOmT+sjmqedlDNEgUAoZV3B7fggmxLMA/9BfAGkbKCxS8wLL3KxLkdY5VKx6+sqoIk/YolB/dmrWdVxZyOLCNbAwDxWg18ujrYbZpD2pQhPVzxvSEuWgYH5hxko9yTeYn3wvUeWoIqvGpLJJdh+0I9lKvW+9gWZqPIuJe7YurL588iwnrc3VzH3GDC0vdWfeYUi2QvGx7uSQWUDTpWH5LIaeqUoIE5xHVKZpGuxbQNW83VBxqB6rHbidf2ZH9ZIrwfQgW6OCvKfaQ+wrgL3JoiIV0WUPI8UM1bKcFfSNLK1B+c+31egwXd5yxfHbgJdlsosfW56AAu3KQUR54kj6EC4C1YYcK6+R1hqRvAyA+MMZ2NDl83AihwMebTg3ARlYEb+O9OME9Du2oN6TLPcHf3lEuL5gjScYRRywUUK1jx3dceX6l87MShVWtRKIMaVZKBQRl42VJFTRWMBIu+JkDjOhK1pYWgHHsvFW6b0+bRLJhPE1BvQ5/A0tvWucZhjqseJ7Q2GEx8c=~-1~||0||~-1',
    'AMCV_F0935E09512D2C270A490D4D%40AdobeOrg': '1994364360%7CMCMID%7C00401404669964151640174085947396508433%7CMCAID%7CNONE%7CvVersion%7C3.4.0%7CMCIDTS%7C19868%7CMCOPTOUT-1716554820s%7CNONE',
    'mbox': 'session#77b0a1b12b969fc1d38d63de1342a87d#1716553926|PC#1d254f6efcb27cd951e9c57b4f909eaf.41_0#1779796867',
    'geoloc': 'cc=IN,rc=DL,tp=vhigh,tz=GMT+5.50,la=28.60,lo=77.20',
    'ak_bmsc': '88F40A2A37FDFD0856B577B3D00B3569~000000000000000000000000000000~YAAQVQVaaE6rqLiPAQAA4RUDuRfzrtsotm48ZLOt1L2/DcL76I7hbf3muxIyWshyv64EPCBRoe4gXEx8eToEnMtLx8XoxSXuqG4JVdaAwPxabTMl7i0G5LpBY0ccQ8f+AHrE3lrbhlV9PRUOjuLs/as4mVYvayuDV/agssZ2PbkRLNot83eF9drqV/9PMifUorA6tNN/WF3FrtdAc6l8HKa2v9sQTmsXNZDM9dCTkBXs5kzfr0YxBsw5lATuwoJqLKZ/Md6z03Scms1YtgrC6kbIVT3Fm7HeLAtayeAnLZeUWy9TrF2gFaGHMPB+6ZW6sYeh1tNv0TEoBB46kLKXmd5FvQjIfYcGaWSh9LOh+tlPgmRgvAK0BEkjKpEp8dTlANPqW2QqVnc=',
    'bm_sz': '86CB6FCF1657396946F619655F8EE610~YAAQHAVaaDU7MI2PAQAAJxRQuRe9JC07229L6xWEzG2CnAHQVKy5kAv2dSw/snfSM7VcJOFA0m7vzdpK6BBnL4pJnjV0GnJ6nLNtyssSeyc0ZNfgVcAObo8vBUuDbVrg10wbfBQ7podPvh99iwX6cSgVkSSvQGOP8tgcWMePlhw+SkxEGqH3aEn3Z2pM1INFT5y+LxGCCJTGnwRt4GMRLABee7F+9xla7I8QNs83nuKiVGvBKXj1BKjRDIxHwoImaGzNd5mfZIL3SN5Plvn6aPflI5Nq5CXb+hm0E97InODdRPVR0djYOffIAU3D5aPV4XnAaODKUtSYJZW/7Vmo30fC3pgxXd85M13FmzxjFYubwh/9p8eEyiPAlCq4y7H8sn5u/T44EXEOrFIKvFGvrB2iR7QxeJXg2cqufH7RAG0SNW7lDHTR0Xopnb+DoYu1KAgAK9s=~3158342~4538694',
    'bm_sv': '3CCEECCD28F73DD2FC9014C22D9EB7F3~YAAQ3AVaaJ/M2KmPAQAACSFQuRegm1BKIz5NZqSJNzp0fZNaWKDOCQ31WU0AH8KQ/C2pk4ybsz9+ELxUvl4X0lrKoM1cn9ulIaZ8pAsMTTRDNcaghrQ+M905NNQP3xWs2w/aaOLsl03360HmMoHAQM0dfZ1JZ4ZAq6fuTpJW455fM1aes5t2Z6SM7zn7Hna2+A+c/gQX5cw8DJ8OtTN+GuIqwS3pybdbasMtEo09cogS+FM/IkJJyO481HmwhCw=~1',
    'KP_UIDz-ssn': '0bkwwh08SK1ta7JHqVS8afa662BduUCFGEAZw0hPeFjm2RQO139acYUQypBDOn4xnXScVTSQh7qPx2muhySAaBYdEjj2S862pq7vUrNx5YfH5iV2e2rUrHUY9CqpPI2v8lDgIRMIHV4gdqauB36JZ3OKXmMgcjmnhHY9v6H',
    'KP_UIDz': '0bkwwh08SK1ta7JHqVS8afa662BduUCFGEAZw0hPeFjm2RQO139acYUQypBDOn4xnXScVTSQh7qPx2muhySAaBYdEjj2S862pq7vUrNx5YfH5iV2e2rUrHUY9CqpPI2v8lDgIRMIHV4gdqauB36JZ3OKXmMgcjmnhHY9v6H',
    'ppd': 'pw|nikecom>pw>men_shoes',
    'AKA_A2': 'A',
}


const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Referer': 'https://www.nike.com/',
    'Origin': 'https://www.nike.com',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'Priority': 'u=4',
    'TE': 'trailers'
  }

async function nike_api(){
    let count = 0;
    const done = false
    while (!done){
        const response = await axios.get(`https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=4D9D44B77FDD27A1B6DDCCC790735BCF&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(16633190-45e5-4830-a068-232ac7aea82c%2C0f64ecc7-d624-4e91-b171-b83a03dd8550)%26anchor%3D${count}%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D`,{
            headers : headers,
            credentials:'include'
        });
        console.log(response.status,response.url)
        console.log(response.data);
        console.log("Count no ------------>",count)
        const data = await response.data
        const js = data.data.products.products;
        console.log(js)
        if (!js){
            dont = true;
            break;
        }
        count += 1

        js.forEach(element => {
            const title = element.title
            // console.log(title)
            const price = element.price.currentPrice
            // console.log(price)
            const color = element.colorDescription
            // console.log(color)
            const subtitle = element.subtitle
            // console.log(subtitle)
            const productType = element.productType
            // console.log(productType)
            const urls = "https://www.nike.com/in"+element.url.split("}")[1]
            // console.log(urls)
            
            let item = {};
            item['Title'] = title
            item['Price'] = price
            item['SubTitle'] = subtitle
            item['Color'] = color
            item['Product'] = productType
            item['Url'] = urls
            // console.log(item)
            product.push(item)
        });

    const worksheet = xlsx.utils.json_to_sheet(product);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, 'output.xlsx');
    console.log("Excel file successfully created.");
}
}
nike_api();
xlsx.writeFile(workbook, 'output.xlsx');
console.log("Excel file successfully created.");

// async function test(){
//     try{
//         const response = await axios.get('https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=4D9D44B77FDD27A1B6DDCCC790735BCF&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(16633190-45e5-4830-a068-232ac7aea82c%2C0f64ecc7-d624-4e91-b171-b83a03dd8550)%26anchor%3D24%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D',{
//             headers:headers,
//             cookies:cookies
//         })
//         console.log(response.status)
//         console.log(response.data)
//         const productsArray = response.data.data.products.products;
//         console.log(productsArray);
//     } catch (error){
//         console.error('Error making GET request:', error)
//     }
// }

// test();