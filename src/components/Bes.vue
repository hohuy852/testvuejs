<template>
  <div>
    <div class="bes pb-40">
      <div class="text-h2 pt-150 pb text-primary font-bold text-center">
        Best Product
      </div>
      <div
        class="
          text-primary
          pt-12
          pb-20
          text-paragrahp2
          font-normal
          max-w-2xl
          mx-auto
          text-center
        "
      >
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </div>
      <div
        class="
          grid
          md:gap-y-16
          xl:gap-y-0 xl:grid-cols-3
          gap-y-12
          md:mx-174
          mx-10
        "
      >
        <div
          class="relative mt-12 lg:mt-0"
          v-for="(item, i) in product"
          :key="i"
        >
          <div class="absolute -mt-12">
            <div class="relative">
              <img src="@/assets/producticon-bg.png" alt="" />
              <div
                class="
                  absolute
                  underline
                  text-badge
                  font-extrabold
                  top-1/2
                  left-1/2
                  transform
                  -translate-x-1/2 -translate-y-1/2
                "
              >
                {{ item.number }}
              </div>
            </div>
          </div>
          <div
            class="
              absolute
              flex
              border-4 border-black
              w-369
              items-center
              bg-white
              h-79
              bottom-0
              -mb-10
              left-1/2
              transform
              -translate-x-1/2
            "
          >
            <div class="text-product font-extrabold max-w-180 ml-7">
              How to create mobile-optimized
            </div>
            <a
              href="#"
              class="
                w-16
                h-16
                border-4 border-black
                bg-black
                text-white
                relative
                go
                rounded-full
                ml-12
                hover:bg-white hover:text-black
              "
            >
            </a>
          </div>
          <img :src="require(`@/assets/${item.img}`)" />
        </div>
      </div>
    </div>
    <div class="products pt-36">
      <div
        class="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-x-4
          lg:mx-44
          mx-3
        "
      >
        <div class="flex flex-col" v-for="(item, i) in products" :key="i">
          <a href="#">
            <img
              :src="require(`@/assets/products/${item.img}@2x.png`)"
              alt=""
              class="object-contain"
            />
          </a>

          <div class="text-product-item font-semibold text-black mt-7">
            [what happen] How to create
          </div>
          <div class="flex mt-8">
            <div class="text-product-action text-price font-normal">
              2,500 won
            </div>
            <div class="flex ml-auto">
              <img src="@/assets/hearticon.png" alt="" class="object-contain" />
              <div class="text-product-action text-like font-normal">236</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-28 text-center">
        <a
          href=""
          class="
            px-5
            py-2
            md:px-9 md:py-5
            border-4 border-black
            text-see-more text-price
            font-bold
            hover:bg-black hover:text-white
          "
          >SEE MORE</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          number: "01",
          img: "best-image-01@2x.png",
        },
        {
          number: "02",
          img: "best-image-02@2x.png",
        },
        {
          number: "03",
          img: "best-image-03@2x.png",
        },
      ],
      products: [
        {
          img: "img-01",
        },
        {
          img: "img-02",
        },
        {
          img: "img-03",
        },
        {
          img: "img-04",
        },
        {
          img: "img-05",
        },
        {
          img: "img-06",
        },
        {
          img: "img-07",
        },
        {
          img: "img-08",
        },
        {
          img: "img-09",
        },
        {
          img: "img-10",
        },
        {
          img: "img-11",
        },
        {
          img: "img-12",
        },
        {
          img: "img-13",
        },
        {
          img: "img-14",
        },
        {
          img: "img-15",
        },
        {
          img: "img-16",
        },
        {
          img: "img-17",
        },
        {
          img: "img-18",
        },
        {
          img: "img-19",
        },
        {
          img: "img-20",
        },
        {
          img: "img-21",
        },
        {
          img: "img-22",
        },
        {
          img: "img-23",
        },
        {
          img: "img-24",
        },
        {
          img: "img-25",
        },
      ],
    };
  },
};
</script>

<style>
.bes {
  background-image: url("../assets/bes-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.adas {
  bottom: -71px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>