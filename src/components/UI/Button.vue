<template>
    <button class='main-btn'>
      <slot></slot>
    </button>
</template>

<style>
    .main-btn {
        padding: 10px 30px;
        border-radius: 12px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        color: var(--white-color);
        background-color: var(--main-color);
    }
</style>