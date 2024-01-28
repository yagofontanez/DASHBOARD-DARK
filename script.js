
document.querySelector("#preco-navbar").addEventListener("click", function() {
    var displayNoneElement = document.querySelector("#display-none");
    var arrowNoneElement = document.querySelector("#arrow-down");
    var arrowRightElement = document.querySelector("#arrow-right");
    var lineHeightElement = document.querySelector("#hr-lado");

    if (displayNoneElement.style.display === 'none') {
        displayNoneElement.style.display = 'flex';
        arrowNoneElement.style.display = 'flex';
        arrowRightElement.style.display = 'none';
        lineHeightElement.style.height = '850px';
    } else {
        displayNoneElement.style.display = 'none';
        arrowNoneElement.style.display = 'none';
        arrowRightElement.style.display = 'flex';
        lineHeightElement.style.height = '850px';
    }
});

document.querySelector("#change-color").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#change-color-dash");
    
    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#change-color").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#change-color-dash");
    
    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});


document.querySelector("#change-color-user").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#change-color-users");
    
    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#change-color-user").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#change-color-users");
    
    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});


document.querySelector("#change-color-feature").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#change-color-features");
    
    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#change-color-feature").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#change-color-features");
    
    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});

document.querySelector("#pricing-navbar").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#preco-navbar");
    
    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#pricing-navbar").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#preco-navbar");
    
    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});

document.querySelector("#change-color-setting").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#change-color-settings");

    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#change-color-setting").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#change-color-settings");

    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});

document.querySelector("#change-color-template").addEventListener("mouseover", function() {
    var elements = document.querySelectorAll("#change-color-templates");

    elements.forEach(function(element) {
        element.style.color = '#5f65e3';
        element.style.transition = 'all 0.3s ease';
    });
});
document.querySelector("#change-color-template").addEventListener("mouseout", function() {
    var elements = document.querySelectorAll("#change-color-templates");

    elements.forEach(function(element) {
        element.style.color = '#687292';
        element.style.transition = 'all 0.3s ease';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var allPricesElement = document.querySelector("#display-none .container-p:first-child");
    allPricesElement.classList.add("clicked");

    document.querySelectorAll("#display-none .container-p").forEach(function(container) {
        container.addEventListener("click", function() {
            container.classList.add("clicked");

            document.querySelectorAll("#display-none .container-p").forEach(function(otherContainer) {
                if (otherContainer !== container) {
                    otherContainer.classList.remove("clicked");
                }
            });
        });
    });

});


document.querySelector("#button-um").addEventListener("click", function() {
    document.querySelector("#button-um").style.backgroundColor = '#6c71ff';
    document.querySelector("#button-dois").style.backgroundColor = '#222d4d';
});
document.querySelector("#button-dois").addEventListener("click", function() {
    document.querySelector("#button-dois").style.backgroundColor = '#6c71ff';
    document.querySelector("#button-um").style.backgroundColor = '#222d4d';
});


document.querySelector("#plan-startup").addEventListener("click", function() {
    document.querySelector("#change-color-background").style.backgroundColor = '#6c71ff';
    document.querySelector("#blue-column").style.backgroundColor = '#101936';
    document.querySelector("#triangle-image").style.filter = 'grayscale(100%) brightness(50%)';
    document.querySelector("#change-color-span").style.color = '#fff';
    document.querySelector("#plan-enterprise").style.backgroundColor = '#687292';
    document.querySelector("#plan-corporate").style.backgroundColor = '#687292';
    document.querySelector("#plan-startup").style.backgroundColor = '#080e24';
    document.querySelector("#change-color-span-dois").style.color = '#687292';
    document.querySelectorAll("#mover-plmds").forEach(function(element) {
        element.style.color = '#fff';
    });
    document.querySelectorAll("#mover-plmds-dois").forEach(function(element) {
        element.style.color = '#687292';
    });
    document.querySelectorAll("#mover-meudeus").forEach(function(element) {
        element.style.color = '#687292';
    });
    document.querySelector("#change-color-background-dois").style.backgroundColor = '#101936';
    document.querySelector("#change-color-span-tres").style.color = '#687292';
    document.querySelector("#hexa-image").style.filter = 'none';
});


document.querySelector("#plan-corporate").addEventListener("click", function() {
    document.querySelector("#blue-column").style.backgroundColor = '#6c71ff';
    document.querySelector("#change-color-background").style.backgroundColor = '#101936';
    document.querySelector("#plan-startup").style.backgroundColor = '#687292';
    document.querySelector("#plan-enterprise").style.backgroundColor = '#687292'
    document.querySelector("#change-color-span").style.color = '#687292';
    document.querySelector("#change-color-span-dois").style.color = '#fff';
    document.querySelector("#plan-corporate").style.backgroundColor = '#101936';
    document.querySelectorAll("#mover-plmds-dois").forEach(function(element) {
        element.style.color = '#fff';
    });
    document.querySelectorAll("#mover-plmds").forEach(function(element) {
        element.style.color = '#687292';
    });
    document.querySelectorAll("#mover-meudeus").forEach(function(element) {
        element.style.color = '#687292';
    });
    document.querySelector("#change-color-background-dois").style.backgroundColor = '#101936';
    document.querySelector("#change-color-span-tres").style.color = '#687292';
    document.querySelector("#triangle-image").style.filter = 'none';
    document.querySelector("#hexa-image").style.filter = 'none';
});


document.querySelector("#plan-enterprise").addEventListener("click", function() {
    document.querySelector("#change-color-background-dois").style.backgroundColor = '#6c71ff';
    document.querySelector("#blue-column").style.backgroundColor = '#101936';
    document.querySelector("#change-color-background").style.backgroundColor = '#101936';
    document.querySelector("#plan-startup").style.backgroundColor = '#687292';
    document.querySelector("#plan-corporate").style.backgroundColor = '#687292';
    document.querySelector("#plan-enterprise").style.backgroundColor = '#080e24';
    document.querySelector("#change-color-span-tres").style.color = '#fff';
    document.querySelector("#change-color-span-dois").style.color = '#687292';
    document.querySelector("#change-color-span").style.color = '#687292';
    document.querySelector("#hexa-image").style.filter = 'grayscale(100%) brightness(50%)';
    document.querySelector("#triangle-image").style.filter = 'none';
    document.querySelectorAll("#mover-meudeus").forEach(function(element) {
        element.style.color = '#fff';
    });
    document.querySelectorAll("#mover-plmds").forEach(function(element) {
        element.style.color = '#687292';
    });
    document.querySelectorAll("#mover-plmds-dois").forEach(function(element) {
        element.style.color = '#687292';
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const buttonMonthly = document.getElementById("button-um");
    const buttonAnually = document.getElementById("button-dois");
    const priceStartup = document.getElementById("preco-plano-um");
    const priceCorporate = document.getElementById("preco-plano-dois");
    const priceEnterprise = document.getElementById("preco-plano-tres");

    buttonMonthly.addEventListener("click", function() {
        priceStartup.innerText = "$39 USD";
        priceCorporate.innerText = "$79 USD";
        priceEnterprise.innerText = "$159 USD";
        document.querySelectorAll("#vtnc").forEach(function(element) {
            element.style.right = '30px';
        });
        document.querySelectorAll("#vsf").forEach(function(element) {
            element.style.right = '15px';
        });
        document.querySelectorAll("#h2-mover").forEach(function(element) {
            element.style.right = '20px';
        });
        priceStartup.innerHTML += '<span class="change-color-span">/month</span>';
        priceCorporate.innerHTML += '<span class="change-color-span-dois">/month</span>';
        priceEnterprise.innerHTML += '<span class="change-color-span-tres">/month</span>';
    });

    buttonAnually.addEventListener("click", function() {
        priceStartup.innerText = "$199 USD";
        priceCorporate.innerText = "$299 USD";
        priceEnterprise.innerText = "$399 USD";
        document.querySelectorAll("#vtnc").forEach(function(element) {
            element.style.right = '25px';
        });
        document.querySelectorAll("#vsf").forEach(function(element) {
            element.style.right = '5px';
        });
        document.querySelectorAll("#h2-mover").forEach(function(element) {
            element.style.right = '15px';
        });
        priceStartup.innerHTML += '<span class="change-color-span">/year</span>';
        priceCorporate.innerHTML += '<span class="change-color-span-dois">/year</span>';
        priceEnterprise.innerHTML += '<span class="change-color-span-tres">/year</span>';
    });
    
    
});

document.querySelector(".change-color-class").addEventListener("click", function() {
    document.querySelector("#main-content-dashboard").style.display = 'none';
    document.querySelector("#dashboard-content").style.display = 'flex';
});


document.querySelector(".change-color-pricing").addEventListener("click", function() {
    document.querySelector("#main-content-dashboard").style.display = 'flex';
    document.querySelector("#dashboard-content").style.display = 'none';
});