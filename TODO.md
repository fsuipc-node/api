# Feature

## Offsets depending on others offset value to be converted:
  - `0xBDC`: flaps levels
  - `0xBE0`: flaps position indicator
  - `0xBE4`: flaps position indicator
  - `0xB50`: bleed air source control, value depending on aircraft model
  - `0x892`, `0x92A`, `0x9C2`, `0xA5A`: engine 1-4 starter switch position value depending on propulsion type
  - `0x898`: require engineRPMScaler for proper calculation

## Write offsets

Convert should varies depending on write or read mode 

## Offset missing mappings:
  - `0xAF8`: fuel tank selected
