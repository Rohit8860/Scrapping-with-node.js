import axios from "axios";
import xlsx from 'xlsx';

const workbook = xlsx.utils.book_new();
const product = [];

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
};

async function nike_api() {
    let count = 0;
    let done = false;

    while (!done) {
        const response = await axios.get(`https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=4D9D44B77FDD27A1B6DDCCC790735BCF&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(16633190-45e5-4830-a068-232ac7aea82c%2C0f64ecc7-d624-4e91-b171-b83a03dd8550)%26anchor%3D${count}%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D`, {
            headers: headers,
            credentials: 'include'
        });

        console.log(response.status, response.config.url);
        const data = response.data;
        const products = data.data.products.products;

        if (!products || products.length === 0) {
            done = true;
            break;
        }

        products.forEach(element => {
            const title = element.title;
            const price = element.price.currentPrice;
            const color = element.colorDescription;
            const subtitle = element.subtitle;
            const productType = element.productType;
            const urls = "https://www.nike.com/in" + element.url;

            let item = {
                Title: title,
                Price: price,
                SubTitle: subtitle,
                Color: color,
                Product: productType,
                Url: urls
            };
            console.log(item)
            product.push(item);
        });

        count += products.length; // Count ko products ki length se update karen
    }

    if (product.length > 0) {
        const worksheet = xlsx.utils.json_to_sheet(product);
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        xlsx.writeFile(workbook, 'output.xlsx');
        console.log("Excel file successfully created.");
    } else {
        console.log("No data found to write to Excel.");
    }
}

nike_api();