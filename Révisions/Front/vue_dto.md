## Les DTO (Data Transfer Objects) en TypeScript

Un DTO est un objet simple utilisé pour structurer, formater et typer les données reçues de l'API Symfony, évitant l'utilisation du type générique any.

```typescript

// src/dtos/UserDto.ts
export class UserDto {
    id: number;
    email: string;
    fullName: string;
    roles: string[];

    constructor(data: any) {
        this.id = data.id;
        this.email = data.email;
        // Formatage de la donnée dès sa réception
        this.fullName = `${data.firstName} ${data.lastName.toUpperCase()}`;
        this.roles = data.roles || [];
    }

    isAdmin(): boolean {
        return this.roles.includes('ROLE_ADMIN');
    }
}

```

### Utilisation dans un composant Vue :

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserDto } from '@/dtos/UserDto';

const user = ref<UserDto | null>(null);

onMounted(async () => {
    const response = await fetch('/api/me');
    const rawData = await response.json();
    
    // Instanciation sécurisée via le DTO
    user.value = new UserDto(rawData);
});
</script>

<template>
  <div v-if="user">
    <p>Bienvenue, {{ user.fullName }}</p>
  </div>
</template>
```
