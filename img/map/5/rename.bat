FOR /L %%A IN (0,1,31) DO (
    FOR /L %%B IN (0,1,31) DO (
      REN "map_5_%%A-%%B.jpeg" "%%A-%%B.jpeg"
  )
)