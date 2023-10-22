import React from 'react';
import Card from './Card';

const CardRow = () => {
  const cardsData = [
    {
      title: "ABCD",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ornare magna. Etiam eros turpis, rutrum nec dolor sed, interdum malesuada dui. Proin augue odio, ornare in fermentum et, blandit tincidunt nisi. Ut ac eros sed leo laoreet dignissim. Mauris hendrerit scelerisque nibh, sed vestibulum nulla ultricies in",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFRwiba7M0MW9TNld-Iwp4izFsb93zD_NlSlCxmKQ&s"
    },
    {
      title: 'XYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ornare magna. Etiam eros turpis, rutrum nec dolor sed, interdum malesuada dui. Proin augue odio, ornare in fermentum et, blandit tincidunt nisi. Ut ac eros sed leo laoreet dignissim. Mauris hendrerit scelerisque nibh, sed vestibulum nulla ultricies in',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5am-B7fHPf3zdfBqXkriuGut4MESfl4oeRJFoTNeHQ&s'
    },
    {
      title: 'PQRS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ornare magna. Etiam eros turpis, rutrum nec dolor sed, interdum malesuada dui. Proin augue odio, ornare in fermentum et, blandit tincidunt nisi. Ut ac eros sed leo laoreet dignissim. Mauris hendrerit scelerisque nibh, sed vestibulum nulla ultricies in',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirxYUtdu-Tb5T4I3E_wCWbHDqWrNbr1yRkVIK0mWrNg&s'
    }
  ];

  return (
    <div className="card-row">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardRow;