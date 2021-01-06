<template>
   <div>
      <h1>Lägg till ny skiva</h1>
      
      <div v-if="!submitted">
         <form @submit.prevent="saveRecord">
            <div class="form-group">
               <label for="image">Skivomslag</label>
               <input type="file" @change="onFileSelected" name="image" id="image">
            </div>

            <div class="form-group">
               <label for="title">Title</label>
               <input type="text" v-model="record.title"  name="title" id="title" required />
            </div>

            <div class="form-group">
               <label for="artist">Artist</label>
               <input type="text" v-model="record.artist" name="artist" id="artist" required />
            </div>

            <div class="form-group">
               <label for="year">Year</label>
               <input type="text" v-model="record.year" name="year" id="year" required />
            </div>

            <div class="form-group">
               <label for="owned-false">Äger inte</label>
               <input type="radio" v-model="record.owned" name="owned" id="owned-false" value="false">
               <label for="owned-true">Äger</label>
               <input type="radio" v-model="record.owned" name="owned" id="owned-true" value="true">
            </div>

            <div class="form-group">
               <label for="score">Betyg</label>
               <p v-if="record.score <= 0">Inget betyg angivet</p>
               <p v-else>Ditt betyg: {{ record.score }}</p>
               <input type="range" v-model="record.score" name="score" id="score" min="0" max="10">
            </div>

            <input type="submit" class="btn" value="Lägg till skiva">
         </form>
      </div>
      
      <div v-else>
         <h4>Den nya skivan är tillagd!</h4>
         <button @click.prevent="newRecord" class="btn">Lägg till en ny skiva</button>
         <router-link to="/collection" class="btn ghost">Till samlingen</router-link>
      </div>

   </div>
</template>

<script>
import RecordsService from '@/services/RecordsService';

export default {
   name: 'AddRecord',
   data() {
      return {
         record: {
            _id: null,
            title: '',
            artist: '',
            year: '',
            owned: false,
            score: 0,
            image: null
         },
         submitted: false,
         imageChosen: false
      };
   },
   methods: {
      onFileSelected(e) {
         this.record.image = e.target.files[0];
         this.imageChosen = true;
      },
      saveRecord() {
         // Because of the image, we need to send this as a formData object
         // Here we create a new object and append all the values
         const fd = new FormData();
         fd.append('title', this.record.title);
         fd.append('artist', this.record.artist);
         fd.append('year', this.record.year);
         fd.append('owned', this.record.owned);
         fd.append('score', this.record.score);

         if(this.imageChosen) {
            fd.append('image', this.record.image);
         }

         // Then make a new request, sending the fd object
         RecordsService.create(fd)
            .then(res => {
               this.record._id = res.data._id;
               this.submitted = true;
            })
            .catch(err => {
               console.error(err);
            });
      },
      newRecord() {
         this.submitted = false;
         this.record = {};
         this.imageChosen = false;
      }
   }
}
</script>

<style scoped>

</style>