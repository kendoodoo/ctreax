const c=document,ctreax=c.querySelector("ctreax");ctreax.innerHTML="",ctreax.innerHTML='<div class="btn-nav-controls"><button class="btn-controls bold b"><div class=\'s bold\'></div></button> <button class="btn-controls italic i"><div class="s italic"></div></button> <button class="btn-controls underline u"><div class="s underline"></div></button> <button class="btn-controls strikeThrough strike"><div class="s strike"></div></button> <button class="btn-controls-no-active-toggle links"><div class="s link"></div></button></div><div class="inputarea" contenteditable></div></div>',c.head.insertAdjacentHTML("beforeend","<style>\n.s {background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWIAAAAQCAYAAAAswXUEAAAAAXNSR0IArs4c6QAABS5JREFUeF7tm1+uTEEQxr+7AMEKkHgUf1aAFWABgmcPWAF3BXjwjFgAVoAV4MGbBCtALID8oivpaWfO6dP/Zs7RnUxm7p3uqq6vu76uqtNzoN46AtMIPJT0RNLn6a5ZPU5Lui3pXpaUPrgjsDAEDhY23z7dtggckfRC0hVJrfbKb0mvJV2X9KutuV1bR2A3CLRyrt1Y17XmIvBR0lkn5Juk95LeSnqcKzgYf1fSRUnnJZ10332SdKawni4uDoFLko5JehXXPbnXTTfyWbKElQwMiRhHIA0N21dJh5J4r9FwxKuSfkj6IOlBQSUQB/KR6zez9XJBXYhi7jccoYAXmwzsltj8iPiUI0qw/C7plluvHLtw9pcu2n7k1uhL4YiYPXU0cpI/HQFFdt/otiY9ZCUcvHYoxtiWgh3rz34yf6+lh4WKkW0LmmKLjU3SExIxJ+EbJ/Gde2cxTjgnuZCyQyPHYADOWJKEUc2mgmwhZL+ZrSWzAuaPXGyA+CF7/kdkwYZbagtrxNh0zuGaYxNrAk6GTa8R56BZbmyriNgCl9I+Xw6JRpLGiNi+49QiAqIdLxAFDZkG2RMJXauQDrUkYiJgNpWfarGpLeLPWVYwolbLetAoD/CZlN4iF5P/PCN7ITOhTaWlkKgdMil2kZbyAp+xFjuflDn0Mf8PAgRFtDAz3hUCG/OZQ8R+qlJ68jgbKWoNom9JxFYCCaPvXLwgrKcuZWcj8YL0IUt0+SUjSBk8GTNFpkPzYgwHydRYdGDvFJFusz2WyM0WI+S5WCalinOV7HvqO9OeVhExe5RgggO9doP42NPsIyPjbXujRmnCl/nPXMaI2MiEQZAwBtSqEbMQyA8juxKLU5OIiX6RP7fNrRmDO6TnkyPrw9+8cBw/CmeD35GUUkpic7IOvI81+qAzlYhxhpg9haNiv2UCc7Hu/ecj0KpGzN6xzIhZxhyaOSQ5RMbz0ckbMTiHMSI2ssBZqAfiONRapxw0ZZqQCnJTo54xnbWJeJtuiIqNRn2d2wc+ic6tiWFDuFb+/8LvrdSTUv+OJWLsHppX7PrHju1EHItouX6tImJ8gpJkq3vjiyRi34mJfLgJAGA10gicspZsiGUoTYf0sat2pAXp3s+8hzsUEVuEjB28/MgUe/ne6lBzXDS2NIEO0z1HvvW1aH7q6lIvTWyiGxM12oic6DFlTfd5zGJLEz4RQ76kukTJc6O5qcUBIO6nDt1smBob8334ZN7GYBO6U1PrULfdu4Sg/BKO2cf1r9TSjtWIIS//YQORLw84sYHPZC5WI+Z62VSddwg/dHHoTl3rA1dIdIpIt61RKz0xe6T32USgVURst2VqBHfhmi72YZ0RLgZYyaAGWRrJpKTRMQ5kDwJZdPshAp+5klX6lgYkaakWpAspEg1Tq02JTn377NDwI3h0WFnHvx4HOaaSPjqRyWvboYt85pNrE3hxCHNoDDX0QwqlDsuY/dL7/C05tbpHbM84wD0m2l9llD9WI/Y3JHeKc64qjUVFEBWEhfxatSLIHvl2sZ/FhLhSo7lt9tgTYCJKa2AXRsn77uwW3eOQ4MZPjmkcamRG3G6BHHOfF6AHwud65JAe9qf90CcVszHnLunUMSRiNrTSm6qnVUTc8qBttT5JempFoalOU3ucRZO5BBIzTw6XnKg0RkftPlZrpuRB41DJKUeMHcjo4k40jYebOGlKaaU2Jl1+R6A4AmsnYntQNgZcjbp38YXqAjsCHYH1IrB2Il7vynXLOgIdgdUg8Af4ekkgmzSzAQAAAABJRU5ErkJggg==') no-repeat top left; width: 1em; height: 0.88em;} .bold { background-position: -0.7px -1.8px; } .italic { background-position: -27px -2px; }.underline { background-position: -52.4px -3px; } .strike { background-position: -79.5px -2px; } .link { background-position: -104.9px -2px; width: 1.05em; }.btn-controls {height: 35px;padding: 9.9px;cursor: pointer;border-radius: 4px;border: 1.5px solid black;background-color: white;}.btn-controls-no-active-toggle{height:35px;padding:9.5px;cursor:pointer;border-radius:4px;border:1.5px solid #000;background-color:#fff}.a-btn,.btn-controls-no-active-toggle:active{border:1.5px solid green}.inputarea{font-family:arial;display:inline-block;box-sizing:border-box;overflow:auto;border:1px solid #000;border-width:0 1px 1px;width:100%;height:200px;outline:transparent solid 0;padding:8.5px;border-radius:0 0 4px 4px}.btn-nav-controls{border:1px solid #000;padding:6.5px;border-top-left-radius:4px;border-top-right-radius:4px;user-select:none;background-color:#eee}</style>");let btnc=c.querySelectorAll(".btn-controls"),inputarea=c.querySelector(".inputarea"),links=c.querySelector(".links"),navbtnc=c.querySelector(".btn-nav-controls");for(i of(ctreax.getAttribute("nav-color")&&(navbtnc.style.backgroundColor=ctreax.getAttribute("nav-color")),inputarea.focus(),inputarea.blur(),btnc))i.addEventListener("click",function(){classlisty=this.classList,classlisty.contains("a-btn")?(classlisty.remove("a-btn"),c.execCommand(this.classList[1],!0)):(classlisty.add("a-btn"),c.execCommand(this.classList[1],!1)),inputarea.focus()});links.addEventListener("click",function(){if(linkURL=prompt("Enter a URL:"),!linkURL)return!1;c.execCommand("inserthtml",!1,`<a contenteditable="false" href="${linkURL}" target="_blank">${linkURL}</a>`)}),inputarea.addEventListener("paste",function(t){t.preventDefault(),this.insertAdjacentHTML("beforeend",window.event.clipboardData.getData("text/plain"))}),inputarea.addEventListener("click",function(t){for(tstn=t.target.localName,i=0;i<btnc.length;i++)if(we=btnc[i],tstn==we.classList[2])for(we.classList.add("a-btn"),i;i<1;i++)c.execCommand(we.classList[1],!1)});
