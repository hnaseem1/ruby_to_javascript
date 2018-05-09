// def get_new_car
//   {
//     city: 'Toronto',
//     passengers: 0,
//     gas: 100,
//   }
// end

function getNewCar() {
  return {
    'city': 'Toronto',
    'passenger': 0,
    'gas': 100,
  }
}


//
// def add_car(cars, new_car)
//   cars << new_car
//   "Adding new car to fleet. Fleet size is now #{cars.length}."
// end

function addCar(cars, newCar) {
  cars.push(newCar)
  return 'Adding new car to fleet. Fleet size is now ' + cars.length
}

// console.log(add_car(['BMW'], "Mercedes"));

//
// def pick_up_passenger(car)
//   car[:passengers] += 1
//   car[:gas] -= 10
//   "Picked up passenger. Car now has #{car[:passengers]} passengers."
// end

function pickUpPassenger(car) {
  car['passenger'] += 1
  car['gas'] -= 10
  return 'Picked up passenger. Car now has '+car['passenger']+' passengers.'
}

// console.log(pick_up_passenger({'passenger': 10, 'gas': 27}));
//
// def get_destination(car)
//   if car[:city] == 'Toronto'
//     'Mississauga'
//   elsif car[:city] == 'Mississauga'
//     'London'
//   elsif car[:city] == 'London'
//     'Toronto'
//   end
// end

function getDestination(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga'
  } else if (car['city'] === 'Mississauga') {
    return 'London'
  } else if (car['city'] === 'London') {
    return 'Toronto'
  }
}

// console.log(get_destination({'city': 'London'}));


//
// def fill_up_gas(car)
//   old_gas = car[:gas]
//   car[:gas] = 100
//   "Filled up to #{ get_gas_display(car[:gas]) } on gas from #{ get_gas_display(old_gas) }."
// end


function fillUpGas(car) {
  oldGas = car['gas']
  car['gas'] = 100
  return 'Filled up to '+getGasDisplay(car['gas'])+' on gas from '+getGasDisplay(oldGas)
}


//
// def get_gas_display(gas_amount)
//   "#{gas_amount}%"
// end

function getGasDisplay(gasAmount) {
  return gasAmount
}

// console.log(fillUpGas({'gas': 98}));
//
// def drive(car, city_distance)
//   if car[:gas] < city_distance
//     return fill_up_gas(car)
//   end
//
//   car[:city] = get_destination(car)
//   car[:gas] -= city_distance
//   "Drove to #{car[:city]}. Remaining gas: #{ get_gas_display(car[:gas]) }."
// end

function drive(car, cityDistance) {
  if (car['gas'] < cityDistance) {
    return fillUpGas(car)
  }
  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return 'Drove to '+car['city']+'. Remaining gas: '+getGasDisplay(car['gas']);
}

//
// console.log(drive({'city': 'BMW', 'gas': 89}, 100));
// console.log(drive({'city': 'BMW', 'gas': 89}, 80));
//
// def drop_off_passengers(car)
//   previous_passengers = car[:passengers]
//   car[:passengers] = 0
//   "Dropped off #{previous_passengers} passengers."
// end

function dropOffPassengers(car) {
  previousPassengers = car['passenger'];
  car['passenger'] = 0;
  return 'Dropped off '+previousPassengers+' passengers.'
}

//
// def act(car)
//   distance_between_cities = 50
//
//   if car[:gas] < 20
//     fill_up_gas(car)
//
//   elsif car[:passengers] < 3
//     pick_up_passenger(car)
//
//   else
//     if car[:gas] < distance_between_cities
//       return fill_up_gas(car)
//     end
//     drove_to = drive(car, distance_between_cities)
//     passengers_dropped = drop_off_passengers(car)
//     "#{drove_to} #{passengers_dropped}"
//   end
// end

function act(car) {
  distanceBetweenCities = 50;

  if (car['gas'] < 20) {
    fillUpGas(car);
  } else if (car['passengers'] < 3) {
    return pickUpPassenger(car);
  } else {
    if (car['gas'] < distanceBetweenCities) {
      return fillUpGas;
    }
    driveTo = drive(car, distanceBetweenCities);
    passengersDropped = dropOffPassengers(car);
    return driveTo + passengersDropped;
  }

}

//
// def command_fleet(cars)
//   cars.each_with_index do |car, i|
//     action = act(car)
//     puts "Car #{i + 1}: #{action}"
//   end
//   puts '---'
// end

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i])
    return console.log('Car'+i+1+':'+action);
  }
  return console.log('----');
}

commandFleet(['BMW'])

//
// def add_one_car_per_day(cars, num_days)
//   num_days.times do
//     new_car = get_new_car
//     puts add_car(cars, new_car)
//     command_fleet(cars)
//   end
// end

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays.length; i++) {
    newCar = getNewCar;
    console.log(addCar(cars, newCar));
    return commandFleet(cars);
  }
}


var cars = []
addOneCarPerDay(cars, 10)
