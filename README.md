## About 

This is a simple project that enables you to:

1. Get transaction details for an Ethereum account on mainnet. This application is able to get transaction details for all ERC 20 tokens (Not just ETH)
2. Get account balance of an Ethereum address at a given date

## How to Run

First, clone this repo in a your chosen project directory.

### Requirements 

1. Web browser 
2. Server

### Running 

Open the project folder from your Visual Studio (VS) Code editor. Then install a local server (**Live Server by Ritwick Dey**). You can search for it under the **Extensions** tab.

In case you are using is **Atom** or **Sublime Text**, please follow the instruction below in order to install a local server plugin.

1. [Sublime Text Live Server](https://youtu.be/5CinAgQylao)
2. [Atom Live Server](https://atom.io/packages/atom-live-server)

![LiveServerByRitwick](https://private-user-images.githubusercontent.com/51446308/241578298-d8f46fa0-b8e7-4809-9eee-8dd9923aadfd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1Mjk3NTA1LCJuYmYiOjE2ODUyOTcyMDUsInBhdGgiOiIvNTE0NDYzMDgvMjQxNTc4Mjk4LWQ4ZjQ2ZmEwLWI4ZTctNDgwOS05ZWVlLThkZDk5MjNhYWRmZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUyOFQxODA2NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNGVjOGRjYWFkMjI0NDFkNmI0ZjllYzZmOGZkMzIyMGZiODQ0MzM5MjNkMjI0Y2IzMjE3ZDE4MjUzNWE2NGU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.QDik7V0NbL07ymeknTNyEGhYYombwpBBFu2Tcfbitio)

Right click the index.html file and choose **Open with Live Server**. This will start the local server and open the HTML file in your default Web browser at http://127.0.0.1:5500/index.html.

![OpenLiveServer](https://private-user-images.githubusercontent.com/51446308/241578447-bbffb541-5e68-4539-b3ee-0edd164c3c79.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1Mjk3NTk5LCJuYmYiOjE2ODUyOTcyOTksInBhdGgiOiIvNTE0NDYzMDgvMjQxNTc4NDQ3LWJiZmZiNTQxLTVlNjgtNDUzOS1iM2VlLTBlZGQxNjRjM2M3OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUyOFQxODA4MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZDAzYzIxM2NjZTMzNmQ5M2U5NjkyNGI5OWRiNzA2MTEwNWEwODMxZWMwZGRlNDcyNzkxZDMyMDU1YjAxMzJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ae853936SbIEp6vpIjdL4yA0OSLcRluRPytjuBjWnU0)


Please follow the prompts to get the transaction data.

There are buttons on the page. The **Download transaction data** button enables you to download an HTML page which has all the transactions from the start block you indicated to the latest block. The **Balance by DATE** button enables you to get the balance of address at an input date.

## Sample Page 

After inputting an ETH address and a starting block, you should get a page similar to the one below:

![SamplePage](https://private-user-images.githubusercontent.com/51446308/241422405-cbca2aa8-42ee-4e93-9918-32e0c2ca2253.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1MjEyNDIwLCJuYmYiOjE2ODUyMTIxMjAsInBhdGgiOiIvNTE0NDYzMDgvMjQxNDIyNDA1LWNiY2EyYWE4LTQyZWUtNGU5My05OTE4LTMyZTBjMmNhMjI1My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUyN1QxODI4NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNjdlNTFkZThhNjc4ZGYxYmJjODc5YzUxZjQ5MDYzMTg4MTViMzUxN2E0YmQ0MTBhYWE5ZGE2NzJiYWZhMWNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MguJTSScKVZ7Mgda3QtWLDkSUEGrTIuqtED1M9dWQZc)
