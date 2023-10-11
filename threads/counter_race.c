#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#define NUM_THREADS 20
#define NUM_INCREMENTS 1000000
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

int counter;

void *AddThings(void *threadid) {
  for (int i = 0; i < NUM_INCREMENTS; i++) {
    /* pthread_mutex_lock(&mutex); */
    /* counter += 1; */
    /* pthread_mutex_unlock(&mutex); */

  }

  pthread_exit(NULL);
}

int main (int argc, char *argv[]) {
  pthread_t threads[NUM_THREADS];
  long t;
  for (t = 0; t < NUM_THREADS; t ++) {
    int rc = pthread_create(&threads[t], NULL, AddThings, (void *)t);
    if (rc) {
      printf("Error: return code from pthread_create() is %d\n", rc);
      exit(1);
    }
  }

  for (t = 0; t < NUM_THREADS; t++) {
    pthread_join(threads[t], NULL);
  }
  printf("Final value of counter is: %d\n", counter);
  pthread_exit(NULL);
}
