const FacebookIcon = (props) => (
  <svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M23 11.57C23 5.178 17.853 0 11.5 0S0 5.178 0 11.57C0 17.345 4.205 22.131 9.703 23v-8.085H6.782V11.57h2.921V9.02c0-2.899 1.716-4.5 4.344-4.5 1.258 0 2.574.226 2.574.226V7.59h-1.45c-1.428 0-1.874.892-1.874 1.807v2.172h3.19l-.51 3.345h-2.68V23C18.795 22.131 23 17.345 23 11.57Z"
      fill={ props.color ?? '#fff' } 
    />
  </svg>
)

export { FacebookIcon }