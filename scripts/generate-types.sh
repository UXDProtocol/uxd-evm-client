# This script is made to be executed once contracts have been modified in ./src/artifacts/*
# it generates types for all the contracts in the repository and adapt the files contents

# Delete the old types files
rm -rf ./src/artifacts/types

# Generates new typing files
npx typechain --target=ethers-v5 ./src/artifacts/*
# Create the folder to store them
mkdir ./src/artifacts/types/

# Move the generated files to the appropriate directory
mv ./types/ethers-contracts/* ./src/artifacts/types/

# Cleanup generated directories
rmdir ./types/ethers-contracts
rmdir ./types

