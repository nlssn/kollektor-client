import http from '@/http-common';

class RecordsService {
   getAll() {
      return http.get('/records');
   }

   get(id) {
      return http.get(`/records/${id}`);
   }

   create(data) {
      return http.post('/records', data);
   }

   update(id, data) {
      return http.put(`/records/${id}`, data);
   }

   delete(id) {
      return http.delete(`/records/${id}`);
   }
}

export default new RecordsService();