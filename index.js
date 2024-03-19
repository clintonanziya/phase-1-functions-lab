function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    return Math.abs(pickupLocation - headquartersLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Each block is 264 feet
  }

  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    return blocks * 264; // Each block is 264 feet
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow any rides over 2500 feet
    }
  }
