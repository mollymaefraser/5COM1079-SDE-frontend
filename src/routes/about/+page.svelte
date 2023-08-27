{@html '<!--I have created an about us page-->'}
    <!--about us top section-->
    <section class="about" id="about">
        <div class="image">
            <img src="/Medicine.gif" alt="Medical staff"> <!--created gif animation on storyset-->
        
        </div>
        <div class="content">
            <h3>Welcome to MedIntelligence</h3>
            <p>
                Your health, Our care.
            </p>
            <a href="/symptom-checker" class="button"> Submit symptom<span class="fa-solid fa-chevron-right"></span></a>
        </div>
    </section>
    <!--about us section section-->
    <section class="about_page" id="about_page">
        <h1 class="heading"> <span> About </span> us </h1>

        <div class="row">
            

            <div class="content">
                <h3>Your health is our utmost priority</h3>
                <p>
                    We are a leading provider of private healthcare dedicated to delivering exceptional levels of medical care to individuals and families. Established in 2005, we have been operating a network of leading medical facilities, from clinics to hospitals and specialty centres up and down the United Kingdom. 
                </p>
                <p>
                    Our team consists of highly skilled healthcare professionals and specialists, along with administrative support staff, who all share our vision of providing compassionate and world-class care.
We take pride in our patient-oriented approach, offering a wide range of services across the healthcare industry such as primary care, diagnostic imaging, surgical procedures, and wellness programs.
    
                </p>
    
    
            </div>

            <div class="image">
                <img src="/team-transparent.gif" alt="Medical team">

            </div>
        </div>

        

    </section>
    <!--Icons section. icons are from fontawesome-->
    <section class="icons_container">
        <div class="icons">
            <i class="fa-solid fa-user-doctor"></i>
            <h3> 150+</h3>
            <p>Available medical practitioners</p>
            

        </div>

        <div class="icons">
            <i class="fa-solid fa-face-smile-beam"></i>
            <h3>1000+</h3>
            <p>Positive reviews</p>
            

        </div>

        <div class="icons">
            <i class="fa-solid fa-hospital"></i>
            <h3>50+</h3>
            <p>Available Hospitals</p>
            

        </div>

        <div class="icons">
            <i class="fas fa-users"></i>
            <h3>500+</h3>
            <p>Satisfied patients</p>
            

        </div>

    </section>

    <!--Our services section-->
    <section class="services">
        <h1 class="heading">our <span>services</span></h1>
        <div class="service-container">

            <div class="container">
                <i class="fa-solid fa-stethoscope"></i>
                <h3>Instant Diagnosis</h3>
                <p>Receive diagnosis from symptoms</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
            </div>

            <div class="container">
                <i class="fa-solid fa-comment-medical"></i>
                <h3>Healthcare Advice</h3>
                <p>Receive guidance</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
    
            </div>
    
            <div class="container">
                <i class="fa-solid fa-user-doctor"></i>
                <h3>Appointment</h3>
                <p>Receive contact information of various practitioners</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
    
            </div>
    
            <div class="container">
                <i class="fas fa-users"></i>
                <h3>Expert Consultancy</h3>
                <p>Receive expert advice from diagnosis</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
    
            </div>

            <div class="container">
                <i class="fa-solid fa-heart-pulse"></i>
                <h3>Total care</h3>
                <p>Your health is our priority</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
    
            </div>

            <div class="container">
                <i class="fa-solid fa-heart-pulse"></i>
                <h3>Total care</h3>
                <p>Satisfied patients</p>
                <a href="#" class="button"> Learn more<span class="fa-solid fa-chevron-right"></span></a>
    
            </div>
    
        </div>

    </section>
    <!--Symptom checker section-->
    <section class="Symptom">
        <div class="image">
            <img src="/symptom-checker.gif" alt="Symptom checker">
        </div>
        <div class="checker">
            <h3>Check your symptoms instantly</h3>
            <p>Our intelligent health prediction system can analyse your symptoms and provide a diagnosis </p>
            <a href="#" class="button"> Learn more about Symptom Checker<span class="fa-solid fa-chevron-right"></span></a>
        </div>

    </section>


{@html '<!--setting properties for the body, container, -->'}

<style>
    
    *{
        
        box-sizing: border-box;
        text-decoration: none;
        transition: all .2s ease-out;
    }
    /*select and sets tthe background colour of every second element/section to grey*/
    section:nth-child(even){ 
        background: #f5f5f5;
    }
    section{
        padding: 1rem 0;
    }

    .button{
        display: inline-block;
        margin-top: 1rem;
        padding: .5rem;
        padding-left: 1rem;
        box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
        color: green;
        border: .1rem solid green;
        cursor: pointer;
        border-radius: .5rem;
        font-size: 1.3rem;
        
    }

    .button span{
        padding: .7rem 1rem;
        border-radius: .5rem;
        background: green;
        color: white;
        margin-left: .5rem;
    }

    .button:hover{
        background: green;
        color: white;

    }

    .button:hover span{
        color: green;
        background: white;
        margin-left: 1rem;

    }

    

    .heading{
        text-align: center;
        padding-bottom: 2rem;
        text-shadow: 2px 2px 1px green;
        text-transform: uppercase;
        color: green;
        font-size: 3.5rem;
        letter-spacing: .2rem;
    }

    .heading span{
        text-transform: uppercase;
        color: green;
    }

    .about{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.5rem;
        padding-top: 5rem;
        padding-left: 10rem;
        
    }
/*
    .about .image{
        flex: 1 1 45rem;
    }

    .about .image img{
        width: 100%;
        
    }*/

    .about .content{
        flex: 1 1 45rem;
    }

    .about .content h3{
        font-size: 3.5rem;
        color: green;
        line-height: 1.2;
        text-shadow: 1px 2px 1px green;
    }

    .about .content p{
        font-size: 20px;
        color: green;
        line-height: 1.8;
        padding: 1rem 0;
        
    }
   
   
/*second section*/

    .about_page .row{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        padding-left: 10rem;
    }

    .about_page .row .image{
        flex: 1 1 30rem;
        
        
    }

    .about_page .row .image img{
        width: 100%;
        
    }

    .about_page .row .content{
        flex: 1 1 40rem;
        
    }

    .about_page .row .content h3{
        color: green;
        text-shadow: .2rem .2rem 0 rgba(0, 0, 0, .2);
        font-size: 3.0rem;
        line-height: 1.8;

    }

    .about_page .row .content p{
        font-size: 15px;
        color: green;
        padding: 1rem 0;
        line-height: 1.8;
    }
/*icon styling*/
    .icons_container{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        padding-top: 5rem;
        padding-bottom: 5rem;
        
        
    }

    .icons_container .icons{
        
        
        border: .1rem solid green;
        box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
        border-radius: .5rem;
        text-align: center;
        
        padding: 2.5rem;
        
    }

    .icons_container .icons i{
        font-size: 1.5rem;
        color: green;
        padding-bottom: .7rem;
    }

    .icons_container .icons h3{
        font-size: 1.5rem;
        color: black;
        padding: .5rem 0;
        text-shadow: .2rem .2rem 0 rgba(0, 0, 0, .2);
    }

    .icons_container .icons p{
        font-size: 15px;
        color: green;
    }
/* services styling*/
    .services .service-container{
        display: grid;
        gap: 2.5rem;
        grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
        
    }

    .services .service-container .container{
        background: white;
        border-radius: .5rem;
        box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
        border: .1rem solid green;
        padding: 2.5rem;
        
        

    }

    .services .service-container .container i{
        color: green;
        font-size: 2.5rem;
        padding-bottom: .5rem;
        

    }

    .services .service-container .container h3{
        color: green;
        font-size: 1.5rem;
        padding: 1rem 0;
        
    }

    .services .service-container .container p{
        color: green;
        font-size: 15px;
        line-height: 2;
        
    }
/*Symptom section styling*/
    .Symptom{
        display: flex;
        align-items: center;
        
        gap: 1.5rem;
        padding-top: 10rem;
    }

    .Symptom .checker h3{
        font-size: 2.5rem;
        color: green;
        line-height: 1.2;
        text-shadow: 1px 2px 1px green;
    }

    .Symptom .checker p{
        font-size: 1.5rem;
        color: green;
        line-height: 1.8;
        padding: 1rem 0;
        
    }


    
</style>