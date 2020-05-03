var initFunc=function(){
//$("#nav-frame").load("./header.html"); 
//$("#footer").load("./footer.html"); 
document.getElementById("nav-frame").innerHTML=`<div id="nav">
<nav class="navbar navbar-expand-lg navbar-dark primary-color">
                <div class="brand row">
                    <div class="brand col-md-12">
                        <a class="navbar-brand title" href="./index.html">Corona Warriors</a>
                        
                    </div>
                    <div class="col-md-2">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>    
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="collapse navbar-collapse" id="basicExampleNav">  
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                <a class="nav-link" href="./index.html">Home
                                </a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="./stateWise.html">Statewise Analysis</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link" href="./abtCorona.html">About Corona Virus</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="./Symptoms.html">Symptoms</a>
                                </li>  
                                <li class="nav-item">
                                <a class="nav-link" href="./ProtectiveMeasures.html">Protective Measures</a>
                                </li>  
                                <li class="nav-item">
                                <a class="nav-link" href="./Preventions.html">Preventions</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link" href="./faq.html">FAQs</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link" href="./info.html">Related Information</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="./helplines.html">Helpline</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link" href="https://github.com/c2karansingh/GoKarunaKarunaGo/blob/master/README.md">About us</a>
                                </li> 
                                
                                 
                                  
                                
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
            </div>`;
document.getElementById("footer-frame").innerHTML=`<div id="footer">
<p class="white-text mb-0 text-center" style="font-size: 1.3rem;">Made with<svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-width="0" fill="#f44336" d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
            </svg> by <a href="https://github.com/c2karansingh/GoKarunaKarunaGo" target="_BLANK" style="text-decoration: none;color: white">Team VGEC</a></p>
            <div class="text-center">
                <a href="https://github.com/c2karansingh/GoKarunaKarunaGo" target="_BLANK" style="color:#212529;">
                <svg id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
                    <path stroke-width="0" fill="#212529" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                </svg>
                </a>
                
            </div>
            <p class="white-text mb-0 text-center" style="padding-top: 10px !important;">Checkout <a href="https://github.com/amodm/api-covid19-in" target="_BLANK" style="text-decoration: none;color: white">COVID-19 Stats API </a>&
            <a href="https://github.com/iamrohitsuthar/gocoronago" target="_BLANK" style="text-decoration: none;color: white"> GoCoronaGo</a></p>
            </div>`;
};
initFunc();
