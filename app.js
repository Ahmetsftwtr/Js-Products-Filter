var productsdiv = document.getElementById('products');


var products = [
    {id:1,
    img:'https://productimages.hepsiburada.net/s/206/222-222/110000181954273.jpg/format:webp',
    name:'DeFacto Kız Çocuk Bisiklet Yaka Sweatshirt X3667A622SP',
    price:69,
    sex:'Women',
    CrateDate:new Date('2019-05-01')
    },
    {id:2,
    img:'https://productimages.hepsiburada.net/s/129/1000/110000079321006.jpg',
    name:'DeFacto Kız Çocuk Relax Fit Bisiklet Yaka Sweatshirt W3185A621AU',
    price:59,
    sex:'Women',
    CrateDate:new Date('2019-01-01')
    },
    {id:3,
    img:'https://productimages.hepsiburada.net/s/306/1000/110000298354745.jpg',
    name:'DeFacto Regular Fit Uzun Kollu Gömlek Z5192AZ22AU',
    price:149,
    sex:'Men',
    CrateDate:new Date('2019-06-20')
    },
    {id:4,
    img:'https://productimages.hepsiburada.net/s/325/1000/110000319948696.jpg',
    name:'DeFacto Regular Fit Sweatshirt A1698AX22AU',
    price:129,
    sex:'Men',
    CrateDate:new Date('2019-07-18')
    },
    {id:5,
    img:'https://productimages.hepsiburada.net/s/122/1000/110000071657334.jpg',
    name:'DeFacto Kız Çocuk NBA Los Angeles Lakers Jogger Eşofman V7670A621WN',
    price:69,
    sex:'Women',
    CrateDate:new Date('2019-07-15')
    },
    {id:6,
    img:'https://productimages.hepsiburada.net/s/127/1000/110000077698096.jpg',
    name:'DeFacto Kız Çocuk OMG Bisiklet Yaka Sırt Sweatshirt V7051A621WN',
    price:49,
    sex:'Women',
    CrateDate:new Date('2019-10-23')
    }, 
    {id:7,
    img:'https://productimages.hepsiburada.net/s/206/1000/110000181960719.jpg',
    name:'DeFacto Kız Çocuk Esnek Belli Geniş Paça Pantolon V9406A621WN',
    price:79,
    sex:'Women',
    CrateDate:new Date('2019-11-12')
    },     
    {id:8,
    img:'https://productimages.hepsiburada.net/s/206/1000/110000181967364.jpg',
    name:'DeFacto Regular Fit Bisiklet Yaka Basic Uzun Kollu Tişört X5388AZ22SP',
    price:85,
    sex:'Men',
    CrateDate:new Date('2019-01-11')
    },     
    {id:9,
    img:'https://productimages.hepsiburada.net/s/118/1000/110000067157369.jpg',
    name:'Mavi Erkek Fermuarlı Siyah Ceket 010412-900',
    price:450,
    sex:'Men',
    CrateDate:new Date('2019-03-11')
    },    
];

products.forEach((product) =>{
    productsdiv.innerHTML += `
<div class="item">
<img src="${product.img}"  height="250" style="object-fit: contain;">
<p>${product.name}</p>
<p>${product.price}₺</p>
<button type="button">Sepete ekle</button>
</div>`;
})


function filter(select)
{
   if(select.value == 1)
   {
    productsFilter.HightPrice();

   }
   if(select.value == 2)
   {
    productsFilter.LowerPrice();

   }
   if(select.value == 3)
   {
    productsFilter.Men();

   }
   if(select.value == 4)
   {
    productsFilter.Women();

   }
   if(select.value == 5)
   {
    productsFilter.newProduct();

   }
}


var productsFilter = 
{
    HightPrice:function()
    {
        products.sort((a,b)=>Number(b.price)-Number(a.price))
        ApplyFilter(products)

    },
    LowerPrice:function()
    {
    products.sort((a,b)=>Number(a.price)-Number(b.price))
        ApplyFilter(products)
    },
    Men:function()
    {
     var ProductsMen = products.filter((item) => item.sex == "Men");
     ApplyFilter(ProductsMen);
    },    
    Women:function()
    {
        var ProductsWomen = products.filter((item) => item.sex == "Women");
        ApplyFilter(ProductsWomen);
    },
    newProduct:function()
    {
        products.sort((a,b)=>Number(b.CrateDate)-Number(a.CrateDate))
        ApplyFilter(products)
    }
}


function ApplyFilter(filteredlist)
{
    productsdiv.innerHTML = ``;
    filteredlist.forEach((product) =>{
        productsdiv.innerHTML += `
    <div class="item">
    <img src="${product.img}"  height="250" style="object-fit: contain;">
    <p>${product.name}</p>
    <p>${product.price}₺</p>
    <button type="button">Sepete ekle</button>
    </div>`;
    })
}



