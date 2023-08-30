<template>
  <div class="edit-container">
    <p>Bearbeiten:</p>
    <form class="border">
      <input type="file" name="" id="" class="upload" />
      <button>Speichern</button>
    </form>
    <span class="border">
      <button>
        CheckIn Pdf-download
        <font-awesome-icon icon="fa-solid fa-download" class="fas" />
      </button>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edit-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 1rem;
  height: 3rem;
  width: 100%;
  background: #757575;
  border: #00688b solid;
  border-radius: 24px;

  .border {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    height: 100%;
    border-left: #4d4d4d solid;
  }

  .upload {
    width: 20rem;
    &::file-selector-button {
      padding: 0.5rem 0.5rem;
      width: 50%;
      background-color: #00688b;
      border: none;
      border-radius: 24px;
      font-size: 1.15em;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      color: white;
    }
    &::file-selector-button:hover {
      background-color: #0095c5;
    }
  }

  button {
    padding: 0.5rem 0.5rem;
    margin: 1rem 0;
    width: 250px;
    background: #00688b;
    border: none;
    border-radius: 24px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    &:hover {
      background: #0095c5;
      .fas {
        color: #00688b;
      }
    }
  }
}
</style>
