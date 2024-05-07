import React from 'react'


const AboutUs = () => {
  return (
    <div id='about-us'>

        <div className='title'>
            <h2>about us</h2>
        </div>

        <section>

            <div className='talks'>
                <h1>Who are zougktot</h1>
                <p>Welcome to souq kantra , a project by <span>zougktot </span>. Founded with a vision to revolutionize online commerce in Algeria , <br/>
                    zougktot  is a passionate team of entrepreneurs, developers, and designers dedicated to making a difference in the lives of Algerians.
                    Driven by a commitment to innovation and excellence</p>
                <p>we have assembled a talented and diverse team with a wide range of expertise, from technology and e-commerce to marketing and customer service. Together, we bring years of experience and a shared passion for empowering local businesses and communities.</p>
            </div>

            <div className='image'>
                <img src='../images/zougktot.png'/>
            </div>
            

        </section>

        <section>
            <div className="left">
                <h2>what is the purpose of souqkantra ...</h2>
                <img src='../images/Bag.png'/>
            </div>
            <div className="right">
                <p className='intro'>
                At souqkantra , our mission is clear: to create opportunities for Algerians to thrive in the digital marketplace. Our goals include:
                </p>
                <p className='ligns'>
                &#8226; Empowering local artisans, entrepreneurs, and businesses by providing them with a platform to showcase their products and reach a wider audience. We believe that by supporting local talent and creativity, we can contribute to economic growth and prosperity in Algeria.<br/><br/><br/><br/>
                &#8226; Promoting Algerian culture and heritage by offering a curated selection of authentic products that reflect the richness and diversity of our nation. From traditional handicrafts to modern innovations, we aim to celebrate the unique identity of Algeria and showcase it to the world.<br/><br/><br/><br/>
                &#8226; Simplifying the buying and selling process through user-friendly technology, secure payment methods, and reliable delivery services. We understand the importance of convenience and trust in online transactions, and we are committed to providing a seamless and enjoyable shopping experience for our users
                </p>
            </div>
        </section>

        <section>
            <div className='content'>
                <h2>Customers safety</h2><br/>
                <p className='intro'>At souqkantra , we prioritize the safety and satisfaction of our customers above all else. We understand that purchasing online can sometimes be daunting, which is why we're dedicated to providing a secure and reliable shopping experience for every user.</p><br/>
                <p className='ligns'>
                &#8226; Buyer Protection Guarantee: We stand behind every transaction made on our platform with our Buyer Protection Guarantee. This means that when you shop with us, you can have peace of mind knowing that your purchase is protected. In the rare event that a problem arises with your order, such as receiving a damaged item or not receiving your order at all, we'll work with you and the seller to quickly resolve the issue and ensure your satisfaction.
                <br/><br/><br/>
                &#8226; Verified Sellers: We carefully vet and verify all sellers on our platform to ensure that they meet our strict standards for reliability, quality, and customer service. By partnering with trusted sellers who share our commitment to excellence, we can confidently offer a curated selection of products that meet our customers' expectations.
                <br/><br/><br/>
                &#8226; Secure Payment Methods: We prioritize the security of your payment information by offering a variety of secure payment methods, including local options tailored to Algerian customers. Whether you prefer to pay with a credit card, debit card, mobile payment app, or cash on delivery, you can rest assured that your payment details are encrypted and protected from unauthorized access.
                <br/><br/><br/>
                &#8226; Transparent Reviews and Ratings: We believe in the power of transparency and accountability, which is why we provide honest and unbiased reviews and ratings from verified customers. These reviews not only help you make informed purchasing decisions, but they also hold sellers accountable for their products and service quality.
                <br/><br/><br/>
                &#8226; 24/7 Customer Support: Our dedicated customer support team is available around the clock to assist you with any questions, concerns, or issues you may have. Whether you need help placing an order, tracking a shipment, or resolving a dispute, we're here to provide prompt and personalized assistance to ensure your satisfaction.</p>
            </div>
            <img src='../images/cust.png'/>
        </section>
    </div>

  )
}

export default AboutUs