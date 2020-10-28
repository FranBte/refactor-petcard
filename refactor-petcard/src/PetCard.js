export default class PetCard {

  getPetVaccinations(vaccinations) {
    return (
      <ul className='PetCard__vaccination-list'>
      {vaccinations.map((vaccination, index) => (
        <li key={index}>
          {vaccination.name} - {vaccination.date}
        </li>
      ))}
      </ul>)
  }

  
  render() {
    const { pet, actions } = this.props;
    const { name, picture, vaccinations, birthDate, birthPlace, type } = pet;

    const showVaccinations = type === PET_TYPE.DOG || type === PET_TYPE.CAT;

    return (
      <div className='PetCard'>
        <h1>{name}</h1>
        {/* alt text */}
        <img src={picture} alt="Handsome pet picture"/>
        <section className='PetCard__details'>
          {/* use semantic html tags */}
          <p className='PetCard__details-birth-date'>{birthDate}</p>  
          <p className='PetCard__details-birth-place'>{birthPlace}</p>
          {showVaccinations && this.getPetVaccinations(vaccinations)}
        </section>
        {/* restructure html according to design */}
        {actions && 
        <section className='PetCard__actions'>
          {actions}
        </section>}
      </div>
    );
  }
}

function getOwnerCard() {
  // Add actions and functions depending on the user
  function onEditDetails() {}
  const cardAction = <Button onClick={onEditDetails}>Edit details</Button>;

  <PetCard actions={cardAction} pet={pet}/>
}

function getUserCard() {
  function onPetSit() {}
  const cardAction = <Button onClick={onPetSit}>Pet sit</Button>;

  <PetCard actions={cardAction} pet={pet}/>
}

function getAnonUserCard() {
  <PetCard pet={pet}/>
}



/**
 * Keep the content generic and then render the component with the relevant properties depending
 * on the view and the animal.
 */
