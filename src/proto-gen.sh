#!/bin/bash

CLIENT_OUT_BASE_DIR=n0proto.ts
PROTOC_GEN_TS_PATH="$(yarn bin)/protoc-gen-ts"

mkdir -p ${CLIENT_OUT_BASE_DIR}

proto_dirs=`find ./vender/n0stack -type d | grep -v "\.git" | grep -v "test"`
for d in ${proto_dirs}
do
	ls -1 $d/*.proto > /dev/null 2>&1
	if [ "$?" = "0" ]; then
		echo '============================='
		echo $d
		CLIENT_OUT_DIR=${CLIENT_OUT_BASE_DIR}/`echo $d | sed -e 's/\.\/vender\/n0stack\/n0proto\/n0stack\///g'`
		mkdir -p $CLIENT_OUT_DIR
		echo $CLIENT_OUT_DIR
		protoc -I${d} \
			-I./vender \
			-I./vender/n0stack/n0proto \
			-I./vender/protobuf/src \
			-I./vender/grpc-gateway \
			-I./vender/grpc-gateway/third_party/googleapis \
			--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
			--js_out="import_style=commonjs,binary:${CLIENT_OUT_DIR}" \
			--grpc-web_out="import_style=typescript,mode=grpcwebtext:${CLIENT_OUT_DIR}" \
			$* ${d}/*.proto
		for f in "${CLIENT_OUT_DIR}"/*.js; do
			printf '/* eslint-disable */\n//@ts-nocheck\n' | cat - "${f}" > temp && mv temp "${f}"
		done
	fi
done

#			--js_out="import_style=commonjs,binary:${CLIENT_OUT_DIR}" \
#			--ts_out="service=true:${CLIENT_OUT_DIR}" \
