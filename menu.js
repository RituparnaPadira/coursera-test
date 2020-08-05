var content="";
var br={hname:"Breakfast",pic:"B/B",name:["Crunch Veg Roll","Egg Roll","Crunch Chicken Roll","Phaaphda","Cheesy Bread","Egg Bread","Butter Naan","Fried Momos","Boiled Momos","Paneer Pakoda","Paneer Masala","Chicken Kabab","Stuffed Chicken","Beet Chicken Pakoda","Full Meal Combo","Noodles"],price:[30,40,59,40,20,40,70,60,50,120,90,190,269,210,349,49],desc:["Crunchy Roll with veggies (1pc)","Egg Roll (1pc)","Crunchy Roll with masala chicken","Phaaphda(6pcs) + veggies","Bread loaded with cheese(4 pcs) + Veggies","Egg baked Bread (4 pcs)","Butter Naan (4 pcs) + Veggies","Deep Fried Momos (half plate)","Bolied Momos (half plate)","Paneer Pakoda (Full plate)","Paneer Masala (Full plate) + Veggies","Chicken Kabab (3 sticks) + Veggies","Stuffed Crunchy chicken (Full plate) + Veggies","Beetroot Chicken Pakoda (4 pcs) + Veggies","Beet Chicken (2 pcs) + Chicken Kabab (2 sticks) + Chicken Roll (2 pcs) + Bread (2 pcs) + samosa (1 pc)","Noodles (Full plate) + Peanut Butter + Chilli sause"]};
var ch={hname:"Chicken",pic:"C/C",name:["Chicken Kadhai","Chicken Chilli","Chicken Beans"," Chicken Do Pyaza","Masala Chicken","Chicken Veggies (Boiled)","Chicken Manchurian","Chicken Pasta Veggie","Masala Chicken Bhurji","Chicken Veggie (Fried)","Chicken Pasta","Chicken Noodles","Chicken Bhurji","Greeny Chicken","Chicken Pakoda","Chicken Bhurji Pakoda","Chicken Cutlet","Deep Chicken Chilli"],price:[190,240,99,280,210,149,349,230,210,199,220,230,310,49,320,290,159,259],desc:["Chicken Kadhai (half plate)","Chicken Chilli (Full plate)","Chicken Beans (Full plate)","Full plate","Full plate","Full plate","Full plate","Full plate","Full plate","Half plate","Half plate","Full plate","Full plate","Half plate","Full plate","Full plate","Chicken Cutlet (1 pc) + Lemon Soup + Veggies","Full plate",]};
var sn={hname:"Snacks",pic:"SO/SO",name:["Full Snacks Combo","French Fries","Poha","Lemon Crispies"],price:[320,199,149,210],desc:["Paneer Pakoda (half plate) + French Fries(half plate)","French Fries (Full plate)","Poha (Full plate)","Lemon Crispies(Half plate)"]};
var cm={hname:"Mushroom",pic:"CM/CM",name:["Mushroom Veggie","Mushroom","Mushroom Noodles","Chicken Mushroom"],price:[110,79,99,199],desc:["Mushroom loaded with veggies","Soupy Mushroom","Noodles loaded with mushroom","Mushroom loaded with chicken"]};
var cs={hname:"Sushi",pic:"CSR/CSR",name:["Cream Sushi","Chocolate Sushi","Creamy Chocolate Sushi","Choco Grilled Sushi"],price:[110,159,199,179],desc:["Chicken Sushi filled with Cream (Half plate)","Choco filled Chicken Sushi (Half plate)","Chicken Sushi filled with Chocolate Cream (Half plate)","Grilled Choco Chicken Sushi (Half plate)"]};
var d={hname:"Dinner",pic:"D/D",name:["Chicken Kadhai","Chicken chilli","Chicken Munchurian","Mix Veg","Chana Mix Veg","Chicken veggie","Chicken Pakoda","Chicken Veggie","Masala Paneer","Mixed Veg","Noodles","Mushroom","Paneer Beans","Paneer Chilli","Cauliflower Mix","Beans Do Pyaza"],price:[249,310,299,59,69,99,239,199,159,75,120,30,189,210,80,49],desc:["Full plate","Full plate","Full plate","Full plate","Full plate","Half plate","Full plate","Grinded Chicken loaded with veggies","Mix veg with Paneer","Contains broklie, beans, carrot, tomato, etc.","Full plate","Full plate","Paneer with added beans","Full plate","Mixed veg loaded with Cauliflower","Full plate"]};
var r={hname:"Rice",pic:"SO2/SO",name:["Maawa Rice","Rice"],price:[129,49],desc:["Rice loaded with extra maawa (Full plate)","Full plate"]};
var dk={hname:"Duck",pic:"DK/DK",name:["Duck Roast","Duck Chilli","Duck veggie"],price:[129,299,249],desc:["Roasted Duck + Veggies","Full Plate","Duck with veggies"]};
var p={hname:"Pastry",pic:"DS/DS",name:["Chocolate Pastry","Caramel Vanilla Pastry"],price:[69,49],desc:["Pastry with Chocolate Cream","Pastry with Vanilla Cream and Caramel"]};
var f={hname:"Mixed Veg",pic:"F/F",name:["Veg Fried Rice","Paneer Fried Rice","Chicken Fried Rice","Mutton Fried Rice"],price:[69,129,340,399],desc:["Fried Rice with veggies (broklie, carrot, beans, etc)","Fried Rice with Panner","Fried Rice with Chicken","Fried Rice with Mutton"]};
var fr={hname:"Biryani",pic:"FR/FR",name:["Veg Biryani","Paneer Biryani","Chicken Biryani","Mutton Biryani"],price:[69,129,340,399],desc:["Biryani with veggies (broklie, carrot, beans, etc)","Biryani with Panner","Biryani with Chicken","Biryani with Mutton"]};
var l={hname:"Lunch",pic:"L/L",name:["Soya Chilli","Chicken Chilli","Chana Mix Veg","Mix Veg","Chicken Beans","Chicken Veggie","Chicken Pasta","Chicken Do Pyaza","Chicken Pakoda","Chicken Munchurian","Chicken Pasta Veggie","Panner Veg Mix","Soya Veg Mix","Fried Chicken Veggie","Masala Paneer","Masala beans","Mushroom Mixed Veg","Mixed Veg","Paneer Mixed Veg","Paneer Chilli","Cauliflower Mixed Veg","Beans","Paneer Munchurian","Mushroom Pasta","Mushroom Veggie","Chicken Noodles"],price:[69,199,69,59,120,79,199,240,299,350,149,179,40,89,159,49,79,69,159,169,99,40,189,69,90,120],desc:["Full plate","Full plate","Full plate","Full plate","Full plate","Half plate","Full plate","Full plate","Half plate","Full plate","Half plate","Full plate","Full plate","Half plate","Full plate","Full plate","Half plate","Full plate","Full plate","Full plate","Full plate","Full plate","Full plate","Half plate","Full plate","Full plate"]};
var n={hname:"Noodles",pic:"NL/NL",name:["Veg Chowmin","Chowmin","Chicken Chowmin","Veg Noodles","Pasta Noodles","Soya Noodles","Chicken Noodles"],price:[60,130,179,39,49,110,229],desc:["Half plate","Full plate","Half plate","Half plate","Half plate","Full plate","Full plate"]};
var pn={hname:"Pasta Noodles",pic:"PF/PF",name:["Pasta Noodles","Paneer Pasta Noodles","Chicken Pasta Noodles","Mutton Pasta Noodles"],price:[99,189,259,310],desc:["Pasta Noodles filled with veggies","Contains veggies, paneer, mushroom, onion, etc","Contains veggies, chicken, onion, etc","Contains veggies, Mutton, onion, mushroom, etc"]};
var ss={hname:"Sushi",pic:"SR/SR",name:[],price:[],desc:[""]};
var sp={hname:"Soup",pic:"A/A",name:["Mushroom Soup","Mango Soup","Papaya Soup","Onion Soup","Corn Soup","Soup Noodles","Veggie Soup","Panner Soup","Mushroom Veggie Soup","Veg Soup","Chicken Soup"],price:[69,49,30,25,59,30,49,69,55,40,120],desc:["Contains Mushroom","Contains Mango","Contains Papaya","Contains onion and veggies","Contains corn and baby corn","Contains Noodles and Veggies","Contains veggies (broklie, carrot, etc","Contains Paneer and Veggies","Contains Mushroom and Veggies","Contains Veggies (broklie, spinach, carrot, beans)","Contains chicken, Mushroom and Veggies"]};
var ds={hname:"Dessert",pic:"SS/SS",name:[""],price:[],desc:[""]};
var rc={pic:"B",name:["Crunch Veg Roll","Chicken Roll","Crunch Chicken Roll","Phaaphda","Butter Bread","Egg Bread","Butter Naan","Fried Momos","Boiled Momos","Paneer Pakoda","Paneer Masala","Chicken Kabab","Stuffed Chicken","Beet Chicken Pakoda","Full Meal Combo","Noodles"]};
var vg={pic:"B",name:["Crunch Veg Roll","Chicken Roll","Crunch Chicken Roll","Phaaphda","Butter Bread","Egg Bread","Butter Naan","Fried Momos","Boiled Momos","Paneer Pakoda","Paneer Masala","Chicken Kabab","Stuffed Chicken","Beet Chicken Pakoda","Full Meal Combo","Noodles"]};
var b=[br,ch,sn,cm,cs,d,r,dk,p,f,fr,l,n,pn,ss,sp,ds,rc,vg];
function items(it){
	document.getElementById("focus").style.display="inline";
	var a=it%100;
	var l=Math.floor(it/100);
	var i;
	content='<h2 class="menu-head">'+b[a].hname+'</h2>';
	for(i=0;i<l;i++)
	{
		var j=i+1;
		content+='<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sp"><div class="hidden-lg hidden-md hidden-sm col-xs-2"></div><div class="container-pic col-lg-5 col-md-5 col-sm-5 col-xs-8"><img class="sp-pic" src="images/menu/'+b[a].pic+j+'.jpg"><div class="price">Rs '+b[a].price[i]+'</div></div><div class="hidden-lg hidden-md hidden-sm col-xs-space rtfl"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-8 rtfl"><strong>'+b[a].name[i]+'</strong><br>'+b[a].desc[i]+'<br><br><button class="order-btn">Order Now</button></div></div>';
	}
	console.log(l);
	console.log(i);
	document.getElementById("menu-main").innerHTML=content;
}

function btn()
{
	document.getElementById("sm-sym").style.display="block";
	document.getElementById("togg").style.display="none";
	document.getElementById("toggl").style.display="block";

}
function btn_tog()
{
	document.getElementById("sm-sym").style.display="none";
	document.getElementById("toggl").style.display="none";
	document.getElementById("togg").style.display="block";

}