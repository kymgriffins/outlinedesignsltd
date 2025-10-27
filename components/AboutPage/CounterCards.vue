<script setup lang="ts">
import { ref, onMounted } from "vue";
import Logo from "@/layouts/shared/logo/index.vue";

type CounterItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  description: string;
  animatedValue?: number;
};

const counters = ref<CounterItem[]>([
  {
    value: 30,
    suffix: "+",
    title: "Completed Architectural Projects",
    description:
      "Delivering innovative constructions globally with commitment to quality and sustainability.",
  },
  {
    value: 20,
    prefix: "$",
    suffix: "M",
    title: "Invested in Green Building Technologies",
    description:
      "Driving eco-friendly innovation by investing in renewable resources and smart design solutions.",
  },
  {
    value: 50,
    suffix: "+",
    title: "Award-Winning Design Collaborations",
    description:
      "Partnering with top architects and designers to create iconic, inspiring spaces.",
  },
]);

/**
 * Animate counters from 0 to their target value
 */
const startCounting = () => {
  counters.value.forEach((item) => {
    item.animatedValue = 0;
    const duration = 2000; // milliseconds
    const steps = 60;
    const increment = item.value / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      item.animatedValue = Math.round(increment * currentStep);

      if (currentStep >= steps) {
        item.animatedValue = item.value; // ensure final value
        clearInterval(interval);
      }
    }, duration / steps);
  });
};

onMounted(() => {
  startCounting();
});

/**
 * Increment counter value
 */
const increment = (index: number) => {
  counters.value[index].value++;
  counters.value[index].animatedValue = counters.value[index].value;
};

/**
 * Decrement counter value
 */
const decrement = (index: number) => {
  if (counters.value[index].value > 0) {
    counters.value[index].value--;
    counters.value[index].animatedValue = counters.value[index].value;
  }
};
</script>
