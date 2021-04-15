/**
 * Implement def shortestPath(self, fromStationName, toStationName)
 * method to find shortest path between 2 stations
 */

/*
 *      Visual representation of the Train map used
 *
 *      King's Cross St Pancras --- Angel ---- Old Street
 *      |                   \                            |
 *      |                    \                            |
 *      |                     \                            |
 *      Russell Square         Farringdon --- Barbican --- Moorgate
 *      |                                                  /
 *      |                                                 /
 *      |                                                /
 *      Holborn --- Chancery Lane --- St Paul's --- Bank
 */

/* A Queue object for queue-like functionality over JavaScript arrays. */
class Queue {
  constructor() {
    this.items = [];
  }
  /**
   *
   * @param {Station} obj
   */
  enqueue(obj) {
    this.items.push(obj);
  }
  /**
   *
   * @returns {Station}
   */
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

/**
 * class Station
 * Respresents Station in the rail network. Each station is identified by unique
 * name. Station is connected with other stations - this information is stored
 * in the 'neighbours' field. Two station objects with the same name are equal
 * therefore they are considered to be same station.
 */
class Station {
  constructor(name) {
    this.name = name;
    this.neighbours = new Array();
  }

  getName() {
    return this.name;
  }
  /**
   * Function to storeconnected station in neighbours array
   * @param {Station} v
   */
  addNeighbour(v) {
    this.neighbours.push(v);
  }

  getNeighbours() {
    return this.neighbours;
  }

  equals(obj) {
    return obj instanceof Station && this.name.equals(obj.getName());
  }
}

class TrainMap {
  constructor() {
    this.stations = new Map();
  }

  addStation(name) {
    const s = new Station(name);
    this.stations.set(name, s);
    return this;
  }

  getStation(name) {
    return this.stations.get(name);
  }

  /**
   *
   * @param {Station} fromStation
   * @param {Station} toStation
   * @returns
   */
  connectStations(fromStation, toStation) {
    if (fromStation == null) {
      throw "From station is null";
    }
    if (toStation == null) {
      throw "To station is null";
    }
    fromStation.addNeighbour(toStation);
    toStation.addNeighbour(fromStation);
    return this;
  }

  /**
   * Function to find shortest path between 2 stations
   * @param {String} from
   * @param {String} to
   */
  shortestPath(from, to) {
    //   case: curStation is dest
    if (this.stations.get(from).getName() == to) {
      return 0;
    }

    const distanceMap = new Map(
      Array.from(this.stations.keys()).map((item) => [item, 0])
    );

    const visitedeMap = new Map(
      Array.from(this.stations.keys()).map((item) => [item, false])
    );
    const queue = new Queue();
    queue.enqueue(this.stations.get(from));

    while (!queue.isEmpty()) {
      const currStation = queue.dequeue();
      visitedeMap.set(currStation.getName(), true);
      //case: curStation is dest
      if (currStation.getName() == to) {
        console.log(distanceMap);
        return distanceMap.get(to);
      }

      for (const neighbour of currStation.getNeighbours()) {
        if (visitedeMap.get(neighbour.getName()) == false) {
          queue.enqueue(neighbour);
          visitedeMap.set(neighbour.getName(), true);
          distanceMap.set(
            neighbour.getName(),
            distanceMap.get(currStation.getName()) + 1
          );
        }
      }
    }
    console.log(distanceMap);
    return distanceMap.get(to);
  }
}

const trainMap = new TrainMap();

trainMap
  .addStation("King's Cross St Pancras")
  .addStation("Angel")
  .addStation("Old Street")
  .addStation("Moorgate")
  .addStation("Farringdon")
  .addStation("Barbican")
  .addStation("Russel Square")
  .addStation("Holborn")
  .addStation("Chancery Lane")
  .addStation("St Paul's")
  .addStation("Bank");

trainMap
  .connectStations(
    trainMap.getStation("King's Cross St Pancras"),
    trainMap.getStation("Angel")
  )
  .connectStations(
    trainMap.getStation("King's Cross St Pancras"),
    trainMap.getStation("Farringdon")
  )
  .connectStations(
    trainMap.getStation("King's Cross St Pancras"),
    trainMap.getStation("Russel Square")
  )
  .connectStations(
    trainMap.getStation("Russel Square"),
    trainMap.getStation("Holborn")
  )
  .connectStations(
    trainMap.getStation("Holborn"),
    trainMap.getStation("Chancery Lane")
  )
  .connectStations(
    trainMap.getStation("Chancery Lane"),
    trainMap.getStation("St Paul's")
  )
  .connectStations(
    trainMap.getStation("St Paul's"),
    trainMap.getStation("Bank")
  )
  .connectStations(
    trainMap.getStation("Angel"),
    trainMap.getStation("Old Street")
  )
  .connectStations(
    trainMap.getStation("Old Street"),
    trainMap.getStation("Moorgate")
  )
  .connectStations(trainMap.getStation("Moorgate"), trainMap.getStation("Bank"))
  .connectStations(
    trainMap.getStation("Farringdon"),
    trainMap.getStation("Barbican")
  )
  .connectStations(
    trainMap.getStation("Barbican"),
    trainMap.getStation("Moorgate")
  );

  console.log(trainMap.stations);

console.log(trainMap.shortestPath("King's Cross St Pancras", "St Paul's"));
