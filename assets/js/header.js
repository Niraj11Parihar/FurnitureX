let header = document.getElementById('header');
let div = `
<div class="container">
          <div
            class="h-content d-flex align-items-center justify-content-between"
          >
            <div class="logo p-2">
              <img src="assets/images/logo.jpg" alt="" />
            </div>
            <!-- Move the form inside the header -->
            <nav class="w-50">
              <ul
                class="d-flex list-unstyled align-items-center justify-content-center"
              >
                <li>
                  <a href="" class="text-dark fw-bold mx-5">
                    <i class="fa-solid fa-magnifying-glass"></i
                  ></a>
                </li>
                <li><a href="" class="text-dark fw-bold">About me</a></li>
                <li class="px-5">
                  <a href="" class="text-dark fw-bold">Work</a>
                </li>
                <li><a href="" class="text-dark fw-bold">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
`
header.innerHTML = div