var en_name = '7fc5598a904c98df151e75af932fc4f6'; //Like FLOOR StampConcrete
// my_nav
var myNav = $("#my_navmanu");

var div_code = `<a href="index.html" class="logo d-flex align-items-center">
                    <!-- Uncomment the line below if you also wish to use an image logo -->
                    <!-- <img src="assets/img/logo.png" alt=""> -->
                    <h1>Like FLOOR<span> StampConcrete.</span></h1>
                  </a>
                  <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                  <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                  <nav id="navbar" class="navbar">
                    <ul>
                      <li><a id="index" href="index.html">Home</a></li>
                      <li><a id="about" href="about.html">About</a></li>
                      <li><a id="services" href="services.html">Services</a></li>
                      <li><a id="projects" href="projects.html">Projects</a></li>
                      <li><a id="shop" href="shop.html">Shop</a></li>
                      <li><a id="blog" href="blog.html">Blog</a></li>
                      <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                          <li><a href="#">Dropdown 1</a></li>
                          <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                              <li><a href="#">Deep Dropdown 1</a></li>
                              <li><a href="#">Deep Dropdown 2</a></li>
                              <li><a href="#">Deep Dropdown 3</a></li>
                              <li><a href="#">Deep Dropdown 4</a></li>
                              <li><a href="#">Deep Dropdown 5</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Dropdown 2</a></li>
                          <li><a href="#">Dropdown 3</a></li>
                          <li><a href="#">Dropdown 4</a></li>
                        </ul>
                      </li>
                      <li><a id="contact" href="contact.html">Contact</a></li>
                    </ul>
                  </nav>`;
myNav.append(div_code);

// $('.stock-btn').on('click', function() {
//   $('.stock-btn').removeClass('active');
//   id = $(this).attr('id')
//   $('#'+id).addClass('active');
//   name_label = $(this).data('type');
//   $('#title_name_label').text(name_label)
// });

// function init () {
//   $('#stock').addClass('active');
// }

// alert(this_is_page);
$('#'+this_is_page).addClass('active');

// init();