<template>
    <div>
      <label :for="id" class="block text-sm font-medium text-gray-900">{{ label }}</label>
      <div class="mt-1">
        <input
          :id="id"
          :name="name"
          :type="type"
          :value="modelValue"
          @input="handleInput"
          :placeholder="placeholder"
          class="block w-full rounded-md border-0 py-1.5 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
  };
  </script>
  
  <style scoped>
  </style>
  