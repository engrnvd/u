<script lang="ts" setup>
import UFormElement from '@/components/UFormElement.vue'
import { reactive } from 'vue'
import UButton from '../../components/UButton.vue'
import UCheckbox from '../../components/UCheckbox.vue'
import UChoices from '../../components/UChoices.vue'
import UColorPicker from '../../components/UColorPicker.vue'
import UFileUpload from '../../components/UFileUpload.vue'
import USelect from '../../components/USelect.vue'
import USwitch from '../../components/USwitch.vue'
import UTextarea from '../../components/UTextarea.vue'
import FormatColorFill from '../../icons/FormatColorFill.vue'
import FormatColorText from '../../icons/FormatColorText.vue'
import { emailRule } from '../Vee/rules/email.rule'
import { minLengthRule } from '../Vee/rules/minLength.rule'
import { requiredRule } from '../Vee/rules/required.rule'
import { useValidator } from '../Vee/useValidator'

const form = reactive({
    email: '',
    password: '',
    re_password: '',
    agreement: true,
    lights: true,
    gender: 'male',
    fruits: [],
    fruit: '',
    about: '',
    files: [],
    color: '#9fd',
    person: null,
})

const fruits = ['Apple', 'Mango', 'Grapes', 'Banana']
const people = reactive([{ id: 1, name: 'Naveed' }, { id: 2, name: 'Ayeza' }, { id: 3, name: 'Fatima' }])

const v = useValidator(form, v => {
    v.addRule(requiredRule('email'))
    v.addRule(emailRule('email'))
    v.addRule(requiredRule('password'))
    v.addRule(minLengthRule('password', 5))
    v.addRule(requiredRule('re_password'))
    v.addRule(requiredRule('agreement'))
    v.addRule(requiredRule('fruit'))
    v.addCustomRule('re_password', 'Passwords must match', () => form.password === form.re_password)
})

</script>

<template>
    <div class="flex gap-4">
        <form autocomplete="off" class="flex flex-col w-1/2 min-w-80 space-y-4" @submit.prevent="v.validate()">
            <UFormElement
                v-model="form.email"
                :errors="v.errors.email"
                label="Email"
                placeholder="you@company.com"
                type="email"
            />
            <UFormElement
                v-model="form.password"
                :errors="v.errors.password"
                help-text="Minimum 5 characters"
                label="Password"
                type="password"
            />

            <USelect
                v-model="form.fruit"
                :errors="v.errors.fruit"
                :options="fruits"
                label="Fruit"
            />

            <USelect
                v-model="form.person"
                :errors="v.errors.person"
                :label-fn="p => p.name"
                :options="people"
                label="Options as objects"
            />

            <UFileUpload :files="form.files" :max="2" accept="image/*"/>

            <UCheckbox
                v-model="form.agreement"
                :errors="v.errors.agreement"
                class="mb-4"
                label="I agree"
            />
            <USwitch
                v-model="form.lights"
                :errors="v.errors.lights"
                label="Lights"
            />

            <UColorPicker v-model="form.color"/>

            <UColorPicker
                v-model="form.color"
                variant="classic">
                <a href="#">
                    <FormatColorFill/>
                    <div :style="{backgroundColor: form.color}" style="width: 100%; height: 0.25em"></div>
                </a>
            </UColorPicker>

            <UColorPicker
                v-model="form.color"
                variant="classic">
                <div href="#">
                    <FormatColorText/>
                    <div :style="{backgroundColor: form.color}" style="width: 100%; height: 0.25em"></div>
                </div>
            </UColorPicker>

            <UChoices
                v-model="form.fruits"
                :choices="fruits"
                label="Favorite Fruits"
            />

            <UTextarea
                v-model="form.about"
                label="About"
            />

            <UButton flat>Login</UButton>
        </form>
        <div class="p-2">
            form:
            <pre>{{ form }}</pre>
            errors:
            <pre>{{ v.errors }}</pre>
        </div>
    </div>
</template>
