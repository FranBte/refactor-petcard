/*
  Let's assume we are building a web platform to connect pet owners. As a pet owner, you can
  create a profile for your pets, or volunteer to pet sit another user's pet.
  Pet profiles are public, so anonymous users (users that are not logged in) can also see them.
  Each pet has a profile card and the actions that users can perform depend on the their role.
  These are the actions for every role:
    - Pet owner: edit pet details, edit availability
    - Pet sitter: volunteer for pet sitting
    - Anonymous users: no actions
  There are many pet types, but we only need to display vaccinations for cats and dogs.
*/
// PetCard.js (src/common)
class PetCard {
    onEditDetails() {}
    onPetSit() {}
    render() {
      const { pet, user } = this.props;
      const {
        type,
        name,
        picture,
        vaccinations,
        owner,
        birthDate,
        birthPlace,
      } = pet;
      const actionsClass = `PetCard__actions ${!!user ? '' : 'hidden'}`;
      return (
        <div className='PetCard'>
          <h1>{name}</h1>
          <img src={picture} />
          <section className='PetCard__details'>
            <div className='PetCard__birthDate'>{birthDate}</div>
            <div className='PetCard__birthPlace'>{birthPlace}</div>
            {type === PET_TYPE.DOG || type === PET_TYPE.CAT ? (
              <ul className='PetCard__vaccinations'>
                {vaccinations.map((vaccination) => (
                  <li>
                    {vaccination.name} - {vaccination.date}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className={actionsClass}>
              {user === owner ? (
                <Button onClick={this.onEditDetails}>Edit details</Button>
              ) : user ? (
                <Button onClick={this.onPetSit}>Pet sit</Button>
              ) : null}
            </div>
          </section>
        </div>
      );
    }
  }
  