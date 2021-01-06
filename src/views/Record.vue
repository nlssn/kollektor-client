<template>
   <div>
      <h1>Redigera skiva</h1>
      <div v-if="!edited">
         <form>
            <div class="form-group">
               <div v-if="currentRecord.image != null">
                  <label for="image">Skivomslag</label>
                  <img v-bind:src="`http://localhost:5000/${currentRecord.image}`" alt="Skivomslag" width="200px" height="200px"><br>
                  <input type="file" @change="onFileSelected" name="image" id="image">
               </div>
               <div v-else>
                  <label for="image">Skivomslag</label><br><br>
                  <input type="file" @change="onFileSelected" name="image" id="image">
               </div>
            </div>

            <div class="form-group">
               <label for="title">Titel</label>
               <input type="text" v-model="currentRecord.title"  name="title" id="title" required />
            </div>

            <div class="form-group">
               <label for="artist">Artist</label>
               <input type="text" v-model="currentRecord.artist" name="artist" id="artist" required />
            </div>

            <div class="form-group">
               <label for="year">Year</label>
               <input type="text" v-model="currentRecord.year" name="year" id="year" required />
            </div>

            <div class="form-group">
               <label for="owned-false">Äger inte</label>
               <input type="radio" v-model="currentRecord.owned" name="owned" id="owned-false" value="false">
               <label for="owned-true">Äger</label>
               <input type="radio" v-model="currentRecord.owned" name="owned" id="owned-true" value="true">
            </div>

            <div class="form-group">
               <label for="score">Betyg</label>
               <p v-if="currentRecord.score <= 0">Inget betyg angivet</p>
               <p v-else>Ditt betyg: {{ currentRecord.score }}</p>
               <input type="range" v-model="currentRecord.score" name="score" id="score" min="0" max="10">
               
            </div>

            <button @click.prevent="updateRecord" class="btn">Uppdatera</button>
            <button @click.prevent="deleteRecord" class="btn del">Radera</button>
         </form>
      </div>

      <div v-else>
         <h4>Skivan är uppdaterad!</h4>
         <p>
            <button @click.prevent="backToRecord" class="btn">Tillbaka till skivan</button>
            <router-link to="/collection" class="btn ghost">Till samlingen</router-link>
         </p>
      </div>
   </div>
</template>

<script>
import RecordsService from '@/services/RecordsService';

export default {
   name: 'Record',
   data() {
      return {
         currentRecord: null,
         imageChanged: false,
         edited: false
      }
   },
   methods: {
      onFileSelected(e) {
         this.currentRecord.image = e.target.files[0];
         this.imageChanged = true;
      },
      getRecord(id) {
         RecordsService.get(id)
            .then(res => {
               this.currentRecord = res.data;
            })
            .catch(err => {
               console.error(err);
            });
      },
      updateRecord() {
         const fd = new FormData();
         fd.append('title', this.currentRecord.title);
         fd.append('artist', this.currentRecord.artist);
         fd.append('year', this.currentRecord.year);
         fd.append('owned', this.currentRecord.owned);
         fd.append('score', this.currentRecord.score);

         // Only append a new image if we have selected a new one
         if(this.imageChanged) {
            fd.append('image', this.currentRecord.image);
         }

         RecordsService.update(this.currentRecord._id, fd)
            .then((res) => {
               this.currentRecord = res.data;
               this.edited = true;
            })
            .catch(err => {
               console.error(err);
            });
      },
      deleteRecord() {
         RecordsService.delete(this.currentRecord._id)
            .then(() => {
               this.$router.push({name: "Collection"}); // "Redirect" to /records page
            })
            .catch(err => {
               console.error(err);
            });
      },
      backToRecord() {
         this.edited = false;
      }
   },
   mounted() {
      this.imageChanged = false;
      this.getRecord(this.$route.params.id);
   }
}
</script>

<style scoped>

</style>