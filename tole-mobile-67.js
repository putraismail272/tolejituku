// Mobile 
window.addEventListener('DOMContentLoaded', () => {
	windowWidth = window.innerWidth;
if (windowWidth < 600) {
			$(window).on('load', function () {
     $('.smartb1').addClass('shead');
     $('.smartb2').addClass('sindex');
     $('.smartb3').addClass('slc');
     $('.smartb4').addClass('scontent');


// Download Aplikasi
$('.app-container').append('<div id="smart_banner" style="position: fixed; width: 100%; padding: 10px;padding-bottom: 5px;padding-top: 5px; font-family: Verdana, arial, sans-serif; color: #fff; background: #2b2b2b; height: 55px; transition: all 0.5s cubic-bezier(0, 1, 0.5, 1) 0s; overflow: hidden;"><div class="app_icon" style="width: 54px;margin: 0px 0px 0px 15px;"><img src="https://i.postimg.cc/pd3XhYPf/Tole-Jitu.png" alt="App Icon" style="display: block; margin-right: auto; margin-left: auto; width:40px; max-width: 154px;"></div><div class="app_info" style="position: absolute;left: 95px;top: 9px;"><div class="app_title" style="font-size: 15px;font-weight: bold;color: #ff001c;">APLIKASI TOLEJITU</div><div class="app_slogan" style="font-size: 11px;color: #FFF;letter-spacing: 0px;">Menang Berapapun Pasti Dibayar!</div></div><div class="download_button" style="position: absolute;right: 5px;margin-top: -32px;"><a href="https://bit.ly/APKTOLEJITU" title="Download Apk TOLEJITU" class="btn btn-green" style="font-size: 12px;padding: 6px 8px;color: #fff;background: linear-gradient(135deg, #791621 0%, #ff001c 100%);border-radius: 20px;">DOWNLOAD</a></div><span id="close_button" style="position: absolute;display: block;top: 0px;left: 0px;width: 25px;height: 63px;color:#fff;text-align: center;font-size: 18px;line-height: 60px;">×</span></div>');

$("#close_button").click(function(){
  $('.app-container').hide();
  $('.smartb1').removeClass('shead');
  $('.smartb2').removeClass('sindex');
  $('.smartb3').removeClass('slc');
        $('.smartb4').removeClass('scontent');
  $('.app-container').remove();
    });
});

//Teks Berjalan
$('<table style="font-size: 13px;border: none;margin-bottom: -14px;margin-top: -10px;"><tbody><tr><td style="text-align: center;padding: 0px 2px 5px 5px;font-size: 11px;background: #b90b1f; border: none;"><i class="fas fa-bullhorn"></i></td><td style="background: #252525;border: none;"><marquee>SELAMAT DATANG DI TOLEJITU- SITUS AGEN TOTO ONLINE JITU TERPERCAYA - SELAMAT BERGABUNG DAN SEMOGA BERUNTUNG</marquee></td></tr></tbody></table>').insertBefore($('.wrapper2'));

// Slider
$('<div class="splide"><div class="splide__track"><ul class="splide__list"><li class="splide__slide"><img src="https://i.postimg.cc/fysXNhP7/msg6453150546-6617.jpg" style="width: 100%;"/></li><li class="splide__slide"><img src="https://i.postimg.cc/FH3GrtpC/Slider-All-Promo.jpg" style="width: 100%;" /></li><li class="splide__slide"><img src="https://i.postimg.cc/PqM4DmBm/Slider-Xtra-TO.jpg" style="width: 100%;" /></li></ul></div><div class="splide__progress"><div class="splide__progress__bar"></div></div></div>').insertBefore($('.wrapper2'));


// icon List Mobile
$('<div class="list-menu-mobile"><a href="https://prediksitolejitu.com/?page=bukti-jp-member" target="_blank"><img src="https://i.postimg.cc/7Y1Ny2qy/Button-Bukti-JP.jpg" alt="TOGEL"></a><a href=https://prediksitolejitu.com/?page=prediksi-mobile" target="_blank"><img src="https://i.postimg.cc/dVqjQV0Z/Button-Prediksi-Togel.jpg" alt="SLOT"></a><a href="https://tolejitu.net/m/promosi_index.php" target="_blank"><img src="https://i.postimg.cc/cLXMvGK9/Button-Promo.jpg" alt="Carabermain"></a><a href="https://prediksitolejitu.com/?page=slot-gacor" target="_blank"><img src="https://i.postimg.cc/W4zmrYg2/Button-RTP-Slot.jpg" alt="PROMOSI"></a></div>').insertBefore($(".wrapper2"));
	
	
// Icon Sosmed
$('<div style="text-align: center; width: 100%;"><table style="width: 100%; margin-left: auto; margin-right: auto;"><tr><td colspan="4" style="width: 100%; text-align: center;">Klik untuk hubungi customer service kami :</td></tr><tr><td colspan="1" style="width: 25%; text-align: center;"><a href="https://api.whatsapp.com/send?phone=6281936623558&text=&source=&data=" target="_blank"><img src="https://i.postimg.cc/rmV0xx7z/WA-TJ.gif" style="width: 100%; height: auto;" /></a></td><td colspan="1" style="width: 25%; text-align: center;"><a href="https://www.facebook.com/groups/tolejitu" target="_blank"><img src="https://i.postimg.cc/05tmGXkv/FB-TJ.gif" style="width: 100%; height: auto;" /></a></td><td colspan="1" style="width: 25%; text-align: center;"><a href="#instgram" target="_blank"><img src="https://i.postimg.cc/2SWZDz4j/Instagram-TJ.gif" style="width: 100%; height: auto;" /></a></td><td colspan="1" style="width: 25%; text-align: center;"><a href="https://twitter.com/TOLEJITU" target="_blank"><img src="https://i.postimg.cc/DzKbftgr/TW-TJ.gif" style="width: 100%; height: auto;" /></a></td></tr></table></div>').appendTo('.wrapper2');

			$('.note.left.underline').text('Versi WAP').removeClass("underline");
			var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    autoplay : true,
    lazyLoad : true
} );

splide.mount(); 
			// Popup
			$('body').append('<div id="pop-up-container" onclick="close_pop_up()"><div id="bg-black" class="fade-in"></div><div id="pop-up-wrapper" class="swirl-in-fwd gray-bg"><a href="#" target=""><img src="https://i.postimg.cc/sD35GQx3/QRIS-TJ.png" alt="tolejitu"/></a><button onclick="close_pop_up()">Klik di sini untuk tutup</button></div></div>')
			setTimeout(close_pop_up, 10000);
	
			document.getElementById('pop-up-wrapper').addEventListener('click', e => {
				e.stopPropagation();
			});
		}
	});

	const close_pop_up = () => {
		document.getElementById('pop-up-wrapper')?.classList.replace('swirl-in-fwd', 'swirl-out-bck');
		document.getElementById('bg-black')?.classList.replace('fade-in', 'fade-out');

		setTimeout(() => {
			const pop_up_container = document.getElementById('pop-up-container');
			pop_up_container?.parentElement.removeChild(pop_up_container);
		}, 1000);
	};
