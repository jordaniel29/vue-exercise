const app = Vue.createApp({
  data() {
    return {
      show: true,
      books: [
        {
          title: "Buku 1",
          author: "Jordan Daniel",
          img: "assets/buku1.jpg",
          isFav: true,
        },
        {
          title: "Buku 2",
          author: "Jordan Joshua",
          img: "assets/buku2.jpg",
          isFav: false,
        },
        {
          title: "Buku 3",
          author: "Daniel Joshua",
          img: "assets/buku3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    changeFavorite(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
