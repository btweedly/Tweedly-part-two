const virtualPet = () => {
    let petName = prompt('Name your pet.');

    let happiness = 0;
    let energy = 0;

    for (let i = 0; i < 6; i++) {
        let action = prompt('feed, pet, or walk?').toLocaleLowerCase();

        if (action == 'feed') {
            happiness++;
            energy += 2;
        } else if (action == 'pet') {
            happiness++;
        } else if (action == 'walk') {
            if (energy == 0){
                alert('Not enough energy to enjoy a walk.');
            } else {
                happiness += 2;
                energy--;
            }

        }
    }
    console.log(`${petName} has ${happiness} happiness and ${energy} energy.`);

}

virtualPet();