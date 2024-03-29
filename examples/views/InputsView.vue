<script lang="ts" setup>
import UColorPicker from '../../components/UColorPicker.vue'
import UCheckbox from '../../components/UCheckbox.vue'
import UChoices from '../../components/UChoices.vue'
import UFileUpload from '../../components/UFileUpload.vue'
import USelect from '../../components/USelect.vue'
import USwitch from '../../components/USwitch.vue'
import UTextarea from '../../components/UTextarea.vue'
import { emailRule } from '../Vee/rules/email.rule'
import { minLengthRule } from '../Vee/rules/minLength.rule'
import { requiredRule } from '../Vee/rules/required.rule'
import { useValidator } from '../Vee/useValidator'
import { reactive } from 'vue'
import UButton from '../../components/UButton.vue'
import UInput from '../../components/UInput.vue'
import FormatColorFill from '../../icons/FormatColorFill.vue'
import FormatColorText from '../../icons/FormatColorText.vue'

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
    <div class="d-flex gap-2">
        <form action="" @submit.prevent="v.validate()" class="d-flex flex-column" style="max-width: 500px">
            <UInput
                class="mb-4"
                label="Email"
                v-model="form.email"
                :errors="v.errors.email"
            />
            <UInput
                class="mb-4"
                v-model="form.password"
                type="password"
                label="Password"
                :errors="v.errors.password"
                help-text="Minimum 5 characters"
            />

            <USelect
                v-model="form.fruit"
                label="Fruit"
                class="mb-4"
                :options="fruits"
                :errors="v.errors.fruit"
            />

            <USelect
                v-model="form.person"
                label="Options as objects"
                :options="people"
                :label-fn="p => p.name"
                :errors="v.errors.person"
            />

            <UFileUpload :files="form.files" accept="image/*"/>

            <UCheckbox
                class="mb-4"
                label="I agree"
                v-model="form.agreement"
                :errors="v.errors.agreement"
            />
            <USwitch
                class="mb-4"
                label="Lights"
                v-model="form.lights"
                :errors="v.errors.lights"
            />

            <UColorPicker v-model="form.color" class="mb-4"/>

            <UColorPicker
                v-model="form.color"
                variant="classic"
                class="mb-4">
                <a href="#">
                    <FormatColorFill/>
                    <div :style="{backgroundColor: form.color}" style="width: 100%; height: 0.25em"></div>
                </a>
            </UColorPicker>

            <UColorPicker
                v-model="form.color"
                variant="classic"
                class="mb-4">
                <div href="#">
                    <FormatColorText/>
                    <div :style="{backgroundColor: form.color}" style="width: 100%; height: 0.25em"></div>
                </div>
            </UColorPicker>

            <UChoices
                v-model="form.fruits"
                class="mb-4"
                :choices="fruits"
                label="Favorite Fruits"
            />

            <UTextarea
                v-model="form.about"
                class="mb-4"
                label="About"
            />

            <UButton flat>Login</UButton>
        </form>
        <div>
            <pre>v: {{ v }}</pre>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
