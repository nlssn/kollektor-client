<template>
   <div>
      <h1>Min samling</h1>
         <div class="current-record" v-if="currentRecord">
            <h3>{{currentRecord.title}} ({{currentRecord.year}})</h3>
            <p>av {{currentRecord.artist}}</p>
            <ul>
               <li v-if="currentRecord.score > 0">Betyg: {{currentRecord.score}}</li>
               <li v-if="currentRecord.owned">Du äger skivan</li>
               <li v-else>Du äger inte skivan</li>
            </ul>
            
            <router-link :to="{path: '/record/' + currentRecord._id}">Redigera</router-link>
         </div>
         <div class="collection">
            <div class="record" v-bind:key="index" v-for="(record, index) in records">
               <img v-bind:src="`https://fast-wildwood-30146.herokuapp.com/${record.image}`" @click="setActiveRecord(record, index)" v-bind:class="{selected: currentIndex == index}" v-bind:alt="`${record.artist} - ${record.title}`">
            </div>
         </div>
   </div>
</template>

<script>
import RecordsService from '@/services/RecordsService';

export default {
   name: 'Collection',
   data() {
      return {
         records: [],
         currentRecord: null,
         currentIndex: -1,
         title: ''
      }
   },
   methods: {
      fetchRecords() {
         RecordsService.getAll()
            .then(res => {
               this.records = res.data;
            })
            .catch(err => {
               console.error(err);
            });
      },
      refreshList() {
         this.fetchRecords();
         this.currentRecord = null;
         this.currentIndex = -1;
      },
      setActiveRecord(record, index) {
         this.currentRecord = record;
         this.currentIndex = index;
      }
   },
   mounted() {
      this.fetchRecords();
   }
}
</script>

<style scoped>
   .current-record {
      border: 2px solid #ccc;
      border-radius: 5px;
      padding: 1em;
      margin-bottom: 2em;
   }

   .current-record ul {
      list-style: none;
      margin-left: 0;
      margin-bottom: 1em;
   }

   .selected {
      border: 2px solid #d49a2c;
      border-radius: 5px;
   }

   img {
      width: 100%;
      height: auto;
      cursor: pointer;
   }

   .collection {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;
   }
</style>