import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewItem from "./components/NewItem";
import "./App.css";

export default class App extends Component {
  render() {
    let articles = [
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Rebecca Bellan",
        "title": "Electric Hydrogen is the green hydrogen industry's first unicorn | TechCrunch",
        "description": "Investors have historically been skeptical of green hydrogen. High production costs, expensive infrastructure builds, competition with batteries and",
        "url": "https://techcrunch.com/2023/10/03/electric-hydrogen-is-the-green-hydrogen-industrys-first-unicorn/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/Small-cell-Testing-in-EH2-Natick-Accelerated-Lifetime-Testing-Facility-2.jpg?resize=1200,802",
        "publishedAt": "2023-10-03T21:37:19Z",
        "content": "Investors have historically been skeptical of green hydrogen. High production costs, expensive infrastructure builds, competition with batteries and minimal government support have made the green hyd… [+3011 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Kirsten Korosec",
        "title": "In latest Cruise incident, video shows pedestrian struck by human-driven car, then run over by robotaxi | TechCrunch",
        "description": "The San Francisco Police Department is investigating an October 2 incident that left a woman stuck underneath a Cruise robotaxi after being hit by a",
        "url": "https://techcrunch.com/2023/10/03/in-latest-cruise-incident-video-shows-pedestrian-struck-by-human-driven-car-then-run-over-by-robotaxi/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/Cruise_700848.jpg?resize=1200,800",
        "publishedAt": "2023-10-03T21:26:45Z",
        "content": "The San Francisco Police Department is investigating an October 2 incident that left a woman stuck underneath a Cruise robotaxi after being hit by a human-driven vehicle.\r\nVideo captured by Cruise an… [+4397 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Sarah Perez",
        "title": "Spotify to include a selection of 150K audiobooks with its Premium subscription | TechCrunch",
        "description": "Spotify today unveiled what's next for the future of its audiobooks service. At an event hosted in its New York offices on Tuesday afternoon, the company",
        "url": "https://techcrunch.com/2023/10/03/spotify-to-include-a-selection-of-audiobooks-with-its-premium-subscription/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/spotify-daniel-ek.jpg?resize=1200,688",
        "publishedAt": "2023-10-03T20:50:54Z",
        "content": "Spotify today unveiled what’s next for the future of its audiobooks service. At an event hosted in its New York offices on Tuesday afternoon, the company announced a new business model where it will … [+5093 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Amanda Silberling",
        "title": "How an AI deepfake ad of MrBeast ended up on TikTok | TechCrunch",
        "description": "AI deepfakes are getting so good that a fraudulent MrBeast ad slipped past TikTok's ad moderation technology to end up on the platform. In the ad, the",
        "url": "https://techcrunch.com/2023/10/03/how-an-ai-deepfake-ad-of-mrbeast-ended-up-on-tiktok/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/mrbeast-squid-game-remake-1.jpg?resize=1200,720",
        "publishedAt": "2023-10-03T20:27:41Z",
        "content": "AI deepfakes are getting so good that a fraudulent MrBeast ad slipped past TikTok’s ad moderation technology to end up on the platform.\r\nIn the ad, the massively influential creator appeared to be of… [+2762 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Aria Alamalhodaei",
        "title": "7 companies to provide NASA with commercial satellite imagery under $476M contract | TechCrunch",
        "description": "Umbra, Capella Space and GHGSat are among the seven companies that will provide NASA with commercial satellite imagery.",
        "url": "https://techcrunch.com/2023/10/03/7-companies-to-provide-nasa-with-commercial-satellite-imagery-under-476m-contract/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/niagara-falls-umbra.jpeg?resize=1200,807",
        "publishedAt": "2023-10-03T20:14:16Z",
        "content": "Umbra, Capella Space and GHGSat are among the seven companies that will provide NASA with commercial satellite imagery, part of an acquisition program that has a maximum potential value of $476 milli… [+1664 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Jagmeet Singh",
        "title": "Krafton India launches gaming incubator to expand local ecosystem | TechCrunch",
        "description": "Krafton India has launched a gaming incubator in the South Asian nation as it seeks to expand the local ecosystem and support the domestic talent looking Krafton, the South Korean gaming giant that is known for PUBG and BGMI titles, has launched a gaming incu…",
        "url": "https://techcrunch.com/2023/10/03/krafton-india-gaming-incubator/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/krafton-india-ceo-sean-hyunil-sohn.jpeg?w=1024",
        "publishedAt": "2023-10-03T19:29:07Z",
        "content": "Krafton India has launched a gaming incubator in the South Asian nation as it seeks to expand the local ecosystem and support the domestic talent looking to enter the fast-growing gaming market.\r\nCal… [+5336 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Aisha Malik",
        "title": "You can now add PayPal and Venmo credit or debit cards to your Apple Wallet | TechCrunch",
        "description": "PayPal announced today that users can now add their PayPal and Venmo credit or debit cards to Apple Wallet.",
        "url": "https://techcrunch.com/2023/10/03/you-can-now-add-paypal-venmo-credit-debit-cards-apple-wallet/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-1154091538.jpg?w=1024",
        "publishedAt": "2023-10-03T19:20:36Z",
        "content": "PayPal announced today that users can now add their PayPal and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps usin… [+1251 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Darrell Etherington",
        "title": "The Xencelabs Pen Display 24 is a terrific alternative to Wacom's big-screen drawing tablets | TechCrunch",
        "description": "For a long time, if you wanted something like the Wacom Cintiq Pro 24 but didn't want to spend quite so much money, you were pretty much out of luck. The",
        "url": "https://techcrunch.com/2023/10/03/xencelabs-pen-display-24-review/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/Xencelabs-Pen-Display-24-6.jpg?w=1200",
        "publishedAt": "2023-10-03T19:14:16Z",
        "content": "For a long time, if you wanted something like the Wacom Cintiq Pro 24 but didn’t want to spend quite so much money, you were pretty much out of luck. The Xencelabs Pen 24, released earlier this year,… [+6103 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Sarah Perez",
        "title": "U.S. lawmakers ask TikTok about its ByteDance ties after recent exec transfers between the companies | TechCrunch",
        "description": "U.S. lawmakers have written a letter to TikTok questioning its independence from its Chinese parent company ByteDance, in the wake of a recent report from",
        "url": "https://techcrunch.com/2023/10/03/u-s-lawmakers-ask-tiktok-about-its-bytedance-ties-after-recent-exec-transfers-between-the-companies/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/11/GettyImages-1177990253.jpg?resize=1200,852",
        "publishedAt": "2023-10-03T18:56:56Z",
        "content": "U.S. lawmakers have written a letter to TikTok questioning its independence from its Chinese parent company ByteDance, in the wake of a recent report from The Wall St. Journal which noted that severa… [+3136 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Manish Singh",
        "title": "Sam Altman backs teens' AI startup automating browser-native workflows | TechCrunch",
        "description": "Sam Altman, Peak XV, Eric Schmidt's trust, and Daniel Gross and Nat Friedman's AI grant are among backers of an AI startup, founded by two teenagers, Sam Altman, Peak XV, Eric Schmidt's trust, and Daniel Gross and Nat Friedman's AI grant are among backers of …",
        "url": "https://techcrunch.com/2023/10/03/induced-ai/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/induced-ai.jpg?resize=1200,900",
        "publishedAt": "2023-10-03T18:31:56Z",
        "content": "Sam Altman, Peak XV, Eric Schmidt’s trust, and Daniel Gross and Nat Friedman’s AI grant are among backers of an AI startup, founded by two teenagers, that’s aiming to assist businesses in automating … [+3416 chars]"
      }
    ];

    return (
      <>
        <NavBar />
        <div className="mt-5">
          <div className="container">
            <div className="new-item-list">
              {articles.map((article, i) => (
                <div className="news-item" key={i}>
                  <NewItem title={article.title} description={article.description} url={article.url} img_url={article.urlToImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
