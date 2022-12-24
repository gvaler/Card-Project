import React from "react";
import "./style.css";

export function CardComponent() {
  return (
    <div className="card_container card_body">
      <div className="card">
        <div className="card__header">
          <img
            src="https://images.macrumors.com/t/tA_RAlO-sKIrvULzR2aaVJ5Tyd4=/1920x/article-new/2019/02/MR-Future-Products-2020-2.png"
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">Technology</span>
          <h4>Technology company would I reather</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <img
            src="https://blogscdn.thehut.net/app/uploads/sites/495/2021/03/feel-good-foods-feature-min_1614877954.jpg"
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-brown">Food</span>
          <h4> our body is what we eat... </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
            placeat omnis dignissimos recusandae molestiae culpa hic, nisi dolor
            cupiditate labore! Vel odio illo nostrum consequatur, facilis dolor
            velit totam.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <img
            src="https://i.pinimg.com/736x/9e/b6/87/9eb6874f1430cb6735bb356a8c92ea38.jpg"
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-red">Automobile</span>
          <h4>my love for cars is endeless</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
      </div>
    </div>
  );
}
