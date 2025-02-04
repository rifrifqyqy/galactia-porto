import { writable } from 'svelte/store';
import type { Portfolio } from '../types/Portotype.svelte';

export const activeCategory = writable<string>('Website');

export const activePortoItem = writable<Portfolio | null>(null);
 