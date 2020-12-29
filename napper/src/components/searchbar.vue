<template>
  <div class="searchbar">
    <input
      id="search"
      type="search"
      placeholder="Search..."
      autofocus
      required
    />
    <button type="submit">Go</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Main styles
.searchbar {
  top: 40%;
  left: 30%;
  position: absolute;
  width: 25%;
  border-radius: 0.9rem;
}

input,
button {
  height: 2rem;
  font-family: 'Open Sans Condensed', sans-serif;
  border: 0;
  color: white;
  font-size: 1.2rem;
}
input[type="search"] {
  // outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
  width: 100%;
  background: rgba(0, 255, 136, 0.124);
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
  z-index: 1;
  position: relative;
  box-shadow: none;
}

button {
  // display: none; // prevent being able to tab to it
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  font-weight: bold;
  background: rgba(2, 60, 33, 0.652);
  border-radius: 0 0.7rem 0.7rem 0;
  transition: opacity 0.5s ease-in-out;
}

input:not(:placeholder-shown) {
  border-radius: 0.7rem;
  width: 100%;
  + button {
    opacity: 0.8;
    // display: block;
  }
}
</style>