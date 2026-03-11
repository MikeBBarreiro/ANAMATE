jQuery(document).ready(function($) {

	'use strict';
	$("body").css("overflow", "hidden");
	$(".LoadingSplash > h1").addClass("show");

	setTimeout(() => {
    console.log("Loading View.");
		$(".LoadingSplash > h1").removeClass("show");
		// $(".LoadingSplash").addClass("FadeAction");
  }, 2000);
	setTimeout(() => {
			// $(".LoadingSplash").css('display', 'none');
			$(".LoadingSplash").addClass("FadeAction");
			$("body").css("overflow", "scroll");
  }, 2500);
	setTimeout(() => {
			$(".LoadingSplash").css('display', 'none');
  }, 2800);

	$("#HowOurStoryStarted_Btn").click(function() {
		Swal.fire({
		  title: "How our story started",
		  text: `Azzy and Michael’s story began with a simple plan to chat on a video call before meeting in person. What was meant to be a quick conversation turned into a three-hour call filled with easy laughter and instant connection. \n
			Azzy still remembers how much she loved Michael’s SpongeBob T-shirt that night. it instantly caught her eye and made her smile and Michael remembers Azzy's beautiful smile and lively personality.\n
			The very next evening, they met at a local billiards hall. Behind their masks—it was still during Covid—they shared playful banter over a few games of pool and found the chemistry from their call even stronger in person.
			When the night seemed to be ending, neither was ready to say goodbye. They grabbed rolled ice cream to make things even sweeter, then wandered to a nearby park to sit beneath a gazebo and watch the sunset. Still not wanting the evening to end, they capped the night with a cozy movie together.
			That unforgettable first date was the start of a love story that has only grown deeper. \n
			Exactly 4 years later... Michael would propose to Azzy at sunrise and under the the Roman Sunset, bringing her to yet another unforgettable date.`,
			confirmButtonText: ` <i class="fa fa-thumbs-up"></i> Love It! `,
			confirmButtonColor: '#A4895A',
			color: "whitesmoke",
		  imageAlt: "Custom image",
			width: '100em',
			heightAuto: true,
			background: "#403c3cf2"
		});
	});

	$("#Rome_Btn").click(function() {
		Swal.fire({
		  title: "ROME",
		  text: "Azzy had no idea a proposal was coming. What she thought was a simple photo shoot—an idea suggested by her mom as a way to capture beautiful memories while young and in love in Rome—turned out to be something far more magical.The photo session had been difficult to schedule. Michael kept putting it off, making it seem like nothing urgent was in the works. In fact, just the day before the shoot, he had even convinced Azzy that an engagement was still a long way off. \n At the Trevi Fountain, she made a wish that they would get engaged soon—completely unaware that her wish was already about to come true. During the shoot, the photographer had Azzy pose overlooking the city while pulling Michael aside for what she claimed were 'secret candid directions.' As Azzy waited, she suddenly heard Michael call her name. When she turned around, he was down on one knee. Shocked and overjoyed, Azzy could only respond, 'Are you serious? Really?!' before giving her heartfelt 'Yes.' In the next instant, her family came running from behind the bushes to celebrate, adding even more joy to the moment. Their photographer captured every detail—the surprise, the laughter, the tears—creating keepsakes that will forever remind them of that dreamlike day in Rome.",
			confirmButtonText: ` <i class="fa fa-thumbs-up"></i> Love It! `,
			confirmButtonColor: '#A4895A',
			color: "whitesmoke",
		  imageAlt: "Custom image",
			width: '100em',
			heightAuto: true,
			background: "#403c3cf2"
		});
	});

	$("#BridalPartyDetails_Btn").click(function() {
		Swal.fire({
		  title: "Bridal Party Info",
		  text: "MORE INFO COMING SOON!",
			confirmButtonText: ` <i class="fa fa-thumbs-up"></i> Cant Wait! `,
			confirmButtonColor: '#A4895A',
			color: "whitesmoke",
		  imageAlt: "Custom image",
			width: '100em',
			heightAuto: true,
			background: "#403c3cf2"
		});
	});

	$("#WeddingDetails_Btn").click(function() {
		Swal.fire({
		  title: "Wedding Details - Le Pavillon",
		  text: "An award-winning historic hotel built in 1928 with a distinctly present-day outlook, Le Pavillon captures the best of the Crescent City’s unique personality—then and now—and channels it into an immersive guest experience that’s felt in details large and small. Stir up a Sazerac cocktail, savor a late-night PB&J, sink into a bathtub that once belonged to Napoleon, and discover the best of both worlds—a decidedly modern experience with all the early 20th-century charm and details. Provided with gourmet options to bring the soul of New Orleans to you through food. \n Our beautiful day will take place here at Le Pavillon, and we cant wait to share it with you. ",
			confirmButtonText: ` <i class="fa fa-thumbs-up"></i> Beautiful `,
			confirmButtonColor: '#A4895A',
			color: "whitesmoke",
			background: `#403c3cf2 url("https://media.cntraveler.com/photos/60d382bca7bda1c334f020c4/master/pass/Le%20Pavillion,%20New%20Orleans_NOL_FRONT_ENTRANCE2.jpg") no-repeat center center / cover`,
		  imageAlt: "Custom image",
			width: '90em',
			heightAuto: true
		});
	});

	// imageUrl: "../public/img/modal.png",
	// imageWidth: 450,
	// imageHeight: 310,
      var owl = $("#owl-testimonials");

        owl.owlCarousel({

          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

      });


        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');

          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });

        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);

        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});
