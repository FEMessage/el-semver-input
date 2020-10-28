import Vue, {VueConstructor} from 'vue'

declare module '@femessage/el-semver-input' {
  class FemessageComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type ElSemverInputData = {}

  type ElSemverInputMethods = {}

  type ElSemverInputComputed = {}

  type ElSemverInputProps = {
    value: string
    preventIllegal: boolean
    autoPadding: boolean
    prefix: boolean
    validRegular: any
    autoPaddingRegularList: any[]
  }

  type ElSemverInput = Combined<
    ElSemverInputData,
    ElSemverInputMethods,
    ElSemverInputComputed,
    ElSemverInputProps
  >

  export interface ElSemverInputType
    extends FemessageComponent,
      ElSemverInput {}

  const ElSemverInputConstruction: ExtendedVue<
    Vue,
    ElSemverInputData,
    ElSemverInputMethods,
    ElSemverInputComputed,
    ElSemverInputProps
  >

  export default ElSemverInputConstruction
}
