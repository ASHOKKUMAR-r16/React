
import React from 'react'
import s1 from '../imajes/A1.jpg'
import s2 from '../imajes/A2.jpg'
import s3 from '../imajes/A3.jpg'
 
export default function Aboutus() {
  return (
    <>
    <div className="container text-center">
    <div class="row">
      <div class="col-12">
        <h1 className="text-success">About Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perferendis officia vero reprehenderit eius repellat ipsa praesentium vitae, facere sunt in iste minus assumenda inventore magni aut dolores nulla molestias, at rem aliquid, maxime id. Molestiae minus mollitia, rem inventore excepturi voluptas maxime numquam est exercitationem culpa unde commodi sed aliquid ab temporibus vero error magni! Esse atque est illo eos similique quidem ipsam magnam deleniti, ullam sint necessitatibus perspiciatis perferendis saepe exercitationem. Maiores dignissimos necessitatibus doloremque illum tenetur, quibusdam itaque provident accusantium amet voluptas explicabo neque nemo officiis assumenda nam in sequi? Quibusdam facere nihil quam natus quos vitae. ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut magnam dolor ad. Repellat debitis, odio aut dolorem, placeat fugiat ullam et voluptate obcaecati, aliquid temporibus nulla qui ipsa laudantium!</p>
      </div>
    </div>
    <div class="row">
        <div className="col-md-4"><div class="card" >
            <img src={s1} class="card-img-top p-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-danger">Ashok Kumar.N</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Team Leader</a>
            </div>
          </div></div>
        <div className="col-md-4"><div class="card" >
            <img src={s2} class="card-img-top p-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-danger">Swathika</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Team member</a>
            </div>
          </div></div>
        <div className="col-md-4"><div class="card" >
            <img src={s3} class="card-img-top p-3" alt="..."/>
            <div className="card-body">
              
              <h5 className="card-title text-danger">Ajay</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Team member</a>
            </div>
          </div></div>
        </div>
        <div className="row">
 
            <div className="col-4">
                <img src="" alt=""/>
 
            </div>
           
        </div>
   
   
    </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
            <div className="bg-primary  p-4 text-center">@Our Project.Provide More API details </div>
            </div>
 
        </div>
    </div>
 
 
 
     
    </>
  )
}
 
