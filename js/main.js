const main = document.querySelector('main')
const searchInput = document.querySelector('#searchInput')
let c
let mySrc


fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res =>{
    if(res.ok) return res.json()
    Promise.reject(error)
})
.then(data =>{
    data.map((val)=>{
        switch (val.name) {
            case 'Bitcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg';  break;
            case 'Ethereum': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg';  break;
            case 'XRP': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg';  break;
            case 'Tether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg';  break;
            case 'Solana': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg';  break;
            case 'BNB': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg';  break;
            case 'USDC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg';  break;
            case 'Dogecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg';  break;
            case 'Cardano': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg';  break;
            case 'Lido Staked Ether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8000.svg';  break;
            case 'TRON': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg';  break;
            case 'Chainlink': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg';  break;
            case 'Avalanche': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg';  break;
            case 'Wrapped Bitcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3717.svg';  break;
            case 'Wrapped stETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/12409.svg';  break;
            case 'Toncoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg';  break;
            case 'Stellar': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg';  break;
            case 'Hedera': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4642.svg';  break;
            case 'Sui': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg    ';  break;
            case 'Shiba Inu': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg';  break;
            case 'WETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2396.svg';  break;
            case 'LEO Token': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/12409.svg';  break;
            case 'Polkadot': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg';  break;
            case 'Litecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg';  break;
            case 'Bitcoin Cash': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11092.svg';  break;
            case 'Bitget Token': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11092.svg';  break;
            case 'Hyperliquid': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32196.svg';  break;
            case 'Uniswap': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg';  break;
            case 'USDS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33039.svg';  break;
            case 'Wrapped eETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28695.svg';  break;
            case 'Ethena USDe': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29470.svg';  break;
            case 'Official Trump': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/35336.svg';  break;
            case 'Pepe': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg';  break;
            case 'NEAR Protocol': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg';  break;
            case 'Ondo': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21159.svg';  break;
            case 'MANTRA': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6536.svg';  break;
            case 'Aave': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7278.svg';  break;
            case 'Aptos': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg';  break;
            case 'WhiteBIT Coin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24760.svg';  break;
            case 'Internet Computer': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8916.svg';  break;
            case 'Monero': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg';  break;
            case 'Bittensor': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg';  break;
            case 'Ethereum Classic': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1321.svg';  break;
            case 'Mantle': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg';  break;
            case 'Dai': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg';  break;
            case 'Cronos': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg';  break;
            case 'VeChain': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3077.svg';  break;
            case 'POL (ex-MATIC)': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28321.svg';  break;
            case 'OKB': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3897.svg';  break;
            case 'Kaspa': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg';  break;
            case 'Algorand': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4030.svg';  break;
            case 'Gate': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4269.svg';  break;
            case 'Render': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5690.svg';  break;
            case 'Filecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg';  break;
            case 'Arbitrum': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg';  break;
            case 'Artificial Superintelligence Alliance': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3773.svg';  break;
            case 'Cosmos Hub': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3794.svg';  break;
            case 'Coinbase Wrapped BTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3717.svg    ';  break;
            case 'Tokenize Xchange': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Ethena': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30171.svg';  break;
            case 'Celestia': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22861.svg';  break;
            case 'Optimism': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11840.svg';  break;
            case 'Raydium': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8526.svg';  break;
            case 'Binance-Peg WETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Stacks': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4847.svg';  break;
            case 'Bonk': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg';  break;
            case 'Lombard Staked BTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33652.svg';  break;
            case 'Immutable': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/10603.svg';  break;
            case 'Theta Network': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg';  break;
            case 'First Digital USD': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/26081.svg';  break;
            case 'Binance Staked SOL': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32882.svg';  break;
            case 'Movement': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32452.svg';  break;
            case 'Jupiter': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29210.svg';  break;
            case 'Injective': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7226.svg';  break;
            case 'Kelp DAO Restaked ETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29242.svg';  break;
            case 'Fasttoken': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22615.svg';  break;
            case 'Worldcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/13502.svg';  break;
            case 'KuCoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2087.svg';  break;
            case 'XDC Network': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2634.svg';  break;
            case 'sUSDS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Lido DAO': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8000.svg';  break;
            case 'The Graph': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6719.svg';  break;
            case 'Rocket Pool ETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Sonic (prev. FTM)': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32684.svg';  break;
            case 'Mantle Staked Ether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Quant': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3155.svg';  break;
            case 'NEXO': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2694.svg';  break;
            case 'Solv Protocol SolvBTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'Flare': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg';  break;
            case 'Sei': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23149.svg';  break;
            case 'Virtuals Protocol': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29420.svg';  break;
            case 'The Sandbox': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6210.svg';  break;
            case 'Marinade Staked SOL': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            case 'dogwifhat': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28752.svg';  break;
            case 'GALA': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7080.svg';  break;
            case 'Usual USD': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32307.svg';  break;
            case 'Onyxcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18679.svg';  break;
            case 'FLOKI': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/10804.svg';  break;
            case 'JasmyCoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8425.svg';  break;
            case 'EOS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
            default: mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';break;
        }
        
        if (String(val.price_change_percentage_24h).search(/-/) != -1) {
            c = 'red'
        }else{
            c = 'green'
        }
        let div =document.createElement('div')
                div.classList.add('bg-[#0d1421]' , 'w-full' , 'min-h-20' , 'flex' , 'justify-between' , 'items-center' , 'content-center' ,'border-b' , 'px-3' , 'md:px-8')
                div.innerHTML=`
                    
                    <div class=" md:w-[30%] lg:w-[25%] flex gap-3 content-center items-center  *:text-white"><span>${val.market_cap_rank}</span><img class="w-[20px] h-[20px]" src=${val.image} alt=""><span>${val.name}</span></div>
                    <span class='text-white md:w-[20%] justify-center flex lg:w-[15%]'>$${val.current_price}</span>
                    <span class="hidden md:flex justify-center md:w-[20%] lg:w-[20%] text-white">$${val.market_cap}</span>
                    <span class="hidden lg:flex md:w-[20%] lg:w-[15%]  justify-center " style='color:${c};' >${val.price_change_percentage_24h}%</span>
            
            
                    <div class='hidden md:flex md:w-[25%] items-center content-center lg:w-[20%] justify-center style='fill:${c}; stroke:${c}; color:${c};  '><img class="w-[100px] " src=${mySrc} alt=""></div>
                    
                `
                main.appendChild(div)
    })
    searchInput.addEventListener('keyup',()=>{
        
        main.innerHTML=`
         <div class="bg-[#0d1421] w-full min-h-20 justify-between px-3 md:px-8 flex items-center content-center border-b">
            <div class=" md:w-[30%] lg:w-[25%] flex gap-3 *:text-white">
                <span>#</span>
                <span>Name</span>
            </div>
            <span class='text-white md:w-[20%] flex lg:w-[15%] justify-center'>Price</span>
            <span class="hidden md:flex md:w-[20%] lg:w-[20%] text-white justify-center">Market Cap</span>
            <span class="hidden lg:flex md:w-[20%] lg:w-[15%] justify-center  text-white">24h %</span>
            <div class='hidden md:flex md:w-[25%] lg:w-[20%] justify-center items-center text-white'>Last 7 Days</div>
        </div>
        `
      
        data.map((val)=>{
            switch (val.name) {
                case 'Bitcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg';  break;
                case 'Ethereum': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg';  break;
                case 'XRP': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg';  break;
                case 'Tether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg';  break;
                case 'Solana': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg';  break;
                case 'BNB': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg';  break;
                case 'USDC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg';  break;
                case 'Dogecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg';  break;
                case 'Cardano': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg';  break;
                case 'Lido Staked Ether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8000.svg';  break;
                case 'TRON': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg';  break;
                case 'Chainlink': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg';  break;
                case 'Avalanche': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg';  break;
                case 'Wrapped Bitcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3717.svg';  break;
                case 'Wrapped stETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/12409.svg';  break;
                case 'Toncoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg';  break;
                case 'Stellar': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg';  break;
                case 'Hedera': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4642.svg';  break;
                case 'Sui': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg    ';  break;
                case 'Shiba Inu': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg';  break;
                case 'WETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2396.svg';  break;
                case 'LEO Token': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/12409.svg';  break;
                case 'Polkadot': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg';  break;
                case 'Litecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg';  break;
                case 'Bitcoin Cash': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11092.svg';  break;
                case 'Bitget Token': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11092.svg';  break;
                case 'Hyperliquid': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32196.svg';  break;
                case 'Uniswap': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg';  break;
                case 'USDS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33039.svg';  break;
                case 'Wrapped eETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28695.svg';  break;
                case 'Ethena USDe': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29470.svg';  break;
                case 'Official Trump': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/35336.svg';  break;
                case 'Pepe': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg';  break;
                case 'NEAR Protocol': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg';  break;
                case 'Ondo': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21159.svg';  break;
                case 'MANTRA': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6536.svg';  break;
                case 'Aave': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7278.svg';  break;
                case 'Aptos': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg';  break;
                case 'WhiteBIT Coin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24760.svg';  break;
                case 'Internet Computer': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8916.svg';  break;
                case 'Monero': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg';  break;
                case 'Bittensor': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg';  break;
                case 'Ethereum Classic': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1321.svg';  break;
                case 'Mantle': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg';  break;
                case 'Dai': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg';  break;
                case 'Cronos': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg';  break;
                case 'VeChain': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3077.svg';  break;
                case 'POL (ex-MATIC)': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28321.svg';  break;
                case 'OKB': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3897.svg';  break;
                case 'Kaspa': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg';  break;
                case 'Algorand': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4030.svg';  break;
                case 'Gate': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4269.svg';  break;
                case 'Render': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5690.svg';  break;
                case 'Filecoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg';  break;
                case 'Arbitrum': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg';  break;
                case 'Artificial Superintelligence Alliance': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3773.svg';  break;
                case 'Cosmos Hub': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3794.svg';  break;
                case 'Coinbase Wrapped BTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3717.svg    ';  break;
                case 'Tokenize Xchange': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Ethena': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30171.svg';  break;
                case 'Celestia': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22861.svg';  break;
                case 'Optimism': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11840.svg';  break;
                case 'Raydium': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8526.svg';  break;
                case 'Binance-Peg WETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Stacks': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4847.svg';  break;
                case 'Bonk': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg';  break;
                case 'Lombard Staked BTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33652.svg';  break;
                case 'Immutable': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/10603.svg';  break;
                case 'Theta Network': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg';  break;
                case 'First Digital USD': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/26081.svg';  break;
                case 'Binance Staked SOL': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32882.svg';  break;
                case 'Movement': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32452.svg';  break;
                case 'Jupiter': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29210.svg';  break;
                case 'Injective': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7226.svg';  break;
                case 'Kelp DAO Restaked ETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29242.svg';  break;
                case 'Fasttoken': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22615.svg';  break;
                case 'Worldcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/13502.svg';  break;
                case 'KuCoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2087.svg';  break;
                case 'XDC Network': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2634.svg';  break;
                case 'sUSDS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Lido DAO': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8000.svg';  break;
                case 'The Graph': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6719.svg';  break;
                case 'Rocket Pool ETH': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Sonic (prev. FTM)': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32684.svg';  break;
                case 'Mantle Staked Ether': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Quant': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3155.svg';  break;
                case 'NEXO': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2694.svg';  break;
                case 'Solv Protocol SolvBTC': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'Flare': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg';  break;
                case 'Sei': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23149.svg';  break;
                case 'Virtuals Protocol': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29420.svg';  break;
                case 'The Sandbox': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6210.svg';  break;
                case 'Marinade Staked SOL': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                case 'dogwifhat': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28752.svg';  break;
                case 'GALA': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7080.svg';  break;
                case 'Usual USD': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32307.svg';  break;
                case 'Onyxcoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18679.svg';  break;
                case 'FLOKI': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/10804.svg';  break;
                case 'JasmyCoin': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8425.svg';  break;
                case 'EOS': mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';  break;
                default: mySrc = 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg';break;
            }
            if (String(val.price_change_percentage_24h).search(/-/) != -1) {
                c = 'red'
            }else{
                c = 'green'
            }
            if (val.name.toLowerCase().indexOf(searchInput.value.toLowerCase())!= -1) {
                let div =document.createElement('div')
                div.classList.add('bg-[#0d1421]' , 'w-full' , 'min-h-20' , 'flex' , 'justify-between' , 'items-center' , 'content-center' ,'border-b' , 'px-3' , 'md:px-8')
                div.innerHTML=`
                   
                    <div class=" md:w-[30%] lg:w-[25%] flex gap-3 content-center items-center  *:text-white"><span>${val.market_cap_rank}</span><img class="w-[20px] h-[20px]" src=${val.image} alt=""><span>${val.name}</span></div>
                    <span class='text-white md:w-[20%] justify-center flex lg:w-[15%]'>$${val.current_price}</span>
                    <span class="hidden md:flex justify-center md:w-[20%] lg:w-[20%] text-white">$${val.market_cap}</span>
                    <span class="hidden lg:flex md:w-[20%] lg:w-[15%]  justify-center " style='color:${c};' >${val.price_change_percentage_24h}%</span>
            
            
                    <div class='hidden md:flex md:w-[25%] items-center content-center lg:w-[20%] justify-center style='fill:${c}; stroke:${c}; color:${c};  '><img class="w-[100px] " src=${mySrc} alt=""></div>
                    
                `
                main.appendChild(div)
            }
            
        })
    })
    
})
.catch(error => console.log(error))